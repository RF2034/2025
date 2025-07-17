import EventInfo from "@/components/EventInfo";
import Link from "next/link";

export default function AboutEventInfoCard() {
  return (
    <div className="card bg-base-100 mb-8">
      <div className="card-body">
        <h2 className="card-title">開催情報</h2>
        <EventInfo />
        <div className="mt-4">
          <Link href="/#participants" className="btn btn-outline">
            現在の料金はこちら
          </Link>
        </div>
      </div>
    </div>
  );
}
