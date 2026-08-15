export default function GuideCard({
  guideImage,
  GuideTitle,
  GuideDescription,
}) {
  return (
    <div className="flex items-center gap-x-[20px] border border-border-warm rounded mb-[15px] md:py-[12px] md:px-[25px] px-[15px] py-[10px]">
      <div className="shrink-0 2xl:w-[120px] 2xl:h-[120px] flex justify-center items-center">
        <div className="w-full md:max-w-[60px] max-w-[40px]">
          <img
            className="w-full object-contain"
            src={guideImage}
            alt="Guide Sample Design"
          />
        </div>
      </div>
      <div>
        <h3 className=" text-start text-black font-medium">{GuideTitle}</h3>
        <p className="text-content text-start opacity-80">{GuideDescription}</p>
      </div>
    </div>
  );
}
