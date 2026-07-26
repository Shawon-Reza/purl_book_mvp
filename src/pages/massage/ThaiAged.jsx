import React from "react";

import MassagePageLayout from "./MassagePageLayout";

const MassageThaiAged = React.forwardRef(function MassageThaiAged(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content !px-4 !py-4 sm:!px-5 sm:!py-5 md:!px-6 md:!py-6 lg:!px-7 lg:!py-7">
        <div className="flex h-full min-h-0 flex-col text-[color:var(--ink)]">
          <header className="shrink-0 text-center">
            <span className="block text-[0.58rem] uppercase tracking-[0.32em] text-[color:var(--gold)] sm:text-[0.64rem]">
              Massage Therapy
            </span>
            <h1 className="mt-1 text-[1.45rem] font-semibold leading-tight text-[color:var(--ink)] sm:text-[1.7rem] md:text-[1.9rem] lg:text-[2.05rem]">

              Thai Massage &amp; Aged Care
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
                  Thai Massage
                </h2>
                <div className="mt-2 space-y-3 text-[0.86rem] leading-6 text-[color:var(--ink)] sm:text-[0.95rem] sm:leading-7 md:text-[1rem] lg:text-2xl!">

                  <p className="!m-0 md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl!">
                   Is an ancient healing technique that combines elements of stretching, gentle rhythmic pressure, and musculoskeletal manipulation to promote health and relaxation. Performed on a soft mattress on the floor, the yoga-like stretches increase flexibility, improve range of motion, and aligns posture. The calming nature of this massage lowers stress levels, balances energy, and encourages mental clarity.
                  </p>

                </div>


              </article>
            </section>

            <section className="grid min-h-0 grid-cols-1 items-start gap-4 lg:grid-cols-[60%_40%] lg:items-center">

              <article className=" rounded-none border-0 bg-transparent p-0 text-left lg:col-start-1 items-center align-center">
                <h2 className="text-[1.15rem] font-semibold leading-tight text-[color:var(--ink)] sm:text-[1.35rem] md:text-[1.55rem]  md:text-md! lg:text-lg! xl:text-xl! 2xl:text-2xl!">
                  Aged Care
                </h2>
                <div className="mt-2 space-y-3 text-[0.86rem] leading-6 text-[color:var(--ink)] sm:text-[0.95rem] sm:leading-7 md:text-[1rem]">
                  <p className="!m-0 md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl!">
                     Treatments improve the quality of life for elderly individuals, particularly those in nursing or aged care homes. Promoting a sense of calm by reducing stress and agitation and alleviating feelings of loneliness, depression, and anxiety. Not only physical comfort, but in providing mental and emotional peace for elderly residents.


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
    //   title="Thai Massage &amp; Aged Care"
    //   footerRight="Massage — Page 5 of 7"
    //   details={[
    //     {
    //       title: "Thai Massage",
    //       paragraphs: [
    //         "An ancient healing system combining gentle pressure along energy lines (Sen lines) with assisted yoga-like stretching. Performed fully clothed on a comfortable mat, it improves flexibility, relieves tension, and restores energy flow throughout the body.",
    //         "Thai massage is both invigorating and deeply relaxing — often described as \"passive yoga.\" It is particularly effective for individuals who feel energetically depleted, physically stiff, or in need of a thorough full-body release.",
    //       ],
    //       note: "✦ Performed fully clothed — loose, comfortable attire recommended",
    //     },
    //     {
    //       title: "Aged Care Massage",
    //       paragraphs: [
    //         "Specially designed for older adults, this gentle massage addresses the unique physical and emotional needs associated with ageing. Techniques are modified to accommodate reduced mobility, sensitive skin, and medical conditions common in later life.",
    //         "Regular massage can significantly improve quality of life for elderly clients by reducing isolation, alleviating aches and joint stiffness, improving circulation, and promoting a greater sense of wellbeing and dignity.",
    //       ],
    //       note: "✦ Available in residential homes, care facilities, and private homes",
    //     },
    //   ]}
    // />
  );
});

export default MassageThaiAged;
