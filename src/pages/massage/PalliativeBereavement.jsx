import React from "react";

import MassagePageLayout from "./MassagePageLayout";

const MassagePalliativeBereavement = React.forwardRef(function MassagePalliativeBereavement(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content !px-4 !py-4 sm:!px-5 sm:!py-5 md:!px-6 md:!py-6 lg:!px-7 lg:!py-7">
        <div className="flex h-full min-h-0 flex-col text-[color:var(--ink)]">
          <header className="shrink-0 text-center">
            <span className="block text-[0.58rem] uppercase tracking-[0.32em] text-[color:var(--gold)] sm:text-[0.64rem]">
              Massage Therapy
            </span>
            <h1 className="mt-1 text-[1.45rem] font-semibold leading-tight text-[color:var(--ink)] sm:text-[1.7rem] md:text-[1.9rem] lg:text-[2.05rem]">

              Palliative Care &amp; Bereavement
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
                 Palliative Care
                </h2>
                <div className="mt-2 space-y-3 text-[0.86rem] leading-6 text-[color:var(--ink)] sm:text-[0.95rem] sm:leading-7 md:text-[1rem] lg:text-2xl!">

                  <p className="!m-0 md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl!">
                  Treatments aimed at improving the quality of life for those with serious, chronic, or terminal conditions, focusing on comfort, symptom management, and emotional support. Eases pain and discomfort, especially for individuals with limited mobility or chronic conditions whilst maintaining a sense of dignity and independence.
                  </p>

                </div>


              </article>
            </section>

            <section className="grid min-h-0 grid-cols-1 items-start gap-4 lg:grid-cols-[60%_40%] lg:items-center">

              <article className=" rounded-none border-0 bg-transparent p-0 text-left lg:col-start-1 items-center align-center">
                <h2 className="text-[1.15rem] font-semibold leading-tight text-[color:var(--ink)] sm:text-[1.35rem] md:text-[1.55rem]  md:text-md! lg:text-lg! xl:text-xl! 2xl:text-2xl!">
                 Bereavement Massage
                </h2>
                <div className="mt-2 space-y-3 text-[0.86rem] leading-6 text-[color:var(--ink)] sm:text-[0.95rem] sm:leading-7 md:text-[1rem]">
                  <p className="!m-0 md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl!">
                     Is a peaceful massage for people in their early days, weeks and months of grieving. This type of massage can be a powerful component of self-care in meeting you right where you are during the stressful and sensitive time in your grief journey.


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
    //   title="Palliative Care &amp; Bereavement"
    //   footerRight="Massage — Page 6 of 7"
    //   details={[
    //     {
    //       title: "Palliative Care Massage",
    //       paragraphs: [
    //         "A compassionate, gentle massage service offered to individuals living with life-limiting illness. Our specially trained practitioners understand the sensitivity required and adapt every aspect of the session to the client's current condition, comfort, and wishes.",
    //         "The primary goal is comfort — reducing pain, easing breathlessness, and providing a sense of peace and human connection during a deeply challenging time. We work alongside medical and care teams to ensure a holistic approach.",
    //       ],
    //       note: "✦ Available at home, hospice, or hospital — please contact us to discuss",
    //     },
    //     {
    //       title: "Bereavement Massage",
    //       paragraphs: [
    //         "Grief can manifest in the body as well as the mind. Bereavement massage offers a safe, nurturing space for those who have experienced loss — whether recent or ongoing — to receive gentle, healing touch and compassionate support.",
    //         "Touch, in its most caring form, can ease feelings of isolation, help regulate the nervous system, and provide profound comfort during the grieving process. No words are necessary — this treatment is simply about presence and care.",
    //       ],
    //       note: "✦ Offered on a flexible, needs-based basis — please enquire confidentially",
    //     },
    //   ]}
    // />
  );
});

export default MassagePalliativeBereavement;
