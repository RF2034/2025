import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* ヒーローセクション */}
        <section className="hero min-h-screen bg-gradient-to-br from-primary to-secondary">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">ガッコウレイヴ2025</h1>
              <p className="mb-5 text-white">廃校を舞台にした音楽イベント</p>
            </div>
          </div>
        </section>
        
        {/* イントロダクションセクション */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">イベントについて</h2>
            <p className="text-center max-w-2xl mx-auto">
              廃校となった学校を舞台に、音楽と思い出が交差する特別なイベントです。
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
