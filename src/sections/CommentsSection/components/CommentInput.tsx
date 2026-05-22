export const CommentInput = () => {
  return (
    <div className="comment-input bg-white box-border caret-transparent mx-2.5 py-2.5 pr-2.5 md:pl-px">
      <input
        type="text"
        placeholder="Add a comment ..."
        name=""
        className="textbox textbox-facebook text-black box-border caret-transparent block h-[68px] w-full border-2 border-[#dedede] bg-white px-5 py-5 text-start font-montserrat text-base font-normal leading-6 placeholder:text-black focus:outline-none"
      />
    </div>
  );
};
