export type VideoSectionProps = {
  videoSrc: string;
  outerClassName?: string;
  innerWrapperClassName?: string;
  middleWrapperClassName?: string;
  hasExtraWrapper?: boolean;
};

export const VideoSection = (props: VideoSectionProps) => {
  const {
    videoSrc,
    outerClassName,
    innerWrapperClassName,
    middleWrapperClassName,
    hasExtraWrapper,
  } = props;

  const videoContainer = (
    <div className="relative box-border caret-transparent w-full overflow-hidden before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:no-underline before:indent-[0px] before:normal-case before:visible before:pt-[56.25%] before:border-separate before:font-apple_system">
      <video
        src={videoSrc}
        autoPlay
        muted
        playsInline
        loop
        className="absolute box-border caret-transparent h-full max-w-full align-baseline w-full left-0 inset-y-0"
      ></video>
    </div>
  );

  if (!outerClassName && !innerWrapperClassName && !middleWrapperClassName) {
    return (
      <div className="relative box-border caret-transparent w-full overflow-hidden before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:no-underline before:indent-[0px] before:normal-case before:visible before:pt-[56.25%] before:border-separate before:font-apple_system">
        {videoContainer}
      </div>
    );
  }

  return (
    <div className={outerClassName}>
      <div
        className={`relative box-border caret-transparent ${innerWrapperClassName}`}
      >
        <div
          className={`absolute box-border caret-transparent w-full left-0 top-0 ${middleWrapperClassName}`}
        >
          {hasExtraWrapper ? (
            <div className="box-border caret-transparent">{videoContainer}</div>
          ) : (
            videoContainer
          )}
        </div>
      </div>
    </div>
  );
};
