import React from "react";

import MassagePageLayout from "./MassagePageLayout";

const MassageChildIndian = React.forwardRef(function MassageChildIndian(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content !px-4 !py-4 sm:!px-5 sm:!py-5 md:!px-6 md:!py-6 lg:!px-7 lg:!py-7">
        <div className="flex h-full min-h-0 flex-col text-[color:var(--ink)]">
          <header className="shrink-0 text-center">
            <span className="block text-[0.58rem] uppercase tracking-[0.32em] text-[color:var(--gold)] sm:text-[0.64rem]">
              Massage Therapy
            </span>
            <h1 className="mt-1 text-[1.45rem] font-semibold leading-tight text-[color:var(--ink)] sm:text-[1.7rem] md:text-[1.9rem] lg:text-[2.05rem]">

              Infant, Child &amp; Indian Head
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
                <h2 className="text-[1.15rem] font-semibold leading-tight text-[color:var(--ink)] sm:text-[1.35rem] md:text-[1.55rem]  md:text-md! lg:text-lg! xl:text-xl! 2xl:text-2xl! ">
                  Infant/Toddler/Child Massage
                </h2>
                <div className="mt-2 space-y-3 text-[0.86rem] leading-6 text-[color:var(--ink)] sm:text-[0.95rem] sm:leading-7 md:text-[1rem] lg:text-2xl!">

                  <p className="!m-0 md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl!">
                    Helps you incorporate nurturing touch into your daily routine. Techniques of soft, gentle strokes aim to strengthen the bond between child and parent by encouraging the release of oxytocin. A beautiful ritual to promote relaxation by reducing stress for both, whilst boosting the child’s emotional security and trust. This massage stimulates sensory development, relieves discomfort from gas, colic, and constipation and supports muscle development and flexibility. (Recommended from 2 weeks, once umbilical stump has fallen off).
                  </p>

                </div>


              </article>
            </section>

            <section className="grid min-h-0 grid-cols-1 items-start gap-4 lg:grid-cols-[60%_40%] lg:items-center">

              <article className=" rounded-none border-0 bg-transparent p-0 text-left lg:col-start-1 items-center align-center">
                <h2 className="text-[1.15rem] font-semibold leading-tight text-[color:var(--ink)] sm:text-[1.35rem] md:text-[1.55rem]  md:text-md! lg:text-lg! xl:text-xl! 2xl:text-2xl!">
                  Indian Head Massage
                </h2>
                <div className="mt-2 space-y-3 text-[0.86rem] leading-6 text-[color:var(--ink)] sm:text-[0.95rem] sm:leading-7 md:text-[1rem]">
                  <p className="!m-0 md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl!">
                     Is an ancient and powerful healing practice with deep roots in Ayurvedic tradition. By focusing on the head, neck, shoulders and upper back, it helps to relieve stress, improve circulation, support hair health, and boost overall well-being. The practice encourages relaxation and a sense of well-being, which, according to Ayurvedic principles, promotes mental clarity, emotional balance, and physical health.
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
    //   title="Infant, Child &amp; Indian Head"
    //   footerRight="Massage — Page 4 of 7"
    //   details={[
    //     {
    //       title: "Infant / Toddler / Child Massage",
    //       paragraphs: [
    //         "Gentle, nurturing massage designed for babies, toddlers, and children. Techniques are adapted to each age group, promoting bonding, relaxation, and overall wellbeing for young ones at every stage of development.",
    //         "Can support infants experiencing colic or digestive discomfort, improve sleep patterns, and strengthen the parent-child connection. Sessions include guidance so parents can continue the practice at home.",
    //       ],
    //       note: "✦ Parent or guardian must be present throughout the session",
    //     },
    //     {
    //       title: "Indian Head Massage",
    //       paragraphs: [
    //         "A traditional Ayurvedic treatment focusing on the scalp, face, neck, and shoulders — areas that commonly hold tension and stress. Based on techniques developed over centuries in India, this treatment promotes circulation and relieves tension headaches.",
    //         "Performed seated with no oils required (oils are optional upon request). An excellent choice for those short on time who still wish to experience a deeply calming treatment with immediate results.",
    //       ],
    //       note: "✦ Typically 30–45 minutes — ask about combined session rates",
    //     },
    //   ]}
    // />
  );
});

export default MassageChildIndian;
