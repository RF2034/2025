import EventInfo from "@/components/EventInfo";
import Link from "next/link";


export default function AboutEventInfoCard() {
  return (
    <div className="card bg-base-100 mb-8">
      <div className="card-body">
        <h2 className="card-title">開催情報</h2>
        <EventInfo />
        <h3 className="text-lg font-semibold">🚌東京からの無料バスあり🚌</h3>
        <div className="">
          <Link href="/#participants" className="btn btn-outline">
            現在の料金はこちら
          </Link>
          <div className="mt-2 text-sm">
            <div>キャンセル料</div>
            <ul className="list-disc list-inside">
              <li>3ケ月前～：10％</li>
              <li>1カ月前～：30％</li>
              <li>2週間前～：50％</li>
              <li>3日前～：70％</li>
              <li>当日：100％</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
