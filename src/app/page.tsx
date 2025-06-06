import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* ヒーローセクション */}
        <section className="hero min-h-screen bg-gradient-to-br from-primary to-secondary px-4">
          <div className="hero-content text-center">
            <div className="max-w-sm md:max-w-md lg:max-w-lg">
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                ガッコウレイヴ<br className="md:hidden" />2025
              </h1>
              <p className="mb-8 text-lg md:text-xl text-white/90 leading-relaxed">
                廃校を舞台にした<br className="sm:hidden" />音楽イベント
              </p>
              <button className="btn btn-accent btn-lg w-full sm:w-auto">
                詳細を見る
              </button>
            </div>
          </div>
        </section>
        
        {/* イントロダクションセクション */}
        <section className="py-12 md:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8">
              イベントについて
            </h2>
            <p className="text-center text-base md:text-lg leading-relaxed px-4 md:px-8">
              廃校となった学校を舞台に、音楽と思い出が交差する特別なイベントです。<br className="hidden sm:block" />
              懐かしい教室で響く音楽とともに、新しい思い出を作りませんか？
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
