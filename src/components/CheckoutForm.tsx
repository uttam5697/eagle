import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import type { StripeCardElement } from '@stripe/stripe-js';
import api from "../lib/api";
import { useNavigate } from "react-router-dom";
import { ThankYouModal } from "./ThankYouModal";

interface PaymentIntentResponse {
  clientSecret?: string;
  orderId?: string;
}


interface CartItem {
  id?: string | number;
  name: string;
  quantity: number;
  price: number;
}

interface CheckoutFormProps {
  totalAmount: number;
  cartItems: CartItem[];
  currentAddress: any
  onSuccess: () => void;
}
interface CheckoutPayload {
  "Userorder[appuser_address_id]": string | number;
  "Userorder[payment_type]": string;
  "Userorder[payment_status]": string;
  "Userorder[payment_id]": string;
  "Userorder[sub_total]": string | number;
  "Userorder[total]": string | number;
  "Userorder[order_status]": string;
  "Userorder[user_carts_id]": string;
}

export default function CheckoutForm({ totalAmount, cartItems, currentAddress }: CheckoutFormProps) {
  const [thankYouOpen, setThankYouOpen] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const authKey = localStorage.getItem("authKey");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const currencySymbol = "₹";
  const formattedAmount = Number(totalAmount).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });



  async function checkoutOrder(payload: CheckoutPayload) {
    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(payload)) {
        formData.append(key, String(value));
      }

      const res = await api.post(`/userauth/checkout`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/")
      setThankYouOpen(true);

      console.log("Checkout success:", res.data);
      return res.data;
    } catch (error) {
      console.error("Checkout failed:", error);
      throw error;
    }
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setMessage(null);
    setSuccess(false);

    try {
      // Step 1: Create Payment Intent
      const formData = new FormData();
      formData.append("amount", String(totalAmount));
      formData.append("currency", "inr");

      const res = await api.post<PaymentIntentResponse>(
        "/userauth/createpaymentintent",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            auth_key: authKey,
          },
        }
      );

      const { clientSecret } = res.data;
      if (!clientSecret) throw new Error("Failed to initialize payment");

      // Step 2: Confirm Card Payment
      const card = elements.getElement(CardElement) as StripeCardElement | null;
      if (!card) throw new Error("Card element not found");

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        { payment_method: { card } }
      );

      // Step 3: Handle Stripe Response
      if (error) {
        setMessage(error.message || "Payment failed");
        return;
      }

      if (paymentIntent?.status === "succeeded") {
        setSuccess(true);
        setMessage("✅ Payment succeeded! Processing order...");

        // Step 4: Call Checkout API
        await checkoutOrder({
          "Userorder[appuser_address_id]": currentAddress,
          "Userorder[payment_type]": "Online",
          "Userorder[payment_status]": "succeeded",
          "Userorder[payment_id]": paymentIntent.id,
          "Userorder[sub_total]": totalAmount,
          "Userorder[total]": totalAmount,
          "Userorder[order_status]": "Confirm",
          "Userorder[user_carts_id]": cartItems?.map(item => item.id).join(',')
        });


      } else {
        setMessage(`Payment status: ${paymentIntent?.status}`);
      }
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div
      style={{
        margin: "0 auto",
        borderRadius: 14,
        fontFamily: 'Inter,"Segoe UI",Roboto,sans-serif',
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <span style={{ fontWeight: 600, fontSize: 24, color: "#282241" }}>
          Checkout
        </span>
      </div>

      {/* Order Summary */}
      <div
        style={{
          background: "#f5f5f7",
          borderRadius: 8,
          padding: 16,
          marginBottom: 18,
        }}
      >
        <div style={{ fontWeight: 500, fontSize: 15, marginBottom: 7 }}>
          Order Summary:
        </div>
        {cartItems?.map((item: any, i) => (
          <div
            key={item.id || i}
            style={{
              fontSize: 15,
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 4,
              color: "#39384c",
            }}
          >
            <span>
              {item?.product.title} × {item.quantity}
            </span>
            <span>
              {currencySymbol}
              {Number(item.price).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
        ))}
        <div
          style={{
            borderTop: "1px dashed #dadbdd",
            paddingTop: 7,
            marginTop: 7,
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          <span>Total</span>
          <span style={{ color: "#6c63ff" }}>
            {currencySymbol}
            {formattedAmount}
          </span>
        </div>
      </div>

      {/* Payment Form */}
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="card-element"
          style={{
            display: "block",
            fontWeight: 500,
            marginBottom: 5,
            color: "#39384c",
            fontSize: 15,
          }}
        >
          Enter card details
        </label>
        <div
          style={{
            border: "1px solid #e3e3ea",
            borderRadius: 6,
            padding: "12px 10px",
            background: "#fafaff",
            marginBottom: 14,
          }}
        >
          <CardElement
            id="card-element"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#27224a",
                  "::placeholder": { color: "#aaaabd" },
                  fontFamily: 'Inter,"Segoe UI",Roboto,sans-serif',
                },
                invalid: { color: "#b12727" },
              },
            }}
          />
        </div>

        <button
          
          type="submit"
          disabled={true}
          className="cursor-not-allowed"
          style={{
            
            width: "100%",
            padding: "13px",
            background: loading ? "#6c63ff89" : "#6c63ff",
            color: "#fff",
            fontSize: 17,
            fontWeight: 600,
            border: "none",
            borderRadius: 6,
            cursor: "not-allowed" ,
            marginBottom: 3,
            marginTop: 2,
            transition: "background 0.2s",
            boxShadow: "0 2px 8px rgba(110, 80, 255, 0.06)",
          }}
        >
          {loading ? (
            <span
              style={{
                display: "inline-block",
                width: 20,
                height: 20,
                border: "2.5px solid #fff8",
                borderTopColor: "#fff",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            />
          ) : (
            <>Pay <strong>{currencySymbol}{formattedAmount}</strong></>
          )}
        </button>
      </form>

      <ThankYouModal
        open={thankYouOpen}
        // orderId={lastOrderId}
        amount={totalAmount}
        onClose={() => {
          setThankYouOpen(false);
          window.location.href = `/`;
          // Optionally, route however you like!
        }}
      />

      {/* Feedback Message */}
      {message && (
        <div
          style={{
            marginTop: 14,
            color: success ? "#219b29" : "#e02d49",
            background: "#f9f9fd",
            fontWeight: 500,
            textAlign: "center",
            fontSize: 15,
            borderRadius: 4,
            padding: "7px 0",
          }}
        >
          {message}
        </div>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 500px) {
          div[style*="box-shadow"] {
            padding: 16px !important;
            width: 97vw !important;
          }
        }
      `}</style>
    </div>
  );


}
