import EventInfo from "@/components/EventInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ParticipantsSection from "@/components/ParticipantsSection";
import RegistrationButton from "@/components/RegistrationButton";
import { EVENT_INFO } from "@/constants/eventInfo";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content pt-16">
      <Header />
      <main>
        {/* ヒーローセクション */}
        <section className="hero min-h-screen"
          style={{
            backgroundImage:
            "url(https://images.schoolrave.net/cdn-cgi/image/f=webp/day1_DSC_0039.JPG)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-base-content">
            <div className="max-w-sm md:max-w-md lg:max-w-2xl mx-auto">
              <div className="mb-8">
                <img 
                  src="https://logos.schoolrave.net/cdn-cgi/image/f=webp/schoolrave_logo_W.png"
                  alt="ガッコウレイヴ ロゴ"
                  className="w-72 md:w-96 lg:w-[50rem] xl:w-[80rem] mx-auto mb-6"
                />
              </div>
              
              <h2 className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                廃校で、踊ろう
              </h2>
              
              <div className="flex flex-col gap-4 justify-center items-center">
                <RegistrationButton size="3xl" />
                <Link href="/about" className="btn btn-soft btn-lg">概要を見る</Link>
              </div>
            </div>
          </div>
        </section>

        {/* コンセプトセクション */}
        <section className="py-12 md:py-16 lg:py-20 px-4 bg-base-100">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
              what is ガッコウレイヴ?
            </h2>
            
            <div className="space-y-8 md:space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="card bg-base-200">
                  <figure>
                    <img 
                      src="https://images.schoolrave.net/cdn-cgi/image/f=webp/day1_DSC_0039.JPG" 
                      alt="DJフロアの様子"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h3 className="card-title justify-center text-lg mb-2">🎵 複数のDJフロア</h3>
                    <p>様々なジャンルの音楽を楽しめます</p>
                  </div>
                </div>
                <div className="card bg-base-200">
                  <figure>
                    <img 
                      src="https://images.schoolrave.net/cdn-cgi/image/f=webp/day1_DSC_0039.JPG" 
                      alt="DJフロアの様子"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h3 className="card-title justify-center text-lg mb-2">🍕 フード & ドリンク</h3>
                    <p>美味しい料理とドリンクをご用意</p>
                  </div>
                </div>
                <div className="card bg-base-200">
                  <figure>
                    <img 
                      src="https://images.schoolrave.net/cdn-cgi/image/f=webp/day1_DSC_0039.JPG" 
                      alt="DJフロアの様子"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h3 className="card-title justify-center text-lg mb-2">☕ 参加者企画</h3>
                    <p>
                      コーヒースタンド
                      <br />
                      キャンプファイヤーetc...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link href="/about" className="btn btn-outline btn-lg">概要を見る</Link>
            </div>
          </div>
        </section>
        
        {/* イベント詳細セクション */}
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

        <div className="divider"></div>

        {/* 現在の参加者セクション */}
        <section id="participants">
          <ParticipantsSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}