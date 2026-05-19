import { SITE_2026 } from "@/constants/2026-site";
import RevealOnScroll from "./RevealOnScroll";

export default function StayFoodSection2026() {
  return (
    <section id="stay-food" className="section-2026 section-2026--alt">
      <div className="section-2026__shell mx-auto max-w-6xl px-4 md:px-8">
        <RevealOnScroll>
          <header className="section-2026__head">
            <span className="section-2026__no">04</span>
            <h2 className="font-display-en section-2026__title-en">
              STAY / FOOD
            </h2>
          </header>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="section-2026__notice border border-[var(--2026-rule)] bg-[var(--2026-surface)] p-8 shadow-[3px_4px_0_var(--2026-shadow)]">
              <h3 className="font-display-en text-lg tracking-[0.2em]">
                {SITE_2026.stayFood.titleStayEn}
              </h3>
              <ul className="mt-6 space-y-4 text-base leading-relaxed">
                {SITE_2026.stayFood.stay.lines.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--2026-accent)]" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="section-2026__notice border border-[var(--2026-rule)] bg-[var(--2026-surface)] p-8 shadow-[3px_4px_0_var(--2026-shadow)]">
              <h3 className="font-display-en text-lg tracking-[0.2em]">
                {SITE_2026.stayFood.titleFoodEn}
              </h3>
              <ul className="mt-6 space-y-4 text-base leading-relaxed">
                {SITE_2026.stayFood.food.lines.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--2026-accent)]" />
                    {line}
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
