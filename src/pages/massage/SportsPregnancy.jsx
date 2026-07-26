import React from "react";

const MassageSportsPregnancy = React.forwardRef(function MassageSportsPregnancy(props, ref) {
    return (
        <div className="page" ref={ref}>
            <div className="page-content !px-4 !py-4 sm:!px-5 sm:!py-5 md:!px-6 md:!py-6 lg:!px-7 lg:!py-7">
                <div className="flex h-full min-h-0 flex-col text-[color:var(--ink)]">
                    <header className="shrink-0 text-center">
                        <span className="block text-[0.58rem] uppercase tracking-[0.32em] text-[color:var(--gold)] sm:text-[0.64rem]">
                            Massage Therapy
                        </span>
                        <h1 className="mt-1 text-[1.45rem] font-semibold leading-tight text-[color:var(--ink)] sm:text-[1.7rem] md:text-[1.9rem] lg:text-[2.05rem]">
                            Sports Specific &amp; Pregnancy
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

                            <article className="self-star rounded-none border-0 bg-transparent p-0 text-left">
                                <h2 className="text-[1.15rem] font-semibold leading-tight text-[color:var(--ink)] sm:text-[1.35rem] md:text-[1.55rem]  md:text-md! lg:text-lg! xl:text-xl! 2xl:text-2xl! ">
                                    Sports Specific
                                </h2>
                                <div className="mt-2 space-y-3 text-[0.86rem] leading-6 text-[color:var(--ink)] sm:text-[0.95rem] sm:leading-7 md:text-[1rem] lg:text-2xl!">

                                    <p className="!m-0  md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl!">
                                        Tailored for athletes and active individuals, sports massage addresses the specific
                                        demands placed on the body through physical activity. It can be used as part of a
                                        warm-up, cool-down, or recovery programme.
                                    </p>
                                    <p className="!m-0 md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl!">
                                        Techniques include deep tissue work, stretching, and neuromuscular therapy to improve
                                        performance, prevent injury, and accelerate recovery after training or competition.
                                    </p>
                                </div>

                                <p className="mt-3! text-[0.82rem] italic leading-6 text-[color:var(--gold)] sm:text-[0.9rem]  md:text-xs! lg:text-sm! xl:text-md! 2xl:text-lg!">
                                    ✦ Suitable for all fitness levels and sporting disciplines
                                </p>
                            </article>
                        </section>

                        <section className="grid min-h-0 grid-cols-1 items-start gap-4 lg:grid-cols-[60%_40%] lg:items-center">
                            <article className="self- rounded-none border-0 bg-transparent p-0 text-left lg:col-start-1">
                                <h2 className="text-[1.15rem] font-semibold leading-tight text-[color:var(--ink)] sm:text-[1.35rem] md:text-[1.55rem] lg:text-[1.75rem]    md:text-md! lg:text-lg! xl:text-xl! 2xl:text-2xl!">
                                    Pregnancy Massage
                                </h2>
                                <div className="mt-2 space-y-3 text-[0.86rem] leading-6 text-[color:var(--ink)] sm:text-[0.95rem] sm:leading-7 md:text-[1rem]">
                                    <p className="!m-0 md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl!">
                                        Specially adapted massage designed to support expectant mothers throughout all
                                        trimesters of pregnancy. Our therapists use safe positioning and gentle techniques
                                        to relieve common discomforts such as back pain, swollen ankles, and fatigue.
                                    </p>
                                    <p className="!m-0 md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl!">
                                        Promotes relaxation, reduces stress hormones, and can improve sleep quality. Always
                                        carried out with appropriate support cushions in the comfort of your own home.
                                    </p>
                                </div>
                                <p className="mt-3! text-[0.82rem] italic leading-6 text-[color:var(--gold)] sm:text-[0.9rem] md:text-xs! lg:text-sm! xl:text-md! 2xl:text-lg!">
                                    ✦ Available from 12 weeks onwards — please advise at booking
                                </p>
                            </article>

                             <div className="hidden lg:block" >
                                <img src=" https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785060465/download_2_q1g4oy.png" alt=""
                                className="h-full w-full rounded-[1.25rem] object-cover! p-2!" 
                                />
                            </div>
                        </section>
                    </main>

                    <footer className="mt-auto shrink-0 border-t border-[color:var(--divider)] pt-2 text-[0.6rem] uppercase tracking-[0.18em] text-[color:var(--gold)] sm:text-[0.65rem]">
                        <div className="flex items-center justify-between gap-3">
                            <span>PURLS Mobile Wellness</span>
                            <span>Massage — Page 2 of 7</span>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
});

export default MassageSportsPregnancy;
