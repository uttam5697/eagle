// import React, { useEffect, useRef, useState } from "react";

// declare global {
//   interface Window {
//     QuickBooksPayments: any;
//   }
// }

// const QuickBooksPayment: React.FC = () => {
//   const cardContainerRef = useRef<HTMLDivElement>(null);
//   const [card, setCard] = useState<any>(null);
//   const [token, setToken] = useState<string>("");

//   useEffect(() => {
//     const loadScript = () => {
//       return new Promise<void>((resolve, reject) => {
//         const existingScript = document.getElementById("quickbooks-script");

//         if (!existingScript) {
//           const script = document.createElement("script");
//           script.src = "https://sandbox.web.squarecdn.com/v1/quickbooks.js";
//           script.id = "quickbooks-script";
//           script.async = true;
//           script.onload = () => resolve();
//           script.onerror = () => reject("Failed to load QuickBooks script");
//           document.body.appendChild(script);
//         } else {
//           resolve(); // Already loaded
//         }
//       });
//     };

//     const initializePayments = async () => {
//       try {
//         await loadScript();

//         if (!window.QuickBooksPayments) {
//           console.error("QuickBooksPayments SDK not available after load.");
//           return;
//         }

//         const payments = window.QuickBooksPayments(
//           "AByq9palXe0cqDVcES2WeMiqWoOWdAsmfMvj8umN5WHI7lJALt", // Replace with your real sandbox client ID
//           "sandbox"
//         );

//         const cardInstance = await payments.card();
//         await cardInstance.attach("#card-container");
//         setCard(cardInstance);
//       } catch (error) {
//         console.error("Initialization error:", error);
//       }
//     };

//     initializePayments();
//   }, []);

//   const handlePayment = async () => {
//     if (!card) {
//       console.error("Card not initialized.");
//       return;
//     }

//     try {
//       const result = await card.tokenize();
//       if (result.status === "OK") {
//         console.log("✅ Token received:", result.token);
//         setToken(result.token);
//       } else {
//         console.error("❌ Tokenization failed:", result);
//       }
//     } catch (err) {
//       console.error("Payment error:", err);
//     }
//   };

//   return (
//     <div>
//       <div id="card-container" ref={cardContainerRef}></div>
//       <button onClick={handlePayment}>Pay Now</button>
//       {token && <p>Test Token: {token}</p>}
//     </div>
//   );
// };

// export default QuickBooksPayment;


import { useState } from "react";

