import { commentAvatarSrc } from "@/sections/CommentsSection/components/commentAssets";
import { CommentItem } from "@/sections/CommentsSection/components/CommentItem";

export const CommentList = () => {
  return (
    <div className="relative box-border caret-transparent mb-[15px] top-2.5 md:mb-[-150px] md:top-auto after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-apple_system">
      <ul className="box-border caret-transparent pl-0 font-helvetica">
        <CommentItem
          avatarSrc={commentAvatarSrc("Barbara Miller")}
          name="Barbara Miller"
          text={
            <p className="text-black box-border caret-transparent mb-[3px]">
              It is amazing how God created us so perfectly!
            </p>
          }
          likeCount="4"
          timeAgo="51 min"
          showLikeIcon={true}
        />
        <CommentItem
          avatarSrc={commentAvatarSrc("Richard Wilson")}
          name="Richard Wilson"
          text={
            <div className="text-black box-border caret-transparent p-px">
              Just ordered mine.
            </div>
          }
          likeCount="6"
          timeAgo="1 h"
          showLikeIcon={true}
        />
        <CommentItem
          avatarSrc={commentAvatarSrc("Doug Johnson")}
          name="Doug Johnson"
          text={
            <>
              <p className="text-black box-border caret-transparent mb-[3px]">
                Would love to hear reviews from people who bought it. Like 6
                months after, is it still working?
              </p>
            </>
          }
          likeCount="2"
          timeAgo="2 h"
          showLikeIcon={true}
          replies={[
            {
              avatarSrc:
                commentAvatarSrc("Jose Martinez"),
              name: "Jose Martinez",
              text: (
                <>
                  <p className="text-black box-border caret-transparent mb-[3px]"></p>
                  <p className="box-border caret-transparent">
                    Doug Johnson I just started using mine, and I’m already
                    impressed. The red light feels like it’s stimulating just
                    the scalp, not heating everything up like I feared. Looking
                    forward to the next few months.
                  </p>
                  <p className="box-border caret-transparent"></p>
                  <p className="box-border caret-transparent"></p>
                </>
              ),
              likeCount: "3",
              timeAgo: "1 h",
              showLikeIcon: true,
              extraClass: "border-gray-300 border-l border-dotted",
            },
          ]}
          repliesExtraClass="border-b-neutral-800 border-l-gray-300 border-r-neutral-800 border-t-neutral-800 border-l"
        />
        <CommentItem
          avatarSrc={commentAvatarSrc("Lionel Beckett")}
          name="Lionel Beckett"
          text={
            <>
              <p className="text-black box-border caret-transparent mb-[3px]"></p>
              <p className="box-border caret-transparent">
                Really informative. I’ve tried other treatments before but never
                heard red light therapy explained so clearly.
              </p>
              <p className="box-border caret-transparent"></p>
              <p className="box-border caret-transparent"></p>
            </>
          }
          likeCount="1"
          timeAgo="3 h"
        />
        <CommentItem
          avatarSrc={commentAvatarSrc("Mark Owens")}
          name="Mark Owens"
          text={
            <p className="text-black box-border caret-transparent mb-[3px]">
              I would like to buy a cap
            </p>
          }
          likeCount="1"
          timeAgo="3 h"
          repliesExtraClass="border-b-neutral-800 border-l-gray-300 border-r-neutral-800 border-t-neutral-800 border-l"
          replies={[
            {
              avatarSrc:
                commentAvatarSrc("Rowena Barron"),
              name: "Rowena Barron",
              text: (
                <p className="text-black box-border caret-transparent mb-[3px]">
                  Mark Owens i am trying to buy from Australia but only America
                  is accepted
                </p>
              ),
              likeCount: "3",
              timeAgo: "2 h",
              extraClass: "border-gray-300 border-l border-dotted",
            },
          ]}
        />
        <CommentItem
          avatarSrc={commentAvatarSrc("Cecelia Pruitt")}
          name="Cecelia Pruitt"
          text="I’m truly amazed at how our bodies can respond to light therapy. I recently read how it supports natural growth without harsh chemicals such a blessing! Grateful for the science and the doctors behind this technology!"
          likeCount="8"
          timeAgo="3 h"
        />
        <CommentItem
          avatarSrc={commentAvatarSrc("Lucille Langley")}
          name="Lucille Langley"
          text={
            <>
              <p className="text-black box-border caret-transparent mb-[3px]"></p>
              <p className="box-border caret-transparent">
                Just got mine a few days ago. So far, I’m loving how easy it is
                to use and how it makes my scalp feel!
              </p>
              <p className="box-border caret-transparent"></p>
              <p className="box-border caret-transparent"></p>
            </>
          }
          likeCount="1"
          timeAgo="4 h"
          replies={[
            {
              avatarSrc:
                commentAvatarSrc("Sharon Harper"),
              name: "Sharon Harper",
              text: (
                <>
                  <p className="text-black box-border caret-transparent mb-[3px]"></p>
                  <p className="box-border caret-transparent">
                    Sounds promising if it really works. I’ve tried all sorts of
                    treatments and would love to give this cap a shot.
                  </p>
                  <p className="box-border caret-transparent"></p>
                  <p className="box-border caret-transparent"></p>
                </>
              ),
              likeCount: "2",
              timeAgo: "2 h",
            },
            {
              avatarSrc:
                commentAvatarSrc("Zelda Montgomery"),
              name: "Zelda Montgomery",
              text: (
                <p className="text-black box-border caret-transparent mb-[3px]">
                  me too.
                </p>
              ),
              likeCount: "2",
              timeAgo: "1 h",
            },
          ]}
        />
        <CommentItem
          avatarSrc={commentAvatarSrc("Curtis Reynolds")}
          name="Curtis Reynolds"
          text="Really informative read. I’ve been struggling with thinning hair and have looked into everything this looks like it could be a great solution."
          likeCount="3"
          timeAgo="4 h"
        />
        <CommentItem
          avatarSrc={commentAvatarSrc("Winston Harper")}
          name="Winston Harper"
          text={
            <>
              <p className="box-border caret-transparent mb-[3px]"></p>
              <p className="text-black box-border caret-transparent mb-[3px]"></p>
              <p className="box-border caret-transparent">
                Just received mine and the instructions were super clear. I’ve
                been using it all day and already feel a gentle warmth on my
                scalp. It’s exciting to finally try something that actually
                feels like it’s doing something!
              </p>
              <p className="box-border caret-transparent"></p>
              <p className="box-border caret-transparent"></p>
            </>
          }
          likeCount="3"
          timeAgo="4 h"
        />
        <CommentItem
          avatarSrc={commentAvatarSrc("Franklin Monroe")}
          name="Franklin Monroe"
          text="When you see how advanced and responsive the human body is even something like light can stimulate real change."
          likeCount="3"
          timeAgo="5 h"
          showLikeIcon={false}
        />
        <CommentItem
          avatarSrc={commentAvatarSrc("Marcella Hastings")}
          name="Marcella Hastings"
          text={
            <>
              <p className="text-black box-border caret-transparent mb-[3px]"></p>
              <p className="box-border caret-transparent">
                So far, so good. Just started using the Spartan Cap this month,
                and for the price, I’m impressed! It’s comfortable, easy to use,
                and there are great videos online to walk you through setup and
                how to get the most out of it. Happy customer so far!
              </p>
              <p className="box-border caret-transparent"></p>
              <p className="box-border caret-transparent"></p>
              <p className="box-border caret-transparent"></p>
            </>
          }
          likeCount="2"
          timeAgo="5 h"
          replies={[
            {
              avatarSrc:
                commentAvatarSrc("Gwendolyn McPherson"),
              name: "Gwendolyn McPherson",
              text: (
                <p className="text-black box-border caret-transparent mb-[3px]">
                  That sounds real good I would like to try it
                </p>
              ),
              likeCount: "5",
              timeAgo: "2 h",
              extraClass: "border-gray-300 border-l border-dotted",
            },
          ]}
          repliesExtraClass="border-b-neutral-800 border-l-gray-300 border-r-neutral-800 border-t-neutral-800 border-l"
        />
        <CommentItem
          avatarSrc={commentAvatarSrc("Desmond Vaughn")}
          name="Desmond Vaughn"
          text={
            <>
              <p className="text-black box-border caret-transparent mb-[3px]"></p>
              <p className="box-border caret-transparent">
                Had a great experience with customer service. I asked if it
                helps with thinning caused by health issues like cancer
                recovery, and she was honest that results vary—but still
                encouraged me to try. Really appreciated the transparency. Feels
                like a company that actually cares.
              </p>
              <p className="box-border caret-transparent"></p>
            </>
          }
          likeCount="3"
          timeAgo="5 h"
        />
      </ul>
    </div>
  );
};
