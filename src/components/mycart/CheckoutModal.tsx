import CheckoutForm from "../CheckoutForm";

export default function CheckoutModal({ isOpen, onClose, cartItems, totalAmount, currentAddress }: any) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative">
        <button className="absolute top-3 right-3 text-2xl" onClick={onClose}>&times;</button>
        <CheckoutForm
          totalAmount={totalAmount}
          cartItems={cartItems}
          currentAddress={currentAddress}
          onSuccess={() => {
            onClose();
            console.log("Checkout successful!");
          }}
        />
      </div>
    </div>
  );
}