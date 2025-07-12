'use client'

import { EVENT_INFO } from "@/constants/eventInfo";
import { useSheetsData } from "@/hooks/useSheetsData";
import VenueLink from "./VenueLink";

interface EventInfoProps {
  showPrice?: boolean;
  layout?: "vertical" | "horizontal";
  className?: string;
}

// 料金階層の定義（ParticipantsSectionと同じ）
const PRICE_TIERS = [
  { minParticipants: 0, price: 55000, nextTier: 35 },
  { minParticipants: 35, price: 50000, nextTier: 40 },
  { minParticipants: 40, price: 45000, nextTier: 45 },
  { minParticipants: 45, price: 40000, nextTier: 50 }
];

export default function EventInfo({ showPrice = true, layout = "vertical", className = "" }: EventInfoProps) {
  const { data } = useSheetsData(5); // 5分間隔で更新
  
  // 現在の料金階層を取得
  const getCurrentTier = (count: number) => {
    return PRICE_TIERS.find(tier => count >= tier.minParticipants && 
      (tier.nextTier === null || count < tier.nextTier)) || PRICE_TIERS[0];
  };

  const currentParticipants = data.length;
  const currentTier = getCurrentTier(currentParticipants);
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
          <p>予定費用：¥{currentTier.price.toLocaleString()}</p>
        </>
      )}
    </div>
  );
}
