import React from "react";

import MassagePageLayout from "./MassagePageLayout";

const MassageLymphaticAroma = React.forwardRef(function MassageLymphaticAroma(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content !px-4 !py-4 sm:!px-5 sm:!py-5 md:!px-6 md:!py-6 lg:!px-7 lg:!py-7">
        <div className="flex h-full min-h-0 flex-col text-[color:var(--ink)]">
          <header className="shrink-0 text-center">
            <span className="block text-[0.58rem] uppercase tracking-[0.32em] text-[color:var(--gold)] sm:text-[0.64rem]">
              Massage Therapy
            </span>
            <h1 className="mt-1 text-[1.45rem] font-semibold leading-tight text-[color:var(--ink)] sm:text-[1.7rem] md:text-[1.9rem] lg:text-[2.05rem]">
             
              Lymphatic Drainage &amp; Aromatherapy
            </h1>
            <div className="mt-2 flex items-center justify-center gap-3 text-[color:var(--gold)]">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent sm:w-14" />
              <span className="text-[0.9rem] leading-none">✦</span>
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent sm:w-14" />
            </div>
          </header>


          <main className="grid flex-1 min-h-0 grid-rows-2 gap-4 pt-4 sm:gap-5 sm:pt-5!">



            <section className="grid min-h-0 grid-cols-1 items-start gap-4 lg:grid-cols-[40%_60%] lg:items-center">

              <div className="hidden lg:block" >
                <img src=" https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785056279/sportdoodle_r7gvok.png" alt=""
                  className="h-full w-full rounded-[1.25rem] object-cover! p-2!"
                />
              </div>

              <article className=" rounded-none border-0 bg-transparent p-0 text-left">
                <h2 className="text-[1.15rem] font-semibold leading-tight text-[color:var(--ink)] sm:text-[1.35rem] md:text-[1.55rem]  md:text-lg! lg:text-xl! xl:text-2xl! 2xl:text-3xl! ">
                  Lymphatic Drainage
                </h2>
                <div className="mt-2 space-y-3 text-[0.86rem] leading-6 text-[color:var(--ink)] sm:text-[0.95rem] sm:leading-7 md:text-[1rem] lg:text-2xl!">

                  <p className="!m-0 md:text-md! lg:text-lg! xl:text-xl! 2xl:text-2xl!">
                    Is a gentle, yet powerful technique aimed at stimulating the lymphatic system to encourage the removal of toxins, waste, and excess fluids from the body. It is particularly useful in boosting immune function, reducing swelling, and enhancing overall health. Great for people pre/post surgery and those living sedentary lifestyles.
                  </p>

                </div>


              </article>
            </section>

            <section className="grid min-h-0 grid-cols-1 items-start gap-4 lg:grid-cols-[60%_40%] lg:items-center">

              <article className=" rounded-none border-0 bg-transparent p-0 text-left lg:col-start-1 items-center align-center">
                <h2 className="text-[1.15rem] font-semibold leading-tight text-[color:var(--ink)] sm:text-[1.35rem] md:text-[1.55rem] lg:text-[1.75rem]   md:text-lg! lg:text-xl! xl:text-2xl! 2xl:text-3xl!">
                  Aromatherapy and Hot Stones
                </h2>
                <div className="mt-2 space-y-3 text-[0.86rem] leading-6 text-[color:var(--ink)] sm:text-[0.95rem] sm:leading-7 md:text-[1rem]">
                  <p className="!m-0 md:text-md! lg:text-lg! xl:text-xl! 2xl:text-2xl!">
                    Is a holistic therapy that blends the benefits of massage with the therapeutic properties of essential oils. Hot stones work to ease muscle tension and pain, while essential oils target specific physical or emotional concerns. The combination of aromatherapy and heat promotes a deep sense of relaxation, calming both the body and mind.
                  </p>

                </div>

              </article>

              <div className="hidden lg:block" >
                <img src=" https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785060063/download_1_xr2vn4.png" alt=""
                  className="h-full w-full rounded-[1.25rem] object-cover! p-2!"
                />
              </div>
            </section>
          </main>

          <footer className="shrink-0 border-t border-[color:var(--divider)] pt-2 text-[0.6rem] uppercase tracking-[0.18em] text-[color:var(--gold)] sm:text-[0.65rem]">
            <div className="flex items-center justify-between gap-3">
              <span>PURLS Mobile Wellness</span>
              <span>Massage — Page 2 of 7</span>
            </div>
          </footer>
        </div>
      </div>
    </div>


    // <MassagePageLayout
    //   ref={ref}
    //   title="Lymphatic Drainage &amp; Aromatherapy"
    //   footerRight="Massage — Page 3 of 7"
    //   details={[
    //     {
    //       title: "Lymphatic Drainage",
    //       paragraphs: [
    //         "A gentle, rhythmic massage technique that stimulates the lymphatic system to encourage the natural drainage of lymph fluid from tissues throughout the body. Particularly effective for reducing oedema (swelling) and supporting the immune system.",
    //         "Recommended following surgery, for those with lymphoedema, or for clients seeking detoxification and reduced water retention. The light touch promotes deep relaxation alongside its therapeutic benefits.",
    //       ],
    //       note: "✦ Particularly beneficial post-surgery or for oedema management",
    //     },
    //     {
    //       title: "Aromatherapy &amp; Hot Stones",
    //       paragraphs: [
    //         "A deeply relaxing full-body massage combining the therapeutic properties of essential oils with the warmth of smooth, heated basalt stones. The heat penetrates muscle tissue more deeply than standard massage alone.",
    //         "Essential oils are selected specifically for your needs — whether calming, energising, or balancing — and are blended into a carrier oil for use throughout the treatment.",
    //       ],
    //       note: "✦ Ideal for stress relief and deep muscular relaxation",
    //     },
    //   ]}
    // />
  );
});

export default MassageLymphaticAroma;
