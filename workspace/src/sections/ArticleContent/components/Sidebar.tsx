export const Sidebar = () => {
  return (
    <div className="relative items-center box-border caret-transparent hidden basis-full flex-col grow justify-start max-w-full min-h-[25px] w-min md:flex md:basis-3/12">
      <div className="items-start box-border caret-transparent block h-full justify-start min-h-0 min-w-0 w-full px-px py-3 md:flex md:min-h-[auto] md:min-w-[auto] md:px-2.5">
        <div className="bg-zinc-100 box-border caret-transparent min-h-0 min-w-0 w-full mt-2.5 p-2.5 rounded-[1px] top-[50px] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-blue-400 text-xl font-bold box-border caret-transparent hidden mt-[5px] text-center font-montserrat md:block">
            <div className="box-border caret-transparent">Finally Reduce</div>
            <div className="box-border caret-transparent">Hair Loss</div>
          </div>
          <img
            title=""
            src="https://c.animaapp.com/mmt9badjPB5AWm/assets/1745496388503_spartan_root_activator_shampoo_800_x_800_px_7_.webp"
            href=""
            alt=""
            className="text-black box-border caret-transparent hidden basis-[0%] shrink-0 max-w-full w-[90%] mt-2.5 mb-[15px] mx-auto rounded-[1px] md:block md:w-[200px]"
          />
          <a
            title="Get Nebroo - Sidebar"
            loop="none"
            className="text-blue-700 items-center self-center bg-yellow-400 box-border caret-transparent hidden justify-center max-w-full text-center w-[95%] mx-auto border-amber-600 pl-5 pr-2.5 py-2.5 rounded-[5px] border-b-4 border-solid font-helvetica md:block"
          >
            <h1 className="text-zinc-800 text-[19px] font-bold items-center self-center bg-[url('https://c.animaapp.com/mmt9badjPB5AWm/assets/1711370973556_3.png')] bg-no-repeat bg-contain box-border caret-transparent flex justify-center leading-[28.5px] mb-px pl-2.5 font-montserrat md:self-auto">
              GET 50% OFF 
              <br className="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]" />
              SPARTAN NOW!
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};
