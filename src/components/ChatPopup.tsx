import React, { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ChatPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const popupRef = useRef<HTMLDivElement>(null);

  const togglePopup = () => setIsOpen((open) => !open);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Handle submission logic or API call
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
    setIsOpen(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = "916354448763"; // Set your WhatsApp number
    const text = "Hello, I want to enquire about your products.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* FAB Button */}
      <button
        onClick={togglePopup}
        aria-label={isOpen ? "Close chat popup" : "Open chat popup"}
        className="fixed bottom-5 right-5 bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all z-40"
      >
        {isOpen ? "✖" : "💬"}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Popup Panel */}
      <div
        ref={popupRef}
        className={`fixed bottom-24 right-5 w-full max-w-[350px] bg-white rounded-2xl shadow-2xl transform transition-all duration-300 z-50
          ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
        `}
        style={{ willChange: "transform, opacity" }}
        role="dialog"
        aria-modal="true"
      >
        {isOpen && (
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white text-2xl mr-3">
                💡
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Enquiry Form</h3>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 transition min-h-[80px] resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg font-medium hover:from-green-700 hover:to-emerald-800 transition"
              >
                Send
              </button>
            </form>
            <button
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center mt-4 bg-[#25D366] text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
              type="button"
            >
              <span className="text-xl mr-2">📱</span>
              Chat on WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatPopup;
