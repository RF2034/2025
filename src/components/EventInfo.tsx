import { EVENT_INFO } from "@/constants/eventInfo";
import VenueLink from "./VenueLink";

interface EventInfoProps {
  showPrice?: boolean;
  layout?: "vertical" | "horizontal";
  className?: string;
}

export default function EventInfo({ showPrice = true, layout = "vertical", className = "" }: EventInfoProps) {
  const containerClass = layout === "horizontal" ? "space-y-2" : "space-y-2";

  return (
    <div className={`${containerClass} ${className}`}>
      <p className="text-lg md:text-xl font-semibold">
        {EVENT_INFO.dates}
      </p>
      <p className="text-base-content/90">
        開催場所：<VenueLink />
      </p>
      {showPrice && (
        <>
          <p>東京からの無料バス送迎あり！</p>
          <p>予定費用：{EVENT_INFO.price}</p>
        </>
      )}
    </div>
  );
}
