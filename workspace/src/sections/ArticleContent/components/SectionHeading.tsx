export type SectionHeadingProps = {
  text: React.ReactNode;
  variantClass: string;
  showBreak?: boolean;
};

export const SectionHeading = (props: SectionHeadingProps) => {
  return (
    <div
      className={`text-zinc-800 font-extrabold box-border caret-transparent text-left px-px py-[5px] font-montserrat ${props.variantClass}`}
    >
      {props.text}
      {props.showBreak && (
        <br className="text-[23px] box-border caret-transparent leading-8 md:text-[33px] md:leading-[46.2px]" />
      )}
    </div>
  );
};
