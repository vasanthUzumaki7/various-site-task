import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { navLinks, navActions } from "@/data/navLinks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-42 border-b border-[#DDD6CF] bg-white backdrop-blur-xl 2xl:py-[41px] lg:py-[20px] py-[18px]">
        <div className="max-w-[1920px] mx-auto relative xl:px-[64px] lg:px-[40px] md:px-[30px] px-[20px]">
          <div className="mx-auto flex items-center justify-between ">
            <a
              href="/"
              className="lg:text-[37px] sm:text-[32px] text-[30px] xl:text-[40px] 2xl:text-[49px] font-normal tracking-wide text-primary font-fraunces"
            >
              VARIOUS
            </a>

            <nav
              aria-label="Primary navigation"
              className="hidden items-center 2xl:gap-8 gap-6 xl:flex"
            >
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="lg:text-[18px] 2xl:text-[20px]  font-inter font-medium text-primary transition hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 xl:flex">
              {navActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D9D9D9] text-primary transition hover:bg-[#D9CFC7] cursor-pointer"
                    aria-label={action.label}
                  >
                    <Icon size={16} />
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-[40px] w-[40px] z-55 items-center justify-center rounded-md bg-[#E7E1DB] text-primary xl:hidden absolute right-[20px]"
            >
              {menuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 transition-all duration-500 xl:hidden ${
          menuOpen
            ? "pointer-events-auto bg-black/50 backdrop-blur-xl opacity-100"
            : "pointer-events-none bg-black/0 backdrop-blur-0 opacity-0"
        }`}
      />
      {/* Drawer */}
      <aside
        id="mobile-menu"
        className={`fixed top-0 left-0 z-50 h-screen w-[88%] md:max-w-[380px] sm:max-w-[330px] max-w-[260px] transform border-r border-white/20 bg-surface/96 backdrop-blur-3xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[#E7DED6] px-6 md:py-[20px] py-[18px]">
            <a
              href="/"
              className="lg:text-[37px] sm:text-[32px] text-[30px] xl:text-[40px] font-normal tracking-wide text-primary font-fraunces"
            >
              VARIOUS
            </a>
          </div>

          <nav
            aria-label="Mobile navigation"
            className="flex-1 overflow-y-auto"
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between border-b border-[#EFE7E1] py-[20px] text-[16px] font-medium text-primary transition hover:text-accent hover:bg-surface-muted px-6  font-inter"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-[#E7DED6] bg-white/60 p-6 backdrop-blur-xl">
            <div className="grid grid-cols-3 gap-4">
              {navActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.label}
                    type="button"
                    aria-label={action.label}
                    className="flex flex-col items-center justify-center gap-2 rounded-lg bg-card sm:py-4 py-2 text-primary transition hover:bg-surface-muted cursor-pointer"
                  >
                    <Icon size={20} />
                    <span className="text-xs font-medium">{action.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
