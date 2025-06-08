import EventInfo from "@/components/EventInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RegistrationButton from "@/components/RegistrationButton";
import { EVENT_INFO } from "@/constants/eventInfo";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* ヒーローセクション */}
        <section className="hero min-h-screen bg-gradient-to-br from-primary to-secondary px-4">
          <div className="hero-content text-center text-base-content">
            <div className="max-w-sm md:max-w-md lg:max-w-2xl mx-auto">
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {EVENT_INFO.title}
              </h1>
              
              <h2 className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold text-base-content">
                廃校で、踊ろう
              </h2>

              <div className="mb-8">
                <EventInfo />
              </div>
              
              <div className="mb-8 text-sm md:text-base leading-relaxed space-y-4 text-center">
                <p>廃校になった小学校が、たった3日間だけ「自由な空間」に生まれ変わります――</p>
                <p>
                  参加者みんなで創りあげる、2泊3日のレイヴパーティ<br />
                  モットーは、「{EVENT_INFO.motto}」
                </p>
                <p>
                  イベント中は複数のDJフロアを巡りながら、<br />
                  美味しいフードやドリンクを片手に音に身をゆだねましょう
                </p>
                <p>
                  参加者によるミニDJイベント、こだわりのコーヒースタンドなど……<br />
                  自由に、思い思いに楽しんでください
                </p>
                <p>「楽しみ方」は、あなた次第</p>
                <br />
                <p className="text-lg md:text-xl text-base-content font-bold">
                  この場所でしか味わえない<br />
                「あなただけの楽しみ方」を見つけましょう
                </p>
              </div>
              
              <div className="flex justify-center">
                <RegistrationButton size="lg" />
              </div>
            </div>
          </div>
        </section>
        
        {/* イントロダクションセクション */}
        <section className="py-12 md:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8">
              イベントについて
            </h2>
            <div className="text-center text-base md:text-lg leading-relaxed px-4 md:px-8">
              <EventInfo />
            </div>
            
            <div className="mt-8 flex justify-center">
              <iframe
                src={EVENT_INFO.googleMapsEmbedUrl}
                width="600" 
                height="450" 
                title="泊まれる学校 さる小の地図"
                allowFullScreen={true} 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md max-w-full border-0"
              >
              </iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
