import { useState } from "react";
import { House } from "lucide-react";
import { Link } from "react-router-dom";
import { PiTrash, PiUserLight } from "react-icons/pi";
import {  FiArrowUpRight, FiMapPin, FiMinus, FiPhoneCall, FiPlus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { product1 } from "../../assets/images";

// Types
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
  boxes: number;
  sqft: number;
}

interface Address {
  id: number;
  text: string;
}

// Mock data
const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Alpine 22mil Rivawood Oak",
    price: 1.79,
    quantity: 46,
    total: 82.34,
    image: "../../assets/images/product2.png",
    boxes: 2,
    sqft: 47.9,
  },
  {
    id: 2,
    name: "Alpine 22mil Palermo Valley",
    price: 1.79,
    quantity: 23,
    total: 31.97,
    image: "../../assets/images/product2.png",
    boxes: 1,
    sqft: 23.76,
  },
];

const initialAddresses: Address[] = [
  {
    id: 1,
    text: "900, N Michigan Ave, 360 Chicago Observation Deck, IL, Chicago, 60611",
  },
  {
    id: 2,
    text: "100, W Randolph St, Chicago, IL, 60601",
  },
];

export default function MyCart() {
  const [count, setCount] = useState<number>(1);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState<boolean>(false);
  const [isAddressModalOpen1, setIsAddressModalOpen1] = useState<boolean>(true);

  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [selectedId, setSelectedId] = useState<number>(initialAddresses[0]?.id ?? 0);

  const toggleAddressModal = () => setIsAddressModalOpen((prev) => !prev);
  const toggleAddressModal1 = () => setIsAddressModalOpen1((prev) => !prev);

  const handleIncrease = () => setCount((prev) => prev + 1);
  const handleDecrease = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const handleDelete = (id: number) => {
    const updated = addresses.filter((addr) => addr.id !== id);
    setAddresses(updated);
    if (selectedId === id && updated.length > 0) {
      setSelectedId(updated[0].id);
    }
  };

  const handleAddNew = () => {
    const newId = Date.now();
    const newAddress: Address = {
      id: newId,
      text: "New Address Placeholder, Edit Me",
    };
    setAddresses((prev) => [...prev, newAddress]);
    setSelectedId(newId);
  };

  const handleSubmit = () => {
    const selected = addresses.find((addr) => addr.id === selectedId);
    alert(`Submitted: ${selected?.text}`);
  };

  const itemTotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const greenPackaging = 2;
  const totalAmount = itemTotal + greenPackaging;
  return (
    <>
      <div className="min-h-screen bg-light-white">
        {/* Main Content */}
        <div className="container py-8">
          <div className="flex items-center justify-between xl:mb-14 lg:mb-10 md:mb-8 mb-3">
            <h1 className="italic 2xl:text-5xl xl:text-4.5xl lg:text-4xl md:text-3xl text-2xl xl:leading-none leading-normal font-playfairDisplay">
              My Cart
            </h1>
            {/* Continue Shopping Link */}
            <div className="text-right">
              <Link
                to="/"
                className="text-black !ml-auto lg:text-2sm md:text-sm text-xs underline"
              >
                Continue shopping
              </Link>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2 lg:mb-0 mb-10">
              {/* Cart Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-">
                  <thead className="border-b border-peru/20">
                    <tr>
                      <th className="text-left md:py-4 py-2 font-normal lg:text-2sm md:text-sm text-sm  text-black md:min-w-[358px] min-w-[250px]">
                        Product
                      </th>
                      <th className="text-left md:py-4 py-2 font-normal lg:text-2sm md:text-sm text-sm  text-black md:min-w-[207px] min-w-[150px] ps-4">
                        Quantity
                      </th>
                      <th className="text-right md:py-4 py-2 font-normal lg:text-2sm md:text-sm text-sm  text-black md:min-w-[125px] min-w-[50px] ps-4">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        {/* Product Info */}
                        <td className="flex items-center space-x-4 py-4">
                          <img
                            src={product1}
                            alt={item.name}
                            className="xl:w-[140px] xl:h-[140px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[50px] h-[50px] object-center object-cover rounded-[16px]"
                          />
                          <div>
                            <h3 className="text-black mb-1 lg:text-2sm md:text-sm text-xs">
                              {item.name}
                            </h3>
                            <p className="font-bold xl:text-xl lg:text-base md:text-sm text-xs">
                              ${item.price} /sq ft
                            </p>
                          </div>
                        </td>

                        {/* Quantity */}
                        <td className="py-4 ps-4">
                          <div className="flex items-center rounded-full border bg-white w-fit">
                            <div className="flex items-center col-span-1 justify-start p-2">
                              <button
                                className="bg-[#C01F26] text-white p-1 lg:p-2  rounded-full"
                                onClick={handleDecrease}
                              >
                                <FiMinus className="w-4 h-4 sm:w-5 sm:h-5" />
                              </button>
                            </div>
                            {/* <span>{count}</span> */}
                            <div>
                              <input
                                type="number"
                                step="0.01"
                                value={count}
                                // onChange={handleInputChange}
                                className="w-[50px] px-0 text-center font-semibold text-black text-[12px] lg:text-sm sm:text-base outline-none bg-transparent"
                              />
                              {/* {unit && <span className="text-xs font-light ms-1">({unit})</span>} */}
                            </div>
                            <div className="flex items-center col-span-1 justify-start p-2">
                              <button
                                className="bg-[#C01F26] text-white p-1 lg:p-2  rounded-full"
                                onClick={handleIncrease}
                              >
                                <FiPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                              </button>
                            </div>
                          </div>
                          <p className="md:text-[12px] text-[10px] text-black mt-1">
                            {item.boxes} boxes • {item.sqft} sq ft
                          </p>
                        </td>

                        {/* Total & Remove */}
                        <td className="py-4 text-right ps-4">
                          <div className="flex items-center justify-end space-x-3">
                            <span className="xl:text-xl lg:text-base md:text-sm text-xs font-bold text-black">
                              ${item.total}
                            </span>
                            <button className="bg-[#C41A2C] text-white flex-none hover:bg-transparent hover:text-[#C41A2C] border-[#C41A2C] border duration-300 transition-all w-[30px] h-[30px] rounded-full flex items-center justify-center">
                              <PiTrash className="text-lg" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bill Summary Section */}
            <div className="lg:col-span-1">
              <div className="bg-black/5 rounded-[24px] p-6 sticky top-8">
                <h2 className="text-xl font-bold text-black mb-6">
                  Bill summary
                </h2>

                {/* Cost Breakdown */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-black font-light md:text-sm text-xs">
                      Item total (MRP)
                    </span>
                    <span className="font-semibold">
                      ${itemTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black font-light md:text-sm text-xs">
                      Green packaging charge
                    </span>
                    <span className="font-semibold">
                      ${greenPackaging.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black font-light md:text-sm text-xs">
                      Delivery Charges
                    </span>
                    <Link
                      to="/login"
                      className="text-primary hover:text-red-700"
                    >
                      Log in
                    </Link>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-black/20 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-black lg:text-base md:text-2sm text-sm">
                      To be paid
                    </span>
                    <span className="text-lg font-semibold text-black lg:text-base md:text-2sm text-sm">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="bg-white rounded-lg p-4 mb-6">
                  <div className="flex space-x-3 items-center">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <House />
                      </div>
                      <div>
                        <p className="text-black md:text-sm text-xs font-semibold">
                          Delivery to
                        </p>
                        <p className="md:text-xs text-[12px] font-light">USA</p>
                      </div>
                    </div>
                    <button
                      onClick={toggleAddressModal}
                      className="text-black !ml-auto md:text-sm text-xs underline font-semibold"
                    >
                      Add Address
                    </button>
                  </div>
                </div>

                {/* Process Button */}
                <a
                  href="#"
                  className="flex justify-between black-btn max-w-[286px] mx-auto group before:!hidden after:!hidden xl:px-6 px-4 xl:py-[18px] py-[14px]"
                >
                  <span className="leading-none">Process to Continue</span>
                  <FiArrowUpRight className="text-2sm group-hover:rotate-45 duration-300 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isAddressModalOpen && (
        <div className="fixed inset-0 p-4 block overflow-auto z-50 bg-black/50 transition-opacity duration-300">
            <div className="flex h-full items-center">
                <div className="bg-white mx-auto relative x;:rounded-[34px] lg:rounded-[24px] md:rounded-[20px] rounded-[16px] xl:p-[62px] lg:p-[52px] md:p-[42px] p-4 w-[90%] max-w-[730px] transform transition-all duration-300 scale-100 opacity-100">
                    <button
                    onClick={toggleAddressModal}
                    className="absolute top-5 right-5"
                    >
                    <CgClose className="xl:text-[34px] lg:text-[24px] text-[20px]" />
                    </button>
                    <h2 className="xl:text-[64px] lg:text-[54px] md:text-[44px] text-[24px] italic xl:leading-none leading-normal font-playfairDisplay xl:mb-[46px] lg:mb-[36px] md:mb-[26px] mb-4">
                    Add Address
                    </h2>
                    <form>
                    <div className="flex xl:mb-6 lg:mb-5 md:mb-4 mb-3 items-center bg-white border border-black/30 rounded-full p-2 w-full">
                        <div className="lg:w-[42px] md:w-[32px] w-[24px] lg:h-[42px] md:h-[32px] h-[24px] bg-black rounded-full flex items-center justify-center flex-none">
                        <PiUserLight className="text-white lg:text-[18px] md:text-[16px] text-[14px]" />
                        </div>
                        <input
                        type="text"
                        name="Recipient's name"
                        placeholder="Recipient's name"
                        className="w-full border-none outline-none font-light placeholder:text-black ps-3 text-black bg-transparent"
                        />
                    </div>
                    <div className="flex xl:mb-6 lg:mb-5 md:mb-4 mb-3 items-center bg-white border border-black/30 rounded-full p-2 w-full">
                        <div className="lg:w-[42px] md:w-[32px] w-[24px] lg:h-[42px] md:h-[32px] h-[24px] bg-black rounded-full flex items-center justify-center flex-none">
                        <FiMapPin className="text-white lg:text-[18px] md:text-[16px] text-[14px]" />
                        </div>
                        <input
                        type="text"
                        name="Address Line 1"
                        placeholder="Address Line 1"
                        className="w-full border-none outline-none font-light placeholder:text-black ps-3 text-black bg-transparent"
                        />
                    </div>
                    <div className="flex xl:mb-6 lg:mb-5 md:mb-4 mb-3 items-center bg-white border border-black/30 rounded-full p-2 w-full">
                        <div className="lg:w-[42px] md:w-[32px] w-[24px] lg:h-[42px] md:h-[32px] h-[24px] bg-black rounded-full flex items-center justify-center flex-none">
                        <FiMapPin className="text-white lg:text-[18px] md:text-[16px] text-[14px]" />
                        </div>
                        <input
                        type="text"
                        name="Address Line 2"
                        placeholder="Address Line 2"
                        className="w-full border-none outline-none font-light placeholder:text-black ps-3 text-black bg-transparent"
                        />
                    </div>
                    <div className="flex lg:flex-row flex-col xl:gap-6 lg:gap-5 md:gap-4 gap-3">
                        <div className="flex items-center bg-white border border-black/30 rounded-full p-2 w-full">
                        <div className="lg:w-[42px] md:w-[32px] w-[24px] lg:h-[42px] md:h-[32px] h-[24px] bg-black rounded-full flex items-center justify-center flex-none">
                            <FiMapPin className="text-white lg:text-[18px] md:text-[16px] text-[14px]" />
                        </div>
                        <input
                            type="text"
                            name="Postal Code"
                            placeholder="Postal Codes"
                            className="w-full border-none outline-none font-light placeholder:text-black ps-3 text-black bg-transparent"
                        />
                        </div>
                        <div className="flex items-center bg-white border border-black/30 rounded-full p-2 w-full">
                        <div className="lg:w-[42px] md:w-[32px] w-[24px] lg:h-[42px] md:h-[32px] h-[24px] bg-black rounded-full flex items-center justify-center flex-none">
                            <FiPhoneCall className="text-white lg:text-[18px] md:text-[16px] text-[14px]" />
                        </div>
                        <input
                            type="text"
                            name="Mobile Number"
                            placeholder="Mobile Number"
                            className="w-full border-none outline-none font-light placeholder:text-black ps-3 text-black bg-transparent"
                        />
                        </div>
                    </div>
                    <div className="xl:mt-10 lg:mt-8 md:mt-6 mt-4 flex items-center gap-4 flex-wrap justify-between">
                        <div>
                        <label className="flex items-center md:text-xs text-[12px] accent-black">
                            <input className="mr-2" type="checkbox" />I have read and
                            agree to the Terms & Conditions & Privacy Policy
                        </label>
                        </div>
                        <div>
                        <button className="flex justify-between black-btn group before:!hidden after:!hidden">
                            <span className="leading-none">Submit</span>
                            <FiArrowUpRight className="text-2sm group-hover:rotate-45 duration-300 transition-all" />
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
      )}
      {isAddressModalOpen1 && (
        <div className="fixed inset-0 p-4 block overflow-auto z-50 bg-black/50 transition-opacity duration-300">
          <div className="bg-white mx-auto relative x;:rounded-[34px] lg:rounded-[24px] md:rounded-[20px] rounded-[16px] xl:p-[62px] lg:p-[52px] md:p-[42px] p-4 w-[90%] max-w-[730px] transform transition-all duration-300 scale-100 opacity-100">
            <button
              onClick={toggleAddressModal1}
              className="absolute top-5 right-5"
            >
              <CgClose className="xl:text-[34px] lg:text-[24px] text-[20px]" />
            </button>
            <h2 className="xl:text-[64px] lg:text-[54px] md:text-[44px] text-[24px] italic xl:leading-none leading-normal font-playfairDisplay xl:mb-[46px] lg:mb-[36px] md:mb-[26px] mb-4">
              Change Address
            </h2>
            <div className="xl:space-y-6 lg:space-y-5 md:space-y-4 space-y-3">
              {addresses.map((address) => (
                <label
                  key={address.id}
                  className={`flex items-center justify-between border rounded-xl lg:p-4 md:p-3 p-2 cursor-pointer transition-all ${
                    selectedId === address.id
                      ? "border-black"
                      : "border-black/30"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      name="address"
                      value={address.id}
                      checked={selectedId === address.id}
                      onChange={() => setSelectedId(address.id)}
                      className="w-5 h-5 accent-black"
                    />
                    <span className="md:text-sm text-xs font-medium leading-none">
                      {address.text}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDelete(address.id)}
                    className="bg-[#C41A2C] text-white flex-none hover:bg-transparent hover:text-[#C41A2C] border-[#C41A2C] border duration-300 transition-all w-[30px] h-[30px] rounded-full flex items-center justify-center"
                  >
                    <PiTrash className="text-lg" />
                  </button>
                </label>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handleAddNew}
                className="flex justify-between black-btn bg-transparent text-black hover:text-white hover:bg-black group before:!hidden after:!hidden"
              >
                <span className="leading-none">Add New</span>
                <FiPlus className="text-2sm duration-300 transition-all" />
              </button>
              <div>
                <button
                  onClick={handleSubmit}
                  className="flex justify-between black-btn group before:!hidden after:!hidden"
                >
                  <span className="leading-none">Submit</span>
                  <FiArrowUpRight className="text-2sm group-hover:rotate-45 duration-300 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
