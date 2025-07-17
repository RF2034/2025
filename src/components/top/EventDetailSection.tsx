import EventInfo from "@/components/EventInfo";
import { EVENT_INFO } from "@/constants/eventInfo";

const EventDetailSection = () => (
  <section className="py-12 md:py-16 lg:py-20 px-4">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8">
        開催詳細
      </h2>
      <div className="text-center text-base md:text-lg leading-relaxed px-4 md:px-8">
        <EventInfo />
      </div>
      {/* 無料バス案内 - カードスタイル */}
      <div className="mt-8 mb-8 flex justify-center">
        <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 max-w-sm">
          <div className="card-body text-center py-6">
            <h3 className="text-xl font-black text-base-content/90">
              🚌 東京からの無料バスあり！
            </h3>
          </div>
        </div>
      </div>
      <div className="aspect-video w-full">
        <iframe
          src={`${EVENT_INFO.googleMapsEmbedUrl}&zoom=6&language=ja&region=JP`}
          width="100%"
          height="100%"
          title="泊まれる学校 さる小の地図"
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg border-0 w-full h-full"
        >
        </iframe>
      </div>
    </div>
  </section>
);

export default EventDetailSection;
