import { MdArrowOutward } from "react-icons/md";

export default function FooterNewsletter() {
  return (
    <>
      <div className="mx-auto border-b border-border">
        <div className="grid items-center gap-12 gap-y-6 lg:grid-cols-2 lg:gap-20 sm:py-[40px] py-[30px] lg:py-[72px]">
          {/* Left content */}
          <div className="h-full flex justify-start">
            <div className=" ">
              <span className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-text-alpha-45 opacity-45 text-start block">
                Various • Curated with care
              </span>

              <h2 id="shop-creators-title">
                <div className="text-start text-[40px] md:text-[40px] lg:text-[60px] xl:text-[80px] 2xl:text-[108px] leading-[0.95] tracking-[-0.03em] text-white 2xl:mb-[40px]">
                  <span className="font-fraunces italic text-white block">
                    Shop
                  </span>
                  <span className="font-fraunces italic text-white block">
                    Various Creators
                  </span>
                </div>
              </h2>
            </div>
          </div>

          {/* Right content */}
          <div className="h-full  flex items-end">
            <div className=" h-max ">
              <div>
                <p className="footer-para">
                  Various is a curated collection of thoughtfully sourced
                  products, chosen for quality, character, and craftsmanship.
                  Each item is clearly photographed and described so you always
                  know exactly what you're getting.
                </p>

                <div className="text-start">
                  <a
                    href="/shop"
                    className="mt-8 inline-flex items-center font-normal gap-2 rounded-full border border-accent-border-light px-6 py-3 text-[13px] font-medium uppercase tracking-[0.22em] text-[#F5EDE5] transition-colors duration-300 hover:border-[#8B6A58] hover:bg-footer-dark "
                  >
                    Shop now
                    <MdArrowOutward className="text-base" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
