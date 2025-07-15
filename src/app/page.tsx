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
            "url(https://day1-images.schoolrave.net/DSC_0039.JPG)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-base-content">
            <div className="max-w-sm md:max-w-md lg:max-w-2xl mx-auto">
              <div className="mb-8">
                <img 
                  src="https://images.schoolrave.net/%E3%82%AC%E3%83%83%E3%82%B3%E3%82%A6%E3%83%AC%E3%82%A4%E3%83%B4_logo_%E7%99%BD.png"
                  alt="ガッコウレイヴ ロゴ"
                  className="w-72 md:w-96 lg:w-[50rem] xl:w-[80rem] mx-auto mb-6"
                />
              </div>
              
              <h2 className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                廃校で、踊ろう
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <RegistrationButton size="xl" />
                <Link href="/about" className="btn btn-lg">概要を見る</Link>
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
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
                <p>
                  参加者みんなで創りあげる、2泊3日のレイヴパーティ
                </p>
                <p>
                  イベント中は複数のDJフロアを巡りながら <br />
                  美味しいフードやドリンクを片手に音に身をゆだねましょう
                </p>
                <p>
                  参加者によるミニDJイベント、こだわりのコーヒースタンドなど……
                </p>
                <p>
                  自由に、思い思いに楽しんでください。
                </p>
                <div className="bg-base-200 p-6 rounded-lg">
                  <p className="text-lg md:text-xl font-semibold text-center">
                    この場所でしか味わえない<br />
                    「あなただけの楽しみ方」を見つけましょう
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-base-200 p-6 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">🎵 複数のDJフロア</h3>
                  <p>様々なジャンルの音楽を楽しめます</p>
                </div>
                <div className="bg-base-200 p-6 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">🍕 フード & ドリンク</h3>
                  <p>美味しい料理とドリンクをご用意</p>
                </div>
                <div className="bg-base-200 p-6 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">☕ 参加者企画</h3>
                  <p>
                    コーヒースタンド
                    <br />
                    キャンプファイヤーetc...
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <RegistrationButton size="lg" />
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
            
            <div className="mt-8 flex justify-center">
              <iframe
                src={EVENT_INFO.googleMapsEmbedUrl}
                width="600" 
                height="450" 
                title="泊まれる学校 さる小の地図"
                allowFullScreen={true} 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg max-w-full border-0"
              >
              </iframe>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* 現在の参加者セクション */}
        <ParticipantsSection />
      </main>
      <Footer />
    </div>
  );
}