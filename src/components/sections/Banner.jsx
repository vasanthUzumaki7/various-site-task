import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowOutward } from "react-icons/md";
import DarkBtn from "@/components/ui/DarkBtn";
import ProductCard from "@/components/ui/ProductCard";
import { bannerCardData, features } from "@/data/bannerCardData";
import PageTitle from "@/components/ui/PageTitle";
import { getBannerSettings } from "@/config/swiper/bannerSettings";

export default function Banner() {
  const bannerSettings = getBannerSettings();

  return (
    <section className="SectionPaddingTop">
      <div className="max-w-[1920px] mx-auto xl:px-[64px] lg:px-[40px] md:px-[30px] px-[20px]">
        <div className="SectionPaddingBottom">
          <div className="flex items-center justify-between flex-col lg:flex-row gap-[30px]">
            <div className="w-full">
              <div className="md:max-w-[696px] max-w-[100%] w-full">
                <PageTitle
                  PageTitle="You Are a"
                  PageSpan="Various Creator"
                  PageDescription="Thoughtfully sourced pieces chosen for their character, quality and story. Explore a collection built around care and craftsmanship."
                  PageCustom="md:text-start text-center"
                />

                <div className="md:text-start text-center">
                  <DarkBtn btnText="Shop Now" btnIcon={<MdArrowOutward />} />
                </div>
              </div>
            </div>

            <div className="2xl:max-w-[865px] xl:max-w-[650px] lg:max-w-[500px] max-w-[100%] w-full">
              <Swiper {...bannerSettings}>
                {bannerCardData.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard
                      ProductImg={product.image}
                      ProductAlt={product.alt}
                      ProductName={product.name}
                      ProductPrice={product.price}
                      hoverEffect={false}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="custom-pagination hidden md:flex md:justify-end justify-center xl:gap-[18px] gap-[13px] mb-[24px]" />
      </div>

      <div className="bg-[#2F2218]">
        <ul className="max-w-[1920px] mx-auto flex lg:justify-between xl:px-[64px] lg:px-[40px] md:px-[30px] px-[20px] 2xl:py-[32px] lg:py-[20px] md:py-[20px] py-[10px] gap-[30px] gap-y-2 overflow-x-auto lg:overflow-visible flex-nowrap custom-scroll">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <li
                key={feature.label}
                className="flex items-center gap-3 w-max flex-shrink-0"
              >
                <div className="flex items-center justify-center bg-white text-[#3B2418] xl:h-[48px] xl:w-[48px] md:h-[30px] md:w-[30px] h-[25px] w-[25px] rounded-[5px] lg:rounded-lg">
                  <Icon className="xl:text-[25px] md:text-[14px] text-[20px]" />
                </div>

                <span className="text-white  font-inter xl-[18px] font-normal 2xl:text-[24px] md:text-[14px] text-[13px] font-medium whitespace-nowrap">
                  {feature.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
