import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
  as?: "h1" | "h2";
};

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", className = "", as: Tag = "h2" }: Props) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "text-start items-start";
  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignCls} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag
        className={`mt-4 text-balance font-extrabold tracking-tight text-ink ${
          Tag === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
        }`}
      >
        {title}
      </Tag>
      {subtitle && <p className="mt-4 max-w-2xl text-pretty text-base text-muted sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
