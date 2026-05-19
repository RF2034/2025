import { SITE_2026 } from "@/constants/2026-site";
import RevealOnScroll from "./RevealOnScroll";

export default function PriceSection2026() {
  return (
    <section id="price" className="section-2026 section-2026--alt">
      <div className="section-2026__shell mx-auto max-w-6xl px-4 md:px-8">
        <RevealOnScroll>
          <header className="section-2026__head flex flex-col items-center text-center">
            <span className="section-2026__no">06</span>
            <h2 className="font-display-en section-2026__title-en">
              {SITE_2026.price.titleEn}
            </h2>
          </header>

          <div className="mx-auto mt-12 max-w-xl text-center">
            <p className="text-sm tracking-[0.2em] text-[var(--2026-muted)]">
              {SITE_2026.price.headline}
            </p>
            <p className="mt-6 font-display-en text-4xl md:text-5xl">
              {SITE_2026.price.amountNote}
            </p>
            <p className="mt-6 text-base leading-relaxed text-[var(--2026-muted)]">
              {SITE_2026.price.note}
            </p>
            <div className="mt-10 border border-[var(--2026-rule)] bg-[var(--2026-surface)] px-6 py-6 text-left shadow-[3px_4px_0_var(--2026-shadow)]">
              <p className="text-sm tracking-[0.2em] text-[var(--2026-muted)]">
                {SITE_2026.price.includesLabel}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed md:text-base">
                {SITE_2026.price.includedItems.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--2026-accent)]"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-[var(--2026-muted)] md:text-base">
                {SITE_2026.price.includesNote}
              </p>
            </div>
            <div className="mt-6 border border-[var(--2026-rule)] bg-[var(--2026-surface)] px-6 py-6 text-left shadow-[3px_4px_0_var(--2026-shadow)]">
              <p className="text-sm tracking-[0.2em] text-[var(--2026-muted)]">
                キャンセル料
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed md:text-base">
                {SITE_2026.price.cancellationFees.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--2026-accent)]"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
