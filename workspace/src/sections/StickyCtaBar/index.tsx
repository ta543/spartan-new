export const StickyCtaBar = () => {
  return (
    <div className="sticky items-stretch bg-[#B6B5B5] box-border caret-transparent flex flex-wrap justify-center max-w-full z-10 px-2.5 py-[15px] bottom-0 md:flex-nowrap">
      <div className="relative items-center box-border caret-transparent flex basis-full flex-row-reverse grow justify-center max-w-[1200px] min-h-[25px] w-min md:basis-0">
        <a
          title="Get Nebroo Sticky"
          loop="none"
          className="text-slate-50 text-[22px] font-bold bg-[#149313] box-border caret-transparent block tracking-[0.02px] leading-[30px] max-w-full min-h-[auto] min-w-[auto] text-center p-2.5 rounded-bl rounded-br rounded-tl rounded-tr font-montserrat transition-colors duration-200 md:text-2xl md:leading-10 md:px-10 md:py-[25px] hover:bg-[#149313]"
        >
          GET 50% OFF Spartan Red Light Growth Cap!
        </a>
      </div>
    </div>
  );
};
