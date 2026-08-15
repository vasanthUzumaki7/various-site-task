import { AiFillPlusCircle } from "react-icons/ai";

export default function ProductCard({
  ProductImg,
  ProductAlt,
  ProductName,
  ProductPrice,
  hoverEffect = true,
}) {
  return (
    <article className={hoverEffect ? "group" : ""}>
      <div className="2xl:max-w-[400px] lg:max-w-[300px] md:max-w-[300px] max-w-[300px] mx-auto w-full">
        <div className="relative overflow-hidden rounded-[8px]">
          <img
            className="w-full transition-transform duration-500 group-hover:scale-[1.02] "
            src={ProductImg}
            alt={ProductAlt}
          />

          <button
            type="button"
            aria-label={`View ${ProductName}`}
            className={`absolute bottom-[20px] right-[20px] text-[35px] drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] cursor-pointer text-brand scale-90 transition-all duration-300 ${
              hoverEffect
                ? "opacity-0 group-hover:opacity-100 group-hover:scale-99"
                : "opacity-100 scale-99"
            }`}
          >
            <AiFillPlusCircle className="md:text-[30px] lg:text-[41px] text-[40px]" />
          </button>
        </div>

        <div className="flex flex-col items-start mt-3">
          <h3 className="text-start my-1 font-medium">{ProductName}</h3>

          <div
            className={`inline-block rounded-[5px] px-[10px] py-[3px] text-[16px] sm:text-[20px]  font-inter transition-all duration-300 bg-brand text-white ${
              hoverEffect ? "opacity-60 group-hover:opacity-100" : "opacity-100"
            }`}
          >
            {ProductPrice}
          </div>
        </div>
      </div>
    </article>
  );
}
