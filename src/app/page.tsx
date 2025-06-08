import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
                ガッコウレイヴ<br className="md:hidden" />2025
              </h1>
              
              {/* キャッチコピー */}
              <h2 className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold text-base-content">
                廃校で、踊ろう
              </h2>

              {/* イベント基本情報 */}
              <div className="mb-8 space-y-2 text-sm md:text-base">
                <p className="text-lg md:text-xl font-semibold">
                  11/22, 23, 24（土, 日, 月祝）
                </p>
                <p className="text-base-content/90">
                  開催場所：
                  <a 
                  href="https://www.sarusho.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary-content hover:text-primary-content/80 hover:no-underline transition-all duration-200 cursor-pointer"
                  >
                    泊まれる学校 さる小（群馬県利根郡みなかみ町相俣1744-15）
                  </a>
                </p>
              </div>
              
              {/* イントロ文章 */}
              <div className="mb-8 text-sm md:text-base leading-relaxed space-y-4 text-center">
                <p>
                  廃校になった小学校が、たった3日間だけ「自由な空間」に生まれ変わります――
                </p>
                <p>
                  参加者みんなで創りあげる、2泊3日のレイヴパーティ<br />
                  モットーは、「誰もが自由に、安心して楽しめる空間」
                </p>
                <p>
                  イベント中は複数のDJフロアを巡りながら、<br />
                  美味しいフードやドリンクを片手に音に身をゆだねましょう
                </p>
                <p>
                  参加者によるミニDJイベント、こだわりのコーヒースタンドなど……<br />
                  自由に、思い思いに楽しんでください
                </p>
                <p>
                  「楽しみ方」は、あなた次第
                </p>
                <br />
                <p className="text-lg md:text-xl text-base-content font-bold">
                  この場所でしか味わえない<br />
                「あなただけの楽しみ方」を見つけましょう
                </p>
              </div>
              {/* 参加ボタン */}
              <div className="flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSesYwQXXWNX90l2bt0NdJZjcf1kyhF4QQneQpIcjQR1gqWsYQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-primary-content px-6 py-3 text-lg md:text-xl font-semibold transition-colors duration-300 hover:bg-primary/90"
                >
                  参加登録はこちら
                </a>
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
            <p className="text-center text-base md:text-lg leading-relaxed px-4 md:px-8">
              11/22, 23, 24（土, 日, 月祝）<br/>
              開催場所：
                  <a
                  href="https://www.sarusho.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary-content hover:text-primary-content/80 hover:no-underline transition-all duration-200 cursor-pointer"
                  >
                    泊まれる学校 さる小（群馬県利根郡みなかみ町相俣1744-15）
                  </a>
              <br/>

              東京からの無料バス送迎あり<br/>
              予定費用：50,000円<br/>
            </p>
            {/* Google Maps */}
            <div className="mt-8 flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.9901812800305!2d138.8967393246207!3d36.72750853553635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601e12bef89c47d7%3A0x97d48fd46d380ed4!2z5rOK44G-44KM44KL5a2m5qChIOOBleOCi-WwjyDvvIjnpL7vvInnjL_jg7bkuqzlsI_lrabmoKEg44K544Od44O844OE44Ki44Kr44OH44Of44O8!5e0!3m2!1sja!2sjp!4v1749378723951!5m2!1sja!2sjp" 
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
