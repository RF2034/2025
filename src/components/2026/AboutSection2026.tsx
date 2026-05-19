import { SITE_2026 } from "@/constants/2026-site";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function AboutSection2026() {
  return (
    <section id="about" className="section-2026">
      <div className="section-2026__shell mx-auto max-w-6xl px-4 md:px-8">
        <RevealOnScroll>
          <header className="section-2026__head">
            <span className="section-2026__no">01</span>
            <h2 className="font-display-en section-2026__title-en">
              {SITE_2026.about.titleEn}
            </h2>
          </header>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="section-2026__notice space-y-6 text-base leading-relaxed md:text-lg">
              <p className="inline-flex w-fit items-center rounded-sm border border-[var(--2026-rule)] bg-[var(--2026-surface)] px-3 py-1 text-sm font-semibold md:text-base">
                開催日：{SITE_2026.hero.eventDate}
              </p>
              {SITE_2026.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[var(--2026-rule)] bg-[var(--2026-surface)] shadow-[2px_3px_0_var(--2026-shadow)]">
              <Image
                src={SITE_2026.about.imageSrc}
                alt={SITE_2026.about.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
