import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51LBESdFBlyLVGm3EQYNQf13l6pDgcfDz4Gopqjpvh0ksBW9psNm8CQkF9VedI8QJ61BPuuYr4IUvRy9mti7ATmFB00bZx34eg5");

export default function StripeProviderWrapper({ children }: { children: React.ReactNode }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
