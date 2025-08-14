import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_live_51RtxLERwLqQA1WMbD00m04GV5qq7E62ivIldOP3RX1NcaLhN4odUliCeoSGyW9PUgKeZh5UfYFLiJAV3VEahjZWs00Gb39P8Rc");

export default function StripeProviderWrapper({ children }: { children: React.ReactNode }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
