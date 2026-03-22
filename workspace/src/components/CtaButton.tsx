export type CtaButtonProps = {
  tag?: "div" | "a";
  title?: string;
  loop?: string;
  className?: string;
  text: React.ReactNode;
  showBreak?: boolean;
  breakClassName?: string;
};

export const CtaButton = (props: CtaButtonProps) => {
  const {
    tag: Tag = "div",
    title,
    loop,
    className = "text-zinc-800 text-[26px] font-extrabold box-border caret-transparent h-[108px] leading-8 text-left mt-0 px-px py-[5px] font-montserrat md:text-[33px] md:h-auto md:leading-[46.2px] md:mt-10",
    text,
    showBreak = false,
    breakClassName,
  } = props;

  return (
    <Tag {...(Tag === "a" ? { title, loop } : {})} className={className}>
      {text}
      {showBreak && <br className={breakClassName} />}
    </Tag>
  );
};
