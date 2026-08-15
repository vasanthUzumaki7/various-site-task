import { IoLocationOutline } from "react-icons/io5";
import { footerColumns } from "@/data/footerData";
import { MdMailOutline } from "react-icons/md";

export default function FooterMenu() {
  return (
    <>
      <div className="mx-auto py-[40px] lg:py-16 border-b border-border">
        <div className="flex lg:justify-between flex-wrap gap-y-10">
          {footerColumns.map((column) => (
            <nav
              key={column.title}
              className="w-full w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/4 sm:px-3 sm:max-w-[224px] max-w-[165px]"
              aria-label={column.title}
            >
              <div className="mb-5 text-[12px] font-medium uppercase tracking-[0.18em] text-text-alpha-40 text-start">
                {column.title}
              </div>

              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link} className="text-start">
                    <a
                      href="#"
                      className="text-[16px]  font-inter font-medium text-text-alpha opacity-50"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="w-full w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/4 sm:px-3 sm:max-w-[453px]">
            <div className="mb-5 text-[12px] font-medium uppercase tracking-[0.18em] text-text-alpha-40 text-start">
              STAY IN TOUCH
            </div>

            <p className="font-Inter font-medium text-text-alpha text-start">
              <span className="text-[16px] opacity-60">
                New arrivals, behind-the-scenes stories and exclusive offers —
                delivered straight to your inbox.
              </span>
            </p>

            <form className="mb-5 flex w-full mt-[10px] gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="h-10 flex-1 rounded-[8px] md:rounded-[12px] border border-border-alpha bg-footer-bg px-4 text-[13px] text-[#F4E7D7] placeholder:text-text-alpha-30  font-inter focus:outline-none"
              />

              <button
                type="submit"
                className="h-10 rounded-[8px]  font-inter md:rounded-[13px] bg-[#D8B27A] px-3 sm:px-5 text-[11px] font-semibold uppercase text-primary-dark transition-colors duration-200 hover:bg-[#E4C18B] cursor-pointer hover:opacity-90"
              >
                Subscribe
              </button>
            </form>

            <div className="space-y-3 text-[14px]">
              <a
                href="mailto:hello@various.com"
                className="flex items-center gap-2 hover:text-white text-cream opacity-50"
              >
                <MdMailOutline className="text-[16px] text-cream" />
                hello@various.com
              </a>

              <div className="flex items-center gap-2 text-cream opacity-50">
                <IoLocationOutline className="text-[16px] text-cream " />
                New Zealand
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
