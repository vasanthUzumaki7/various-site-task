export default function PageTitle({
  PageTitle,
  PageSpan,
  PageDescription,
  PageCustom
}) {
  return (
    <div className={`xl:mb-[30px] mb-[15px] ${PageCustom}`}>

      <h1 className=" xl:mb-[30px] mb-[15px]">
        {PageTitle}
         <span className="block italic">{PageSpan}</span>
      </h1>

      {PageDescription && (
        <p className="text-[18px] font-medium leading-[28px] text-content">
          {PageDescription}
        </p>
      )}
    </div>
  );
}