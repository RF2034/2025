import RevealOnScroll from "./RevealOnScroll";
import StampCta2026 from "./StampCta2026";

export default function MidCta2026() {
  return (
    <div className="section-2026 section-2026--cta-band">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center md:px-8">
        <RevealOnScroll className="w-full">
          <p className="text-sm tracking-[0.15em] text-[var(--2026-muted)]">
            先着・定員あり。お早めにお申し込みください。
          </p>
          <div className="mt-6 flex justify-center">
            <StampCta2026 />
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
