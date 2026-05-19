import { SITE_2026 } from "@/constants/2026-site";

export default function StampCta2026() {
  return (
    <a
      href={SITE_2026.cta.registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="stamp-cta-2026"
    >
      {SITE_2026.cta.label}
    </a>
  );
}
