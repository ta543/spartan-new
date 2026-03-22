import { commentLikeIconSrc } from "@/sections/CommentsSection/components/commentAssets";
export type ReplyItem = {
  avatarSrc: string;
  name: string;
  text: React.ReactNode;
  likeCount: string;
  timeAgo: string;
  showLikeIcon?: boolean;
  extraClass?: string;
};

export type CommentItemProps = {
  avatarSrc: string;
  name: string;
  text?: React.ReactNode;
  likeCount: string;
  timeAgo: string;
  showLikeIcon?: boolean;
  nameExtraClass?: string;
  containerExtraClass?: string;
  innerContainerExtraClass?: string;
  replies?: ReplyItem[];
  repliesExtraClass?: string;
  extraClass?: string;
};

export const CommentItem = (props: CommentItemProps) => {
  return (
    <li
      className={`items-start box-border caret-transparent flex mt-2.5${props.extraClass ? ` ${props.extraClass}` : ""}`}
    >
      <img
        src={props.avatarSrc}
        title=""
        href=""
        alt=""
        className="box-border caret-transparent float-left h-12 max-w-[95%] min-h-[auto] min-w-[auto] w-[50px] mr-2 mt-[5px] object-cover rounded-none"
      />
      <div
        className={`box-border caret-transparent min-h-[auto] min-w-[auto] ml-2.5 font-helvetica${props.innerContainerExtraClass ? ` ${props.innerContainerExtraClass}` : ""}`}
      >
        <h3
          className={`text-[#3b5998] text-base font-bold box-border caret-transparent leading-[16.8px] mb-[4px] font-helvetica${props.nameExtraClass ? ` ${props.nameExtraClass}` : ""}`}
        >
          {props.name}
        </h3>
        {props.text &&
          (typeof props.text === "string" && props.text === ""
            ? null
            : <div className="text-black text-base leading-6">{props.text}</div>)}
        <div className="box-border caret-transparent h-[25px]">
          <p className="text-xs box-border caret-transparent leading-[18px]">
            <span className="text-indigo-800 box-border caret-transparent font-normal hover:underline">
              Like
            </span>
            {" · "}
            <span className="text-indigo-800 box-border caret-transparent font-normal hover:underline">
              Reply
            </span>
            {" · "}
            {parseInt(props.likeCount, 10) > 0 && (
              <img
                src={commentLikeIconSrc}
                title=""
                href=""
                alt=""
                className="relative box-border caret-transparent inline h-[15px] max-w-[95%] w-[13px] bottom-[3px]"
              />
            )}
            <span className="text-black box-border caret-transparent font-normal">
              {props.likeCount}
            </span>
            {" · "}
            <span className="text-black box-border caret-transparent">
              {props.timeAgo}
            </span>
          </p>
        </div>
        {props.replies && props.replies.length > 0 && (
          <ul
            className={`box-border caret-transparent list-[circle] pl-0${props.repliesExtraClass ? ` ${props.repliesExtraClass}` : ""}`}
          >
            {props.replies.map((reply, index) => (
              <li
                key={index}
                className={`items-start box-border caret-transparent flex${reply.extraClass ? ` ${reply.extraClass}` : ""}`}
              >
                <img
                  src={reply.avatarSrc}
                  title=""
                  href=""
                  alt=""
                  className="box-border caret-transparent float-left h-9 max-w-[95%] min-h-[auto] min-w-[auto] w-10 mr-2 mt-[5px] object-cover rounded-none"
                />
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] ml-2.5">
                  <h3 className="text-[#3b5998] text-base font-bold box-border caret-transparent leading-[16.8px] mb-[4px] font-helvetica">
                    {reply.name}
                  </h3>
                  {reply.text &&
                    (typeof reply.text === "string" && reply.text === ""
                      ? null
                      : <div className="text-black text-base leading-6">{reply.text}</div>)}
                  <div className="box-border caret-transparent h-[25px]">
                    <p className="text-xs box-border caret-transparent leading-[18px]">
                      <span className="text-indigo-800 box-border caret-transparent font-normal hover:underline">
                        Like
                      </span>
                      {" · "}
                      <span className="text-indigo-800 box-border caret-transparent font-normal hover:underline">
                        Reply
                      </span>
                      {" · "}
                      {parseInt(reply.likeCount, 10) > 0 && (
                        <img
                          src={commentLikeIconSrc}
                          title=""
                          href=""
                          alt=""
                          className="relative box-border caret-transparent inline h-[15px] max-w-[95%] w-[13px] bottom-[3px]"
                        />
                      )}
                      <span className="text-black box-border caret-transparent font-normal">
                        {reply.likeCount}
                      </span>
                      {" · "}
                      <span className="text-black box-border caret-transparent">
                        {reply.timeAgo}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};
