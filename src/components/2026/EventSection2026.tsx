import { SITE_2026 } from "@/constants/2026-site";
import RevealOnScroll from "./RevealOnScroll";

export default function EventSection2026() {
  return (
    <section id="event" className="section-2026 section-2026--alt">
      <div className="section-2026__shell mx-auto max-w-6xl px-4 md:px-8">
        <RevealOnScroll>
          <header className="section-2026__head">
            <span className="section-2026__no">02</span>
            <h2 className="font-display-en section-2026__title-en">
              {SITE_2026.event.titleEn}
            </h2>
          </header>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {SITE_2026.event.cards.map((card) => (
              <li
                key={card.key}
                className="event-card-2026 border border-[var(--2026-rule)] bg-[var(--2026-surface)] p-6 shadow-[3px_4px_0_var(--2026-shadow)]"
              >
                <span
                  className={`${card.icon} text-2xl text-[var(--2026-accent)]`}
                  aria-hidden
                />
                <h3 className="font-display-en mt-4 text-xl tracking-wide">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--2026-muted)] md:text-base">
                  {card.description}
                </p>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
