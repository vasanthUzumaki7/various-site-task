import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

export default function FooterBottom() {
  return (
    <>
      <div className="mx-auto flex items-center justify-between lg:pt-[70px] lg:pb-[30px] pt-[20px] pb-[20px] footer-bottom">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border text-[#F5F0E859] border-accent-border font-fraunces italic">
            V
          </div>
          <p className="">© 2025 Various. All rights reserved.</p>
        </div>

        {/* Center */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="#" className="text-[12px]">
            Privacy Policy
          </a>

          <a href="#" className="text-[12px]">
            Terms of Service
          </a>
          <a href="#" className="text-[12px]">
            Refund Policy
          </a>
        </div>

        {/* Right */}
        <div className="sm:flex items-center gap-2 hidden">
          {[FiInstagram, FiFacebook, FiYoutube].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-accent-border text-accent-muted transition-colors hover:border-[#D8B27A] hover:text-accent-light"
            >
              <Icon className="text-[13px]" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
