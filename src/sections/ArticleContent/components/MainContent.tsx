import { Breadcrumb } from "@/components/Breadcrumb";
import { ArticleTitle } from "@/sections/ArticleContent/components/ArticleTitle";
import { ArticleSubtitle } from "@/sections/ArticleContent/components/ArticleSubtitle";
import { VideoSection } from "@/sections/ArticleContent/components/VideoSection";
import { ArticleBody } from "@/sections/ArticleContent/components/ArticleBody";
import { SectionHeading } from "@/sections/ArticleContent/components/SectionHeading";
import { ImageSection } from "@/sections/ArticleContent/components/ImageSection";
import { CtaButton } from "@/components/CtaButton";

export const MainContent = () => {
  return (
    <div className="relative box-border caret-transparent basis-full grow max-w-full min-h-[25px] w-min pb-3 md:basis-9/12 md:pb-[58px]">
      <Breadcrumb />
      <ArticleTitle />
      <ArticleSubtitle />
      <div className="box-border caret-transparent w-full"></div>
      <VideoSection videoSrc="https://cdn.shopify.com/videos/c/o/v/c216b52cb0674c058cb03916ccfdcfcf.mp4" />
      <ArticleBody variant="doctor-story" />
      <SectionHeading
        text="The Hair Loss Crisis That's Destroying Men's Confidence"
        variantClass="text-[26px] leading-8 mt-[30px] md:text-[32px] md:leading-[44.8px]"
      />
      <ImageSection
        imageSrc="/images/spartan-nmn/discount.png"
        innerDivClass="pt-[54%]"
        wrapperDivClass="h-full w-full"
        imageClass="float-left"
      />
      <ArticleBody variant="hair-loss-problem" />
      <SectionHeading
        text="The Hidden Truth About Why Hair Transplants Often Fail"
        variantClass="text-[26px] leading-8 mt-[30px] md:text-[33px] md:leading-[46.2px]"
      />
      <ImageSection
        imageSrc="https://c.animaapp.com/mmt9badjPB5AWm/assets/1727940703131_about_hair_loss_follicles.webp"
        innerDivClass="h-[98px] pt-[40%]"
        wrapperDivClass="h-[99%] w-full left-0 top-0 md:h-[71%]"
        imageClass="float-left h-[139px] max-w-[95%] w-[341px] md:h-auto md:w-auto"
      />
      <ArticleBody variant="dht-science" />
      <SectionHeading
        text="The Breakthrough Discovery That Changes Everything"
        variantClass="text-[26px] leading-8 mt-[30px] md:text-[32px] md:leading-[44.8px]"
      />
      <VideoSection
        videoSrc="https://cdn.shopify.com/videos/c/o/v/af0ec6898358405ca79cf6c9cf4b04cc.mp4"
        outerClassName="box-border caret-transparent w-full"
        innerWrapperClassName="pt-[56.46%]"
        middleWrapperClassName="h-full w-full left-0 top-0"
        hasExtraWrapper={true}
      />
      <ArticleBody variant="lllt-breakthrough" />
      <SectionHeading
        text="Introducing the Spartan Red Light Growth Cap"
        variantClass="text-[26px] leading-8 mt-[30px] md:text-[33px] md:leading-[46.2px]"
      />
      <VideoSection
        videoSrc="https://cdn.shopify.com/videos/c/o/v/0625959e653446638e3f47acadeec5ff.mp4"
        outerClassName="box-border caret-transparent w-full"
        innerWrapperClassName="pt-[56%]"
        middleWrapperClassName="h-[70%] w-full left-0 top-0"
        hasExtraWrapper={true}
      />
      <ArticleBody variant="product-features" />
      <SectionHeading
        text="The Proof Is Overwhelming"
        variantClass="text-[23px] leading-8 mt-[30px]"
        showBreak={true}
      />
      <ImageSection
        imageSrc="/images/spartan-nmn/Results.png"
        innerDivClass="pt-[56.46%]"
        wrapperDivClass="h-full w-full"
        imageClass="float-left"
      />
      <ArticleBody variant="social-proof" containerClass="pt-[25px] pb-2.5" />
      <SectionHeading
        text="How Much Are You Really Saving?"
        variantClass="text-[26px] leading-[36.4px] mt-0 md:text-[33px] md:leading-[46.2px] md:mt-[30px]"
      />
      <ImageSection
        imageSrc="https://c.animaapp.com/mmt9badjPB5AWm/assets/1752158983611_httpsassets.checkoutchamp.comFunnelassetsimages0c550aa8_bfd8_436e_b88c_baf46dcfb762afe720dc_08f0_4a93_aabf_3687735392cb1698069323_1688312587252_1_1_.pngversionId_ubVohYQiIA2ybDm4Ogln0lZDDEHxRNEC_4_.png"
        innerDivClass="h-[147px] mt-[11px] pt-[52%] md:h-auto md:mt-0"
        wrapperDivClass="h-[95%] w-full left-0 top-0"
        imageClass="float-left"
      />
      <ArticleBody variant="cost-comparison" />
      <SectionHeading
        text="WARNING: Every Day You Wait, DHT Tightens Its Grip"
        variantClass="text-[26px] leading-8 mt-[30px] md:text-[33px] md:leading-[46.2px]"
      />
      <img
        title=""
        src="/images/spartan-nmn/Go-Make-a-Mistake-and-Be-a-Disappointment.webp"
        href=""
        alt=""
        className="text-black box-border caret-transparent inline max-w-full w-full border border-zinc-400 border-solid"
      />
      <ArticleBody variant="urgency" />
      <SectionHeading
        text="Beware of Cheap Imitations"
        variantClass="text-[26px] leading-8 mt-[30px] md:text-[33px] md:leading-[46.2px]"
      />
      <ImageSection
        imageSrc="https://c.animaapp.com/mmt9badjPB5AWm/assets/1752157053335_spartacap.png"
        innerDivClass="pt-[56.46%]"
        wrapperDivClass="h-full w-full left-0 top-0"
        imageClass="inline"
        outerDivClass="mt-2.5"
        showExtraDiv={true}
      />
      <ArticleBody variant="warning" />
      <SectionHeading
        text="Your Risk-Free Opportunity"
        variantClass="text-[26px] leading-8 mt-[30px] md:text-[33px] md:leading-[46.2px]"
      />
      <VideoSection
        videoSrc="/video/spartan-nmn/30day.mp4"
        outerClassName="box-border caret-transparent w-full py-3"
        innerWrapperClassName="pt-[56.46%]"
        middleWrapperClassName="h-full w-full"
      />
      <ArticleBody variant="guarantee" />
      <SectionHeading
        text="Special Limited-Time Offer"
        variantClass="text-[26px] leading-8 mt-10 md:text-[33px] md:leading-[46.2px]"
      />
      <img
        title=""
        src="https://c.animaapp.com/mmt9badjPB5AWm/assets/1750417169457_1725110900577_Image_11_v3.webp"
        href=""
        alt=""
        className="text-black box-border caret-transparent inline max-w-full w-full"
      />
      <ArticleBody variant="cta-offer" />
      <SectionHeading
        text="The Choice Is Yours"
        variantClass="text-[26px] leading-8 mt-10 md:text-[33px] md:leading-[46.2px]"
      />
      <img
        title=""
        src="/images/spartan-nmn/discount.png"
        href=""
        alt=""
        className="text-black box-border caret-transparent inline max-w-full w-full"
      />
      <ArticleBody variant="two-options" />
      <CtaButton text={"Try Spartan's Red Light Growth Cap Now - Risk FREE!"} />
      <CtaButton
        tag="a"
        title="Get Nebroo 1"
        loop="none"
        className="text-slate-50 text-xl font-bold bg-[#149313] shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] box-border caret-transparent inline-block tracking-[0.02px] leading-6 max-w-full text-center w-full px-2.5 py-4 rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-3xl md:leading-9 md:px-10 md:py-6 hover:bg-[#149313]"
        text={
          <>
            CLAIM YOUR 50% DISCOUNT NOW
            <br className="text-xl box-border caret-transparent leading-6 md:text-3xl md:leading-9" />
          </>
        }
      />
      <ArticleBody variant="support" />
      <img
        title=""
        src="/images/spartan-nmn/showcase.png"
        href=""
        alt=""
        className="text-black box-border caret-transparent inline max-w-full w-full mt-[15px] mb-4 rounded-[10px] md:mb-[26px]"
      />
      <CtaButton
        tag="a"
        title="Get Nebroo 2"
        loop="none"
        className="text-white text-xl font-bold bg-[#149313] shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] box-border caret-transparent inline-block tracking-[0.02px] leading-6 max-w-full text-center w-full px-2.5 py-6 rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-slate-50 md:text-[30px] md:leading-[36px] md:px-6 md:py-8 hover:bg-[#149313]"
        text="GET 50% OFF Spartan Red Light Growth Cap!"
      />
      <section className="bg-zinc-100 box-border caret-transparent"></section>
    </div>
  );
};
