import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import DarkBtn from "@/components/ui/DarkBtn";
import { carouselData } from "@/data/carouselData";
import { MdArrowOutward } from "react-icons/md";
import { getProductSettings } from "@/config/swiper/productSettings";

export default function ProductCollections() {
  const [activeTab, setActiveTab] = useState("Moldavite");
  const [swiperRef, setSwiperRef] = useState(null);

  const products = carouselData[activeTab];
  const settings = getProductSettings(setSwiperRef);

  useEffect(() => {
    swiperRef?.slideTo(0, 0);
  }, [activeTab, swiperRef]);

  return (
    <section className="SectionPaddingTop">
      <Container>
        <div className="text-center md:text-start mb-[10px]">
          {" "}
          <div className="inline-flex items-center justify-center rounded-[8px] px-[10px] py-[5px] text-[16px] text-content bg-[#F5DFBB] uppercase font-semibold xl:text-[20px]  font-inter">
            Featured Collections
          </div>
        </div>
        {/* Tabs */}
        <div className="flex items-center lg:gap-10 gap-5 justify-center md:justify-start pb-5 flex-wrap">
          {Object.keys(carouselData).map((tab) => (
            <button
              aria-pressed={activeTab === tab}
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 leading-none transition-all duration-300 font-medium tab-menu cursor-pointer ${
                activeTab === tab
                  ? "text-brand opacity-100"
                  : "text-brand opacity-30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="mt-10">
          <Swiper {...settings} style={{ width: "100%" }}>
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  ProductImg={product.image}
                  ProductAlt={product.alt}
                  ProductName={product.name}
                  ProductPrice={product.price}
                  hoverEffect={true}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Controls */}
        <div className="mt-10 flex items-center justify-center sm:justify-between">
          <div className="lg:h-[3px] h-[1px] rounded-[3px] opacity-20 flex-1 bg-brand sm:block hidden" />
          <div className="sm:ml-6 flex items-center gap-3 ">
            <button
              type="button"
              aria-label="Previous products"
              onClick={() => swiperRef?.slidePrev()}
              className="flex  md:h-[56px]  md:w-[52px]  w-[30px] h-[30px]  items-center justify-center rounded-md bg-brand text-white cursor-pointer hover:opacity-90"
            >
              <FiChevronLeft className="md:text-[30px] text-[18px]" />
            </button>
            <DarkBtn btnText="View All Products" btnIcon={<MdArrowOutward />} />
            <button
              type="button"
              aria-label="Next products"
              onClick={() => swiperRef?.slideNext()}
              className="flex md:h-[56px]  md:w-[52px] w-[30px] h-[30px] items-center justify-center rounded-md bg-brand text-white cursor-pointer hover:opacity-90"
            >
              <FiChevronRight className="md:text-[30px] text-[18px]" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
