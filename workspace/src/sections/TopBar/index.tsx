"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Reply = {
  id: string;
  name: string;
  text: string;
  likes: string;
  time: string;
};

type Comment = Reply & {
  replies?: Reply[];
};

type Section = {
  id: string;
  heading?: string;
  paragraphs: string[];
};

type FooterLink = {
  label: string;
  href: string;
};

type SectionMedia = {
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  videoLoop?: boolean;
};

type AdvertorialContent = {
  topBar: { trending: string };
  alertBanner: { label: string; message: string };
  sidebar: { titleLines: string[]; imageAlt: string; cta: string };
  article: {
    breadcrumb: string;
    title: string;
    subtitle: string;
    sections: Section[];
    finalTitle: string;
    primaryCta: string;
    secondaryCta: string;
    support: {
      headline: string;
      questions: string;
      email: string;
      phone: string;
    };
  };
  comments: {
    title: string;
    inputPlaceholder: string;
    actions: { like: string; reply: string };
    items: Comment[];
  };
  footer: {
    disclosureTitle: string;
    disclosureBody: string;
    copyright: string;
    links: FooterLink[];
    paymentMethodsAlt: string;
  };
  stickyCta: string;
};

type AdvertorialMedia = {
  topBar: { iconSrc: string };
  sidebar: { imageSrc: string; ctaBackgroundSrc: string };
  article: {
    heroVideoSrc: string;
    heroVideoLoop?: boolean;
    sections: Record<string, SectionMedia>;
    offerComparison: { imageSrc: string; imageAlt: string };
  };
  comments: {
    likeIconSrc: string;
    avatars: Record<string, string>;
  };
  footer: { paymentMethodsSrc: string };
};

type AdvertorialData = {
  content: AdvertorialContent;
  media: AdvertorialMedia;
};

const ADV_CTA_URL = "https://loraritual.com/products/nrx";

const AdvertorialContext = createContext<AdvertorialData | null>(null);

function useAdvertorialData() {
  const context = useContext(AdvertorialContext);

  if (!context) {
    throw new Error("TopBar advertorial data is missing.");
  }

  return context;
}

function useCountdown(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return `${h} hours, ${m} minutes, ${s} seconds`;
}

function interpolateTemplate(text: string, values: Record<string, string>) {
  return text.replace(/\{\{(\w+)\}\}/g, (_, key: string) => values[key] ?? "");
}

