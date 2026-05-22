export type ArticleBodyProps = {
  variant:
    | "doctor-story"
    | "hair-loss-problem"
    | "dht-science"
    | "lllt-breakthrough"
    | "product-features"
    | "social-proof"
    | "cost-comparison"
    | "urgency"
    | "warning"
    | "guarantee"
    | "cta-offer"
    | "two-options"
    | "support";
  containerClass?: string;
};

export const ArticleBody = (props: ArticleBodyProps) => {
  const { variant, containerClass = "py-2.5" } = props;

  return (
    <div
      className={`text-zinc-800 text-[17px] box-border caret-transparent leading-[25.5px] text-left mt-[15px] px-px font-montserrat ${containerClass}`}
    >
      {variant === "doctor-story" && (
        <>
          <div className="box-border caret-transparent">
            Dr. Sarah Martinez has been practicing dermatology for over 15
            years. She&#39;s performed hundreds of hair transplant procedures,
            each costing her patients between{" "}
            <span className="box-border caret-transparent">$3,000</span> and
            <span className="box-border caret-transparent">$15,000</span>.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            But last month, something happened that left her absolutely stunned.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            A patient she&#39;d been treating for male pattern baldness walked
            into her office with a completely transformed hairline. Thick,
            healthy hair had grown back in areas that were previously bald. His
            confidence was through the roof.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            &quot;I immediately assumed he&#39;d gotten work done somewhere
            else,&quot; Dr. Martinez recalls. &quot;But when I asked him about
            it, he pulled out this small device that looked like a baseball cap.
            He said he&#39;d been using it for just 12 minutes a day.&quot;
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            What happened next shocked her even more.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            &quot;The results were better than anything I&#39;d seen from a
            <span className="box-border caret-transparent">$10,000</span>{" "}
            transplant procedure. I couldn&#39;t believe it.&quot;
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            Dr. Martinez isn&#39;t alone. Dermatologists across the country are
            reporting similar stories, and frankly, they&#39;re not happy about
            it.
          </div>
        </>
      )}

      {variant === "hair-loss-problem" && (
        <>
          If you&#39;re reading this, chances are you&#39;ve experienced the
          devastating effects of hair loss firsthand.
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            You&#39;re not alone. A staggering 87% of men experience the
            confidence-crushing effects of hair thinning, receding hairlines,
            and embarrassing bald patches as early as their late 20s.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            Every morning, you check the mirror hoping it&#39;s not getting
            worse. But it is.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            You see more scalp showing through. More hair on your pillow. More
            awkward moments trying to style what&#39;s left to cover the thin
            spots.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            The psychological impact is brutal. You avoid certain lighting. You
            worry about windy days. You feel older than your age. Your
            confidence in professional and personal situations takes a hit.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            And the &quot;solutions&quot; offered by the medical establishment?
            They&#39;re either:
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Extremely expensive
            </b>{" "}
            (hair transplants:{" "}
            <span className="box-border caret-transparent">$3,000</span>-
            <span className="box-border caret-transparent">$15,000</span>)
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Risky with side effects
            </b>{" "}
            (medications that can cause sexual dysfunction)
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Temporary bandaids
            </b>{" "}
            (topical treatments that only mask symptoms)
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Simply ineffective
            </b>{" "}
            (most &quot;miracle&quot; products do nothing)
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            But here&#39;s what those expensive dermatologists don&#39;t want
            you to know...
          </div>
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent">
                <b className="font-bold box-border caret-transparent"></b>
              </div>
            </div>
          </div>
        </>
      )}

      {variant === "dht-science" && (
        <>
          Dr. James Peterson, a leading trichologist (hair loss specialist),
          recently made a shocking revelation at the International Hair Science
          Symposium.
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            &quot;We&#39;ve been treating hair loss all wrong,&quot; he admitted
            to a room full of stunned colleagues. &quot;Hair transplants move
            hair from one area to another, but they don&#39;t address the root
            cause of why the hair died in the first place.&quot;
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            That root cause? A hormone called DHT (Dihydrotestosterone).
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              DHT is literally suffocating your hair follicles right now.
            </b>
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            Studies show that 8 out of 10 men have excessive DHT levels that are
            creating what experts call a &quot;stranglehold effect&quot; on
            their hair follicles.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            Here&#39;s how it works: DHT binds to your hair follicles and blocks
            vital nutrients from reaching them. When your follicles can&#39;t
            get the nutrients they need, they gradually shrink and eventually
            stop producing hair altogether.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            Even if you get a hair transplant, if you don&#39;t address the DHT
            problem, the transplanted hair will eventually fall out too.
            That&#39;s why some men need multiple transplant procedures.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              The shocking truth:
            </b>{" "}
            You could spend{" "}
            <span className="box-border caret-transparent">$15,000</span> on a
            hair transplant and still end up bald if you don&#39;t deal with
            DHT.
            <br className="box-border caret-transparent" />
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <b className="font-bold box-border caret-transparent"></b>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {variant === "lllt-breakthrough" && (
        <>
          <div className="box-border caret-transparent">
            But in 2023, everything changed.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            A pioneering clinical breakthrough, highlighted in research from the
            Journal of Cosmetic and Laser Therapy, revealed that Low-Level Laser
            Therapy (LLLT) offers a powerful, non-invasive approach to combating
            hair loss caused by DHT.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            Rather than simply masking symptoms or moving hair around, LLLT
            revitalizes dormant follicles by:
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Improving blood flow
            </b>{" "}
            to starved hair follicles
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Enhancing oxygenation
            </b>{" "}
            at the cellular level
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Supporting cellular metabolism
            </b>{" "}
            even in DHT-damaged areas
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Reactivating the natural hair growth cycle
            </b>
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            The game-changing discovery: By energizing hair follicles and
            breaking DHT&#39;s stranglehold, this therapy helps reverse thinning
            and kickstart regrowth—giving you a thicker, fuller head of hair,
            naturally and safely.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            And now, this breakthrough technology is available to use at home.
          </div>
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <b className="font-bold box-border caret-transparent"></b>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {variant === "product-features" && (
        <>
          The Spartan Red Light Growth Cap is a cutting-edge, dermatologically
          approved device that brings professional-grade red light therapy to
          your home.
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            Here&#39;s what makes it revolutionary:
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - 192 medical-grade diodes
            </b>{" "}
            deliver targeted energy to every follicle
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Clinically proven
            </b>{" "}
            to stimulate hair growth in multiple studies
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Just 12 minutes a day
            </b>{" "}
            - completely hands-free and cordless
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Zero side effects
            </b>{" "}
            - no drugs, no chemicals, no invasive procedures
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Targets male pattern baldness
            </b>{" "}
            specifically where other solutions fail
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            The technology works by:
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              1. Neutralizing DHT
            </b>{" "}
            to protect and revive your hair follicles
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              2. Filling in embarrassing thin spots
            </b>{" "}
            with strong, new growth
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              3. Restoring your receding hairline
            </b>{" "}
            to its former glory
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              4. Transforming weak, lifeless strands
            </b>{" "}
            into thick, healthy hair
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              5. Dramatically increasing
            </b>{" "}
            your overall hair density
            <br className="box-border caret-transparent" />
          </div>
        </>
      )}

      {variant === "social-proof" && (
        <>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              105,347+ men
            </b>{" "}
            are already using Spartan to reclaim the hair they thought was gone
            forever.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            The device has been featured in:
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">- Forbes</b>{" "}
            (&quot;Revolutionary Hair Loss Solution&quot;)
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Men&#39;s Health
            </b>{" "}
            (&quot;The Future of Hair Restoration&quot;)
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">- GQ</b>{" "}
            (&quot;Game-Changing Technology&quot;)
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              Clinical evidence
            </b>{" "}
            is equally impressive:
          </div>
          <div className="box-border caret-transparent">
            A systematic review analyzing 15 studies found that LLLT
            significantly increased terminal hair count, demonstrating its
            effectiveness in combating hair loss at the follicular level.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              Real results from real men:
            </b>
          </div>
          <div className="box-border caret-transparent">
            &quot;I started using the Spartan Red Light Cap about a month ago. I
            wasn&#39;t sure what to expect, but I&#39;m already noticing less
            hair shedding in the shower. My wife actually asked if I was doing
            something different with my hair—it looks fuller.&quot;
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Matt R., 32, New York, NY
            </b>
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            &quot;I&#39;m 51 and started seeing my hairline slowly creeping
            back. After just 10 weeks with the Spartan cap, the receding seems
            to have stalled, and I can see baby hairs coming in around my
            temples. Super impressed so far.&quot;
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Eric T., 45, Austin, TX
            </b>
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            &quot;I&#39;m about 8 weeks in and already seeing a difference in
            thickness on the crown. My barber even noticed and asked what
            I&#39;m using. That says a lot.&quot;
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              - Jason K., 30, Chicago, IL
            </b>
            <br className="box-border caret-transparent" />
          </div>
        </>
      )}

      {variant === "cost-comparison" && (
        <>
          <div className="box-border caret-transparent">
            Let&#39;s do the math on what hair restoration actually costs:
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              Hair Transplant Surgery:
            </b>
          </div>
          <div className="box-border caret-transparent">
            - Initial procedure: $3,000-$15,000
          </div>
          <div className="box-border caret-transparent">
            - Follow-up procedures: $3,000-$8,000 each
          </div>
          <div className="box-border caret-transparent">
            - Total potential cost: $15,000-$30,000+
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">- Risk:</b>{" "}
            Scarring, infection, unnatural results
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              Prescription Medications:
            </b>
          </div>
          <div className="box-border caret-transparent">
            - Monthly cost: $50-$200
          </div>
          <div className="box-border caret-transparent">
            - Annual cost: $600-$2,400
          </div>
          <div className="box-border caret-transparent">
            - 10-year cost: $6,000-$24,000
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">- Risk:</b>{" "}
            Sexual side effects, liver damage
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              Topical Treatments:
            </b>
          </div>
          <div className="box-border caret-transparent">
            - Monthly cost: $100-$300
          </div>
          <div className="box-border caret-transparent">
            - Annual cost: $1,200-$3,600
          </div>
          <div className="box-border caret-transparent">
            - 10-year cost: $12,000-$36,000
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">- Risk: </b>
            Scalp irritation, minimal results
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              Spartan Red Light Growth Cap:
            </b>
          </div>
          <div className="box-border caret-transparent">
            - One-time investment
          </div>
          <div className="box-border caret-transparent">- No ongoing costs</div>
          <div className="box-border caret-transparent">- No side effects</div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">- Results:</b>{" "}
            Visible regrowth in 8-12 weeks
          </div>
        </>
      )}

      {variant === "urgency" && (
        <>
          <div className="box-border caret-transparent">
            Here&#39;s the harsh reality: DHT doesn&#39;t take a day off.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            Every single day you delay taking action, DHT continues its
            relentless assault on your hair follicles. At the International Hair
            Science Symposium, leading experts revealed the shocking truth about
            what happens when you wait:
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">Week 1-2:</b>{" "}
            DHT continues blocking nutrients to your follicles
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">Week 3-4:</b>{" "}
            More follicles begin to shrink and weaken
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">Week 5-8:</b>{" "}
            Hair shedding accelerates noticeably
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">Week 9-12:</b>{" "}
            Follicles become increasingly resistant to regrowth
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              Beyond 12 weeks:
            </b>{" "}
            Permanent damage becomes irreversible
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              The window for action is closing.
            </b>
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            Once DHT has completely destroyed your hair follicles, even the most
            advanced treatments can&#39;t bring them back. The men who see the
            most dramatic results with Spartan are those who act quickly, before
            permanent damage sets in.
          </div>
        </>
      )}

      {variant === "warning" && (
        <>
          <div className="box-border caret-transparent">
            Since Spartan went viral on social media, unauthorized sellers have
            flooded Amazon with cheap knockoffs and inferior red light devices.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              These imitations are dangerous
            </b>{" "}
            because they:
          </div>
          <div className="box-border caret-transparent">
            - Lack the precise wavelength needed for hair growth
          </div>
          <div className="box-border caret-transparent">
            - Use cheap lights instead of medical-grade diodes
          </div>
          <div className="box-border caret-transparent">
            - Haven&#39;t undergone FDA clearance
          </div>
          <div className="box-border caret-transparent">
            - May actually damage your scalp with incorrect frequencies
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              Always buy directly from the official Spartan website
            </b>{" "}
            to ensure you&#39;re getting the authentic device with:
          </div>
          <div className="box-border caret-transparent">
            192 medical-grade diodes (not cheap lights)
          </div>
          <div className="box-border caret-transparent">
            FDA-cleared technology
          </div>
          <div className="box-border caret-transparent">
            Proper wavelength calibration
          </div>
          <div className="box-border caret-transparent">
            Full warranty and support
          </div>
        </>
      )}

      {variant === "guarantee" && (
        <>
          <div className="box-border caret-transparent">
            Here&#39;s the deal: We believe in the Spartan Red Light Growth Cap
            so much that we don&#39;t want you to spend a dime until you&#39;re
            100% certain it works for you.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              That&#39;s why we&#39;re offering a 90-day, no-questions-asked
              guarantee.
            </b>
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            Try the Spartan Red Light Growth Cap for a full 90 days.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            If you don&#39;t see new hair growth, thicker hair, or a restoration
            of your confidence, simply return it for a complete refund.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              You&#39;re only paying if it turns out to be a complete lifesaver.
            </b>
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            And from our experience with over 105,000 satisfied customers, we
            can almost guarantee that it will be.
          </div>
        </>
      )}

      {variant === "cta-offer" && (
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              How much is a full, healthy head of hair worth to you?
            </b>
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            While you&#39;ll notice improvements within 3 weeks, consistent use
            over 3-6 months ensures you reduce DHT levels up to 73%. This means
            your hair will be restored, and your new fuller look will last for
            years to come.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            This one-time investment supports visible regrowth that lasts,
            without the ongoing cost of medications or the risk of multiple
            surgeries.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              But you must act now.
            </b>
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            For the next 24 hours only, we&#39;re offering readers of this
            article an exclusive opportunity to{" "}
            <b className="font-bold box-border caret-transparent">
              save 50% on the Spartan Red Light Growth Cap.
            </b>
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              🔥 FLASH SALE - 50% OFF (Limited Time)
            </b>
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              <br className="box-border caret-transparent" />
            </b>
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              ✅ 90-Day Money-Back Guarantee
            </b>
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              ✅ FREE Bonus:{" "}
            </b>
            <span className="box-border caret-transparent">
              &quot;Full Hair Restoration Techniques&quot; eBook
            </span>
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              ✅ FREE Shipping{" "}
            </b>
            <span className="box-border caret-transparent">
              anywhere in the US
            </span>
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              ✅ FDA-Cleared Technology
            </b>
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              ✅ Over 105,000 Satisfied Customers
            </b>
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              <br className="box-border caret-transparent" />
            </b>
          </div>
          <div className="text-[#2f2f2f] text-[17px] box-border caret-transparent leading-[25.5px] text-left font-montserrat">
            <b className="font-bold box-border caret-transparent">
              This offer expires in: ⏰
              <span className="box-border caret-transparent">23 hours, 59 minutes, 41 seconds</span>
            </b>
            <br className="box-border caret-transparent" />
          </div>
        </div>
      )}

      {variant === "two-options" && (
        <>
          <div className="box-border caret-transparent">
            You have two options:
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">Option 1:</b>{" "}
            Continue watching your hair disappear, losing confidence every day,
            and eventually spend thousands on risky procedures that may not even
            work.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">Option 2:</b>{" "}
            Take action now with clinically proven technology that&#39;s already
            helped over 105,000 men reclaim their hair and confidence.
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">
              The men who wait &quot;just a little longer&quot; are the ones who
              end up with permanent hair loss.
            </b>
          </div>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            Don&#39;t let that be you.
            <br className="box-border caret-transparent" />
          </div>
        </>
      )}

      {variant === "support" && (
        <>
          <b className="font-bold box-border caret-transparent">
            Not satisfied? Return it within 90 days for a full refund!
          </b>
          <div className="box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </div>
          <div className="box-border caret-transparent">
            Questions? Contact our customer support team:
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">- Email:</b>{" "}
            support@try-spartan.com
          </div>
          <div className="box-border caret-transparent">
            <b className="font-bold box-border caret-transparent">- Phone:</b>{" "}
            +1 (213) 277-6464
            <br className="box-border caret-transparent" />
          </div>
        </>
      )}
    </div>
  );
};
