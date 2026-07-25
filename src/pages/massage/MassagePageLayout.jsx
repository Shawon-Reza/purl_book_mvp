import React from "react";

const decorativePanels = [
  "bg-[radial-gradient(circle_at_22%_20%,rgba(255,244,217,0.18),transparent_28%),radial-gradient(circle_at_80%_82%,rgba(255,200,132,0.14),transparent_26%),linear-gradient(145deg,#7b5439_0%,#4f3122_46%,#160d09_100%)]",
  "bg-[radial-gradient(circle_at_72%_26%,rgba(255,230,185,0.16),transparent_28%),radial-gradient(circle_at_20%_74%,rgba(255,255,255,0.1),transparent_24%),linear-gradient(145deg,#5d3d2b_0%,#362114_48%,#120b08_100%)]",
];

function MassagePageLayout({ title, footerRight, details }, ref) {
  const layoutPanels = [
    { type: "image", variant: 0, key: "image-top" },
    { type: "detail", detail: details[0], key: details[0]?.title ?? "detail-1" },
    { type: "detail", detail: details[1], key: details[1]?.title ?? "detail-2" },
    { type: "image", variant: 1, key: "image-bottom" },
  ];

  return (
    <div className="page" ref={ref}>
      <div className="page-content flex h-full min-h-0 flex-col gap-3 overflow-hidden px-3 py-3 text-[color:var(--ink)] md:gap-4 md:px-5 md:py-5 lg:px-6 lg:py-6">
        <header className="shrink-0 text-center">
          <span className="block text-[0.62rem] uppercase tracking-[0.28em] text-[color:var(--gold)] md:text-[0.66rem]">
            Massage Therapy
          </span>
          <h1 className="mt-2 !text-[1.18rem] font-semibold leading-tight text-[color:var(--ink)] md:!text-[1.42rem] lg:!text-[1.66rem]">
            {title}
          </h1>
          <div className="mt-3 flex items-center justify-center gap-3 text-[color:var(--gold)]">
            <span className="h-px w-11 bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent md:w-14" />
            <span className="text-[0.8rem] leading-none">✦</span>
            <span className="h-px w-11 bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent md:w-14" />
          </div>
        </header>







        <main className="grid flex-1 min-h-0 gap-3 md:gap-4 lg:grid-cols-2 lg:grid-rows-2">
          
          
          {layoutPanels.map((panel) => {
            if (panel.type === "image") {
              const panelClass = decorativePanels[panel.variant % decorativePanels.length];

              return (
                <section
                  key={panel.key}
                  aria-hidden="true"
                  className={`relative min-h-[9.5rem] overflow-hidden rounded-[1.25rem] border border-amber-100/90 shadow-[0_16px_30px_rgba(70,44,20,0.16)] md:min-h-[12rem] ${panelClass}`}
                >
                 








                 
                </section>
              );
            }

            const detail = panel.detail;

            return (
              <article
                key={panel.key}
                className="rounded-[1.25rem] border border-amber-200/90 bg-[rgba(250,245,235,0.86)] p-4 shadow-[0_16px_30px_rgba(83,56,29,0.08)] backdrop-blur-[1px] md:p-2!"
              >
                <h2 className="mb-2 !text-[1.05rem] font-semibold leading-tight !text-[color:var(--ink)] md:!text-[1.22rem]">
                  {detail.title}
                </h2>

                <div className="space-y-3 text-[color:var(--ink)] md:space-y-4">
                  {detail.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="!m-0 !text-[0.75rem] !leading-5 !text-[color:var(--ink)] md:!text-[0.85rem] md:!leading-6"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {detail.note ? (
                  <p className="mt-4 !mb-0 !text-[0.8rem] italic !leading-6 !text-[color:var(--gold)] md:!text-[0.88rem]">
                    {detail.note}
                  </p>
                ) : null}
              </article>
            );
          })}
        </main>







        <footer className="shrink-0 border-t border-[color:var(--divider)] pt-2 text-[0.62rem] uppercase tracking-[0.14em] text-[color:var(--gold)] md:text-[0.65rem]">
          <div className="flex items-center justify-between gap-3">
            <span>PURLS Mobile Wellness</span>
            <span>{footerRight}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default React.forwardRef(MassagePageLayout);