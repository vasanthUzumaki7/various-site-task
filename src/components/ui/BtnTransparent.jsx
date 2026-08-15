
export default function BtnTrasnparent({
  TransparentBtnText,
  TransparentBtnIcon,
  BtnLink,
}) {
  return (
    <div className="inline-block">
      <a
        className="rounded-[25px] bg-brand px-[10px] py-[10px] text-white flex items-center gap-x-2 leading-[110%]"
        href={BtnLink}
      >
        {TransparentBtnText}
        <span className="text-white">{TransparentBtnIcon}</span>
      </a>
    </div>
  );
}
