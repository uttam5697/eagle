import React from "react";
import { FiChevronLeft, FiChevronRight, FiMinus, FiPlus } from "react-icons/fi";

type Props = {
    label: string;
    value: number;
    onDecrease: () => void;
    onIncrease: () => void;
    iconType?: "arrow" | "plusminus";
};

const QuantityInputGroup: React.FC<Props> = ({
    label,
    value,
    onDecrease,
    onIncrease,
    iconType = "arrow",
}) => {
    const LeftIcon = iconType === "arrow" ? FiChevronLeft : FiMinus;
    const RightIcon = iconType === "arrow" ? FiChevronRight : FiPlus;

    return (
        <div className="flex flex-col items-start gap-1">
            <label className="text-xs font-light text-black">{label}</label>
            <div className="grid grid-cols-5   items-center rounded-full border  bg-white">
                <div className="flex items-center col-span-1 ps-[7px]">
                    <button onClick={onDecrease} className="bg-[#C01F26] text-white p-4 rounded-full ">
                        <LeftIcon />
                    </button>
                </div>

                <span className="text-center  font-semibold text-black md:text-base  col-span-3 ">{value.toFixed(2)}</span>
                <div className="flex items-center col-span-1 pe-[7px] py-[7px]">
                    <button onClick={onIncrease} className="bg-[#C01F26] text-white p-4 rounded-full col-span-1">
                        <RightIcon className="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuantityInputGroup;
