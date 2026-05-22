export type ImageSectionProps = {
  imageSrc: string;
  imageAlt?: string;
  outerDivClass?: string;
  innerDivClass: string;
  wrapperDivClass: string;
  imageClass: string;
  showExtraDiv?: boolean;
};

export const ImageSection = (props: ImageSectionProps) => {
  return (
    <div
      className={`box-border caret-transparent w-full ${props.outerDivClass || ""}`.trim()}
    >
      <div
        className={`relative box-border caret-transparent ${props.innerDivClass}`}
      >
        <div
          className={`absolute box-border caret-transparent w-full left-0 top-0 ${props.wrapperDivClass}`}
        >
          <img
            src={props.imageSrc}
            title=""
            alt={props.imageAlt || ""}
            className={`text-black box-border caret-transparent max-w-[95%] ${props.imageClass}`}
          />
          {props.showExtraDiv && (
            <div className="relative box-border caret-transparent h-full w-full">
              <br className="box-border caret-transparent" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
