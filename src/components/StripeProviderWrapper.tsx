import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51RtxLERwLqQA1WMbrwmNL6fjrC3VZVviFzBpzbZXm4BISUNDnMXfChvOzZZb3YLoUe57eM5Fkc5NCh7wh94tCl1c00XJmOIYKv");

export default function StripeProviderWrapper({ children }: { children: React.ReactNode }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
