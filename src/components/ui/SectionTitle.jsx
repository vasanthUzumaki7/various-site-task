export default function SectionTitle({
  image,
  altTxt,
  badge,
  title,
  description,
  headingCustom,
  imgCustom,
}) {
  return (
    <div className={`xl:mb-[30px] mb-[15px] ${headingCustom}`}>
      {image && (
        <div className={`w-full ${imgCustom}`}>
          <img className="w-full object-cover" src={image} alt={altTxt} />
        </div>
      )}

      {badge && (
        <div className="inline-flex items-center justify-center rounded-[8px] px-[10px] py-[5px] text-[16px] text-content bg-[#F5DFBB] uppercase font-semibold xl:text-[20px]  font-inter">
          {badge}
        </div>
      )}

      <h2 className="xl:mb-[30px] mb-[15px] mt-[10px]">{title}</h2>

      {description && (
        <p className="mt-4 text-[18px] font-medium leading-[28px] text-content">
          {description}
        </p>
      )}
    </div>
  );
}