function Payment() {
  const [code, setCode] = useState("");
  const [accessToken, setAccessToken] = useState("eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwieC5vcmciOiJIMCJ9..RJhBmVq4DH8XwOz06vw5cA.ylzKA4s6nkuiB6nJnhaSWlY0Lw4ULtHQe80LQjmEYJRbxc5j2hRBUUjqiPkfAjLRmYiR03TzFHXHvFoYh3LB1UnIxr54FR0IKk2LPm0r_NluA5rYnVQcmYogA2sVULqfdmP_smM36Vip10nND6cIe56hEqRiF8XAUC4tZUdu9u6Q_IAi98pbyUR5bGgGSwv26bkZgfqSh78frIAHHt10yrEmnofy9g54VsuFJCpDOCcqTHP-oxN-pXcEGu7nxCN6N1RqQXQoOLcsLundUs-Jv2_AIVrdGEiIETHSIDl9AdBzC2JP9s7drnD7c1nh3ziSs6ieOg-siIggccEB13yFXnxviO-WVx0FKjimv5omfVPzTqiiyJ3gg6aluG_HOEPA2U16LsroObdNd2TH3fEWp4S-G4MEgq8DJoUkpIU8_ec6D1CpaiK5OROSuDPGgaK9ydKR-3vPyOzSFpHlIyYPSCPKnHsCZxn5F3Bzglujx61L-PFkXm5Wot36lUza-KhdkjErpkxEvBTQYu945hO2qDJCMljPgSyb9IzpP7nXvGpRwLkQxcJA24SVNlikS2BJ45wxMz8zqtSmrGOULMCA7T7cBXoai70jVt8UJEkwRdc.GBY5qE7bL4D8mj5beGmrvA");
  console.log("🚀 ~ Payment ~ accessToken:", accessToken)
  const [cardDetails, setCardDetails] = useState({
    number: "4111111111111111",
    expMonth: "12",
    expYear: "2025",
    cvc: "123",
    name: "Test User",
  });
  const [amount, setAmount] = useState("10.00");
  const [message, setMessage] = useState("");

  const exchangeToken = async () => {
    setMessage("Exchanging token...");
    try {
      const res = await fetch("http://localhost:5000/exchange-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();
      if (data.access_token) {
        setAccessToken(data.access_token);
        setMessage("✅ Access token received!");
      } else {
        setMessage("❌ Failed to receive access token");
      }
    } catch (error) {
      setMessage("❌ Token exchange failed");
    }
  };

  const makePayment = async () => {

    if (!accessToken) {
      setMessage("❌ Access token missing");
      return;
    }

    setMessage("Processing payment...");
    try {
      const res = await fetch("http://localhost:5000/charge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessToken,
          amount,
          card: cardDetails,
        }),
      });

      const data = await res.json();
      if (data.id) {
        setMessage(`✅ Payment Successful! Transaction ID: ${data.id}`);
      } else {
        setMessage(`❌ Payment failed: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      setMessage("❌ Payment request failed");
    }
  };

  return (
    <div className="mt-[100px]" style={{ maxWidth: "500px", margin: "10 auto", fontFamily: "Arial" }}>
      <h1>💳 QuickBooks Payment</h1>

      <section>
        <h3>1️⃣ Exchange Authorization Code</h3>
        <input
          style={{ width: "100%", padding: "8px" }}
          type="text"
          placeholder="Paste Authorization Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={exchangeToken} style={{ marginTop: "10px" }}>
          Get Access Token
        </button>
      </section>

      <hr />

      <section>
        <h3>2️⃣ Payment Details</h3>
        <input
          type="text"
          placeholder="Card Number"
          value={cardDetails.number}
          onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
        />
        <input
          type="text"
          placeholder="Exp Month (MM)"
          value={cardDetails.expMonth}
          onChange={(e) => setCardDetails({ ...cardDetails, expMonth: e.target.value })}
        />
        <input
          type="text"
          placeholder="Exp Year (YYYY)"
          value={cardDetails.expYear}
          onChange={(e) => setCardDetails({ ...cardDetails, expYear: e.target.value })}
        />
        <input
          type="text"
          placeholder="CVC"
          value={cardDetails.cvc}
          onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
        />
        <input
          type="text"
          placeholder="Cardholder Name"
          value={cardDetails.name}
          onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={makePayment} style={{ marginTop: "10px" }}>
          Make Payment
        </button>
      </section>

      <hr />

      <section>
        <h3>📣 Status</h3>
        <p>{message}</p>
      </section>
    </div>
  );
}

export default Payment;


// src/pages/Home.jsx or App.jsx
// import React, { useEffect } from "react";

// export default function Home() {
//     useEffect(() => {
//         // Check if token is in URL
//         const urlParams = new URLSearchParams(window.location.search);
//         const token = urlParams.get("access_token");
//         console.log("🚀 ~ Home ~ token:", token)

//         if (token) {
//             console.log("Access Token:", token);
//             // You can store in localStorage or state
//             localStorage.setItem("quickbooks_token", token);
//         }
//     }, []);

//     useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sandbox.web.squarecdn.com/v1/quickbooks.js";
//     script.async = true;
//     script.onload = async () => {
//       if (window.QuickBooksPayments) {
//         const payments = window.QuickBooksPayments("YOUR_CLIENT_ID", "sandbox");
//         const cardInstance = await payments.card();
//         await cardInstance.attach("#card-container");
//         setCard(cardInstance);
//       }
//     };
//     document.body.appendChild(script);

//     // Clean up script on unmount
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//     const handleLogin = (e:any) => {
//         e.preventDefault();

//         const clientId = "AByq9palXe0cqDVcES2WeMiqWoOWdAsmfMvj8umN5WHI7lJALt";
//         const redirectUri = "http://localhost:5173/buckeyefloors-web/callback";

//         // ✅ Scope: use space-separated scopes without double-encoding
//         const scope = "com.intuit.quickbooks.accounting openid profile email";
//         const state = "secureRandomString123";

//         const authUrl = `https://appcenter.intuit.com/connect/oauth2?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scope)}&state=${state}`;

//         console.log("Redirecting to:", authUrl);
//         window.location.href = authUrl;
//     };

//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h1>QuickBooks Integration</h1>
//             <button onClick={(e) => handleLogin(e)} style={{ padding: "10px 20px", fontSize: "16px" }}>
//                 Connect to QuickBooks
//             </button>
//         </div>
//     );
// }