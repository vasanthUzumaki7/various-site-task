export default function DarkBtn({ btnText, link, btnIcon }) {
  return (
    <div className="inline-block">
      <a
        className="rounded-[5px] md:rounded-[10px] bg-brand md:px-[17px] px-[10px] py-[5px] md:py-[17px]  font-inter text-[14px] md:text-[18px] text-white flex items-center gap-x-2 leading-[110%] cursor-pointer hover:opacity-90"
        href={link}
      >
        {btnText}
        <span className="text-white text-[20px]">{btnIcon}</span>
      </a>
    </div>
  );
}