const HtmlParagraphs = ({
  paragraphs,
  values,
  className,
}: {
  paragraphs: string[];
  values?: Record<string, string>;
  className?: string;
}) => {
  const renderedParagraphs = useMemo(
    () =>
      paragraphs.map((paragraph) =>
        values ? interpolateTemplate(paragraph, values) : paragraph,
      ),
    [paragraphs, values],
  );

  return (
    <div
      className={
        className ??
        "text-zinc-800 text-[17px] leading-[25.5px] text-left mt-[15px] px-px py-2.5 font-montserrat"
      }
    >
      <div className="space-y-4">
        {renderedParagraphs.map((paragraph, index) => (
          <p
            key={`${index}-${paragraph.slice(0, 24)}`}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </div>
  );
};

const VideoBlock = ({ src, loop = true }: { src: string; loop?: boolean }) => (
  <div className="relative w-full overflow-hidden rounded-sm" style={{ paddingTop: "56.25%" }}>
    <video
      src={src}
      autoPlay
      muted
      playsInline
      loop={loop}
      className="absolute h-full w-full left-0 top-0 object-cover"
    />
  </div>
);

const CtaBtn = ({ text, id, className }: { text: string; id?: string; className?: string }) => (
  <a
    href={ADV_CTA_URL}
    id={id}
    className={className ?? "text-slate-50 text-xl font-bold bg-[#149313] shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] inline-block tracking-[0.02px] leading-6 max-w-full text-center w-full px-2.5 py-6 rounded font-montserrat md:text-[30px] md:leading-[36px] md:px-6 md:py-8 transition-all duration-200 hover:bg-[#149313] active:scale-[0.98]"}
  >
    <span>{text}</span>
  </a>
);

const Heading = ({ text }: { text: string }) => (
  <div className="text-zinc-800 text-[26px] font-extrabold leading-8 text-left mt-[30px] px-px py-[5px] font-montserrat reveal md:text-[33px] md:leading-[46.2px]">
    {text}
  </div>
);

const Support = () => {
  const { content } = useAdvertorialData();

  return (
    <div className="text-zinc-800 text-[17px] leading-[25.5px] text-left mt-[15px] px-px py-2.5 font-montserrat">
      <b>{content.article.support.headline}</b>
      <div className="mt-4 space-y-2">
        <p>{content.article.support.questions}</p>
        <p>
          <b>- Email:</b> {content.article.support.email}
        </p>
        <p>
          <b>- Phone:</b> {content.article.support.phone}
        </p>
      </div>
    </div>
  );
};

const CommentEntry = ({ c }: { c: Comment }) => {
  const { content, media } = useAdvertorialData();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Number.parseInt(c.likes, 10));

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <li className="items-start flex mt-2.5 reveal-fast">
      <img src={media.comments.avatars[c.id] ?? ""} alt={c.name} className="float-left h-12 w-[50px] mr-2 mt-[5px] rounded-none object-cover" />
      <div className="ml-2.5 font-helvetica flex-1">
        <h3 className="text-[#3b5998] text-base font-bold leading-[16.8px] mb-[4px] font-helvetica">{c.name}</h3>
        <p className="text-black text-base leading-6 mb-[3px]">{c.text}</p>
        <div className="h-[25px] flex items-center gap-1 text-xs">
          <button onClick={handleLike} className={`font-normal transition-colors duration-150 ${liked ? "text-blue-700" : "text-indigo-800"} hover:underline`}>
            {content.comments.actions.like}
          </button>
          <span className="text-gray-400">·</span>
          <span className="text-indigo-800 font-normal hover:underline cursor-pointer">{content.comments.actions.reply}</span>
          <span className="text-gray-400">·</span>
          {likeCount > 0 && <img src={media.comments.likeIconSrc} alt="" className="inline h-[13px] w-[11px]" />}
          <span className={`font-normal transition-colors duration-150 ${liked ? "text-blue-700" : "text-black"}`}>{likeCount}</span>
          <span className="text-gray-400">·</span>
          <span className="text-gray-500">{c.time}</span>
        </div>
        {c.replies && c.replies.length > 0 && (
          <ul className="pl-0 mt-1 border-l-2 border-gray-200 ml-1">
            {c.replies.map((reply, index) => (
              <li key={`${reply.id}-${index}`} className="items-start flex mt-2 pl-2">
                <img src={media.comments.avatars[reply.id] ?? ""} alt={reply.name} className="float-left h-9 w-10 mr-2 mt-[5px] rounded-none object-cover" />
                <div className="ml-2 flex-1">
                  <h3 className="text-[#3b5998] text-base font-bold leading-[16.8px] mb-[4px] font-helvetica">{reply.name}</h3>
                  <p className="text-black text-base leading-6 mb-[3px]">{reply.text}</p>
                  <div className="h-[22px] flex items-center gap-1 text-xs">
                    <span className="text-indigo-800 font-normal hover:underline cursor-pointer">{content.comments.actions.like}</span>
                    <span className="text-gray-400">·</span>
                    <span className="text-indigo-800 font-normal hover:underline cursor-pointer">{content.comments.actions.reply}</span>
                    <span className="text-gray-400">·</span>
                    {Number.parseInt(reply.likes, 10) > 0 && <img src={media.comments.likeIconSrc} alt="" className="inline h-[13px] w-[11px]" />}
                    <span className="text-black font-normal">{reply.likes}</span>
                    <span className="text-gray-400">·</span>
                    <span className="text-gray-500">{reply.time}</span>
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

const CommentInputBox = () => {
  const { content } = useAdvertorialData();
  const [value, setValue] = useState("");

  return (
    <div className="comment-input bg-white mx-2.5 mb-2 py-2.5 pr-2.5 md:pl-px">
      <input
        type="text"
        placeholder={content.comments.inputPlaceholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="textbox textbox-facebook text-black block h-[68px] w-full border-2 border-[#dedede] bg-white px-5 py-5 font-montserrat text-base font-normal leading-6 placeholder:text-black focus:outline-none caret-auto"
      />
    </div>
  );
};

const Sidebar = () => {
  const { content, media } = useAdvertorialData();

  return (
    <div className="relative items-center hidden basis-full flex-col grow justify-start max-w-full min-h-[25px] w-min md:flex md:basis-3/12">
      <div className="items-start block h-full justify-start w-full px-px py-3 md:flex md:px-2.5">
        <div className="bg-zinc-100 w-full mt-2.5 p-2.5 rounded">
          <div className="text-blue-400 text-xl font-bold hidden mt-[5px] text-center font-montserrat md:block">
            {content.sidebar.titleLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
          <img
            src={media.sidebar.imageSrc}
            alt={content.sidebar.imageAlt}
            className="hidden basis-[0%] shrink-0 max-w-full w-[90%] mt-2.5 mb-[15px] mx-auto rounded-[1px] md:block md:w-[200px] transition-transform duration-300 hover:scale-[1.02]"
          />
          <a
            href={ADV_CTA_URL}
            className="group text-blue-700 items-center self-center bg-yellow-400 hidden justify-center max-w-full text-center w-[95%] mx-auto border-amber-600 pl-5 pr-2.5 py-2.5 rounded-[5px] border-b-4 border-solid font-helvetica md:block transition-all duration-200 hover:bg-yellow-300 active:scale-[0.98]"
          >
            <h1 className="text-zinc-800 text-[19px] font-bold items-center self-center bg-no-repeat bg-contain flex justify-center leading-[28.5px] mb-px pl-2.5 font-montserrat md:self-auto whitespace-pre-line" style={{ backgroundImage: `url('${media.sidebar.ctaBackgroundSrc}')` }}>
              {content.sidebar.cta}
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

const MainContent = ({ countdown }: { countdown: string }) => {
  const { content, media } = useAdvertorialData();

  return (
    <div className="relative basis-full grow max-w-full min-h-[25px] w-min pb-3 md:basis-9/12 md:pb-[58px]">
      <div className="text-zinc-400 font-medium hidden leading-4 text-left px-px font-montserrat md:block animate-fade-in">
        {content.article.breadcrumb}
      </div>

      <div className="text-[26px] font-medium leading-9 text-left mt-px p-px font-montserrat md:text-[40px] md:leading-[48px] md:mt-5 animate-fade-up">
        <span>
          <b>{content.article.title}</b>
        </span>
      </div>

      <div className="text-zinc-800 text-lg font-bold leading-7 text-left mt-[5px] mb-px pt-[5px] pb-px px-px font-montserrat md:text-[22px] md:leading-9 md:mb-[5px] md:pb-[5px] animate-fade-up">
        <span>{content.article.subtitle}</span>
      </div>

      <div className="reveal mt-3">
        <VideoBlock src={media.article.heroVideoSrc} loop={media.article.heroVideoLoop} />
      </div>

      {content.article.sections.map((section, index) => {
        const sectionMedia = media.article.sections[section.id];
        const isWarningSection = section.id === "urgency-warning";

        return (
          <div key={section.id ?? `section-${index}`}>
            {section.heading ? <Heading text={section.heading} /> : null}
            {sectionMedia?.videoSrc ? (
              <div className="reveal mt-3 py-3">
                <VideoBlock src={sectionMedia.videoSrc} loop={sectionMedia.videoLoop} />
              </div>
            ) : null}
            {sectionMedia?.imageSrc ? (
              <div className="reveal w-full mt-2">
                <img
                  src={sectionMedia.imageSrc}
                  alt={sectionMedia.imageAlt ?? section.heading ?? "Advertorial section image"}
                  className={isWarningSection ? "inline max-w-full w-full border border-zinc-400 border-solid" : "max-w-full w-full"}
                />
              </div>
            ) : null}
            <div className="reveal">
              <HtmlParagraphs paragraphs={section.paragraphs} values={{ countdown }} />
            </div>
          </div>
        );
      })}

      <div className="reveal text-zinc-800 text-[26px] font-extrabold leading-8 text-left mt-10 px-px py-[5px] font-montserrat md:text-[33px] md:leading-[46.2px]">
        {content.article.finalTitle}
      </div>
      <div className="reveal mt-2">
        <CtaBtn
          text={content.article.primaryCta}
          id="cta-main"
          className="text-slate-50 text-xl font-bold bg-[#149313] shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] inline-block tracking-[0.02px] leading-6 max-w-full text-center w-full px-2.5 py-4 rounded font-montserrat md:text-3xl md:leading-9 md:px-10 md:py-6 transition-all duration-200 hover:bg-[#149313] active:scale-[0.98]"
        />
      </div>
      <div className="reveal">
        <Support />
      </div>

      <div className="reveal mt-4">
        <img
          src={media.article.offerComparison.imageSrc}
          alt={media.article.offerComparison.imageAlt}
          className="inline max-w-full w-full mt-[15px] mb-4 rounded-[10px] md:mb-[26px]"
        />
      </div>
      <div className="reveal">
        <CtaBtn text={content.article.secondaryCta} />
      </div>
      <section className="bg-zinc-100"></section>
    </div>
  );
};

export const TopBar = ({ content, media }: AdvertorialData) => {
  const countdown = useCountdown(23 * 3600 + 59 * 60 + 41);

  return (
    <AdvertorialContext.Provider value={{ content, media }}>
      <div className="box-border">
        <div className="items-stretch bg-[#333333] flex flex-wrap justify-start max-w-full px-2.5 py-px md:flex-nowrap md:py-2.5">
          <div className="relative flex basis-full grow max-w-[1170px] min-h-[25px] w-min mx-auto px-px md:basis-0 md:px-2.5">
            <div className="self-center flex justify-start min-h-[auto] min-w-[auto] w-[30%] px-px py-3"></div>
            <div className="items-center self-center flex justify-end min-h-[auto] min-w-[auto] w-full px-px py-3 md:[align-items:normal] md:self-auto">
              <img
                src={media.topBar.iconSrc}
                alt=""
                className="max-w-full min-h-[auto] min-w-[auto] w-10 md:w-[50px]"
              />
              <div className="text-white text-[13px] font-bold leading-[13px] min-h-[auto] min-w-[auto] pl-2.5 pr-px py-2.5 font-montserrat md:text-base md:leading-4 md:pl-5">
                {content.topBar.trending}
              </div>
            </div>
          </div>
        </div>

        <div className="items-center self-center flex flex-wrap justify-center max-w-full pt-[18px] pb-[15px] px-0 md:flex-nowrap md:px-2.5 animate-slide-down">
          <div className="relative basis-full grow max-w-[1200px] min-h-[25px] w-min pt-0 pb-2.5 px-2.5 md:basis-0 md:pt-2.5">
            <div className="w-full">
              <div className="items-stretch flex flex-wrap justify-start max-w-full md:flex-nowrap">
                <div className="relative bg-orange-100 basis-full grow max-w-full min-h-[25px] w-min border-[#DDDDA6] pt-0 pb-2.5 px-2.5 rounded border border-solid md:basis-0 md:pt-2.5">
                  <div className="text-zinc-800 text-[17px] leading-[25.5px] text-left px-px py-2.5 font-montserrat md:text-[23px] md:leading-[34.5px]">
                    <b>
                      <span className="text-red-600">{content.alertBanner.label}</span>
                    </b>{" "}
                    {content.alertBanner.message}
                  </div>
                </div>
              </div>

              <div className="items-stretch flex flex-wrap justify-start max-w-full mt-1.5 md:flex-nowrap md:mt-5">
                <MainContent countdown={countdown} />
                <Sidebar />
              </div>
            </div>
          </div>
        </div>

        <div className="items-stretch flex flex-wrap justify-start max-w-full min-h-full p-2.5 md:flex-nowrap">
          <div className="relative bg-white basis-full grow max-w-[1200px] min-h-[25px] w-min mx-auto px-0 py-2.5 md:basis-0 md:px-2.5">
            <div className="text-black font-montserrat mb-2">
              <b className="text-lg font-bold leading-[27px]">{content.comments.title}</b>
            </div>
            <CommentInputBox />
            <div className="relative mb-[15px] top-2.5 md:mb-0 md:top-auto">
              <ul className="pl-0 font-helvetica">
                {content.comments.items.map((comment) => (
                  <CommentEntry key={comment.id} c={comment} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="items-stretch bg-white flex flex-wrap justify-center max-w-full border-zinc-500 mt-12 px-2.5 py-3 border-t border-solid md:flex-nowrap">
          <div className="relative items-center basis-full flex-col grow justify-between max-w-[1200px] min-h-[25px] w-min px-[7px] py-2.5 md:basis-0 md:px-2.5">
            <div className="text-neutral-500 leading-5 text-center mt-2.5 p-2.5 font-montserrat">
              <b>{content.footer.disclosureTitle} </b>: {content.footer.disclosureBody}
            </div>
            <div className="text-neutral-500 text-xs leading-[22px] text-center mt-[15px] px-px py-2.5 font-montserrat md:text-base md:px-2.5">
              {content.footer.copyright}
              <div className="text-blue-700 text-xs md:text-base flex flex-wrap justify-center gap-1">
                {content.footer.links.map((link, index) => (
                  <div key={link.href} className="flex items-center gap-1">
                    {index > 0 ? <span>-</span> : null}
                    <a href={link.href} className="text-blue-700 hover:underline transition-colors duration-150">
                      <u>{link.label}</u>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-neutral-500 w-full text-center px-2.5">
              <img
                alt={content.footer.paymentMethodsAlt}
                src={media.footer.paymentMethodsSrc}
                className="inline max-w-[95%] w-[280px]"
              />
            </div>
          </div>
        </div>

        <div className="sticky items-stretch bg-[#B6B5B5] flex flex-wrap justify-center max-w-full z-50 px-2.5 py-[15px] bottom-0 md:flex-nowrap shadow-[0_-4px_16px_rgba(0,0,0,0.15)]">
          <div className="relative items-center flex basis-full flex-row-reverse grow justify-center max-w-[1200px] min-h-[25px] w-min md:basis-0">
            <a
              href={ADV_CTA_URL}
              className="text-slate-50 text-[20px] font-bold bg-[#149313] block tracking-[0.02px] leading-[28px] max-w-full text-center px-4 py-2.5 rounded font-montserrat md:text-2xl md:leading-10 md:px-10 md:py-[22px] transition-all duration-200 hover:bg-[#149313] active:scale-[0.98]"
            >
              <span>{content.stickyCta}</span>
            </a>
          </div>
        </div>
      </div>
    </AdvertorialContext.Provider>
  );
};
