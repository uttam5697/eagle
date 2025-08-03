import { FiShoppingCart } from 'react-icons/fi';
import PrimaryButton from './ui/Button';
// import { FaRegHeart } from 'react-icons/fa';
// import { AiFillHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

type ProductCardProps = {
  imageUrl: string | undefined;
  title: string;
  price: number;
  id: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title,id}) => {
    // const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="group rounded-[24px] bg-white md:p-2 p-1 shadow-sm transition-transform duration-300 hover:shadow-md">
            <div className="relative overflow-hidden rounded-[16px]">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-[16px]"
                />
                {/* <button
                    onClick={() => setLiked(!liked)}
                    className="absolute top-2 right-2 bg-white lg:p-[11px] md:p-2 p-1 rounded-full shadow transition-transform duration-200 hover:bg-gray-100 hover:scale-110"
                >
                    {liked ? (
                        <AiFillHeart className="fill-red-500 text-red-500 lg:text-[18px] md:text-[16px] text-[14px]" />
                    ) : (
                        <FaRegHeart className="text-black lg:text-[18px] md:text-[16px] text-[14px]" />
                    )}
                </button> */}
            </div>

            <div className="mt-4 text-center">
                <h3 className="xl:text-2sm lg:text-sm md:text-[14px] text-[12px] font-regular text-black leading-none lg:mb-[18px] md:mb-[16px] mb-[14px]">{title}</h3>
                <p className="xl:text-xl lg:text-base md:text-2sm text-sm font-bold text-black leading-none">
                    {/* ${price?.toFixed(2)} <span className="xl:text-xl lg:text-base md:text-2sm text-sm font-bold">/ sqft</span> */}
                </p>

                <div className="lg:mb-[18px] md:mb-4 mb-3 lg:mt-5 md:mt-4 mt-3">
                    <PrimaryButton
                        label="Add To Cart"
                        icon={<FiShoppingCart size={16} />}
                        onClick={() => navigate(`/product/${id}`)}
                    />
                </div>
            </div>
            
        </div>
    );
};

export default ProductCard;
