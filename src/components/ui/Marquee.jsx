export default function Marquee({ items }) {
  return (
    <div
      className="overflow-hidden border-b border-border"
      aria-label="Announcements"
    >
      <div className="flex w-max animate-[marquee_22s_linear_infinite] whitespace-nowrap py-[22px]">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-6 text-[16px] font-medium tracking-[0.28em] uppercase text-text-alpha-55 opacity-55  font-inter"
          >
            • {item}
          </span>
        ))}
      </div>
    </div>
  );
}
