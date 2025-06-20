import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "昨年の様子 - ガッコウレイヴ2025",
  description: "ガッコウレイヴ2024の開催レポート、参加者の感想、写真ギャラリーをご覧いただけます。",
};

export default function LastYear() {
  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">昨年の様子</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">フォトギャラリー</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 写真ギャラリーを掲載予定 */}
              <div className="bg-base-200 h-48 rounded-lg flex items-center justify-center">
                <span className="text-base-content/50">写真1</span>
              </div>
              <div className="bg-base-200 h-48 rounded-lg flex items-center justify-center">
                <span className="text-base-content/50">写真2</span>
              </div>
              <div className="bg-base-200 h-48 rounded-lg flex items-center justify-center">
                <span className="text-base-content/50">写真3</span>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">参加者の声</h2>
            <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 参加者の感想を掲載予定 */}
              <div className="card bg-base-100">
                <div className="card-body">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-24 rounded-full">
                      <span className="text-3xl">A</span>
                    </div>
                  </div>
                  <h3 className="card-title">参加者Aさん</h3>
                  <h4 className="font-bold">友人の紹介で初参加。まさか廃校でこんなに熱狂できるとは</h4>
                  <p>
                    正直、最初は半信半疑でした。<br />
                    友人から『廃校でレイヴやるから一緒に行こう』って誘われて、面白そうだなと思って参加したんです。<br />
                    でも実際に現地に着いて、あの懐かしい校舎の中に響くベースラインを聞いた瞬間、鳥肌が立ちました。<br />
                    体育館のメインフロアはもちろん最高でしたが、個人的には音楽室での深夜セッションが忘れられません。30人くらいの少人数で、DJと観客の距離がめちゃくちゃ近くて、まるで友達の家でパーティしてるような感覚。<br />
                    みんなでアニソンRemixで盛り上がったときは、久しぶりに心の底から楽しいって思えました。<br />
                    OCTONE Brewingのクラフトビールも最高で、昼間は校庭でボードゲームしながらビール飲んで、夜は踊り狂って...こんな贅沢な3日間、他では絶対に味わえないですよ。<br />
                    来年も絶対参加します！
                  </p>
                </div>
              </div>
              <div className="card bg-base-100">
                <div className="card-body">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-24 rounded-full">
                      <span className="text-3xl">B</span>
                    </div>
                  </div>
                  <h3 className="card-title">参加者Bさん</h3>
                  <h4 className="font-bold">noteで読んだ体験記に感動して参加。想像以上の自由さと安心感</h4>
                  <p>
                    参加者の方が書いたnoteの体験記を読んで、『こんな素敵なイベントがあるのか』と感動して参加を決めました。<br />
                    普段はあまりパーティとかクラブとか行かないタイプなんですが、『誰もが自由に、安心して楽しめる空間』というコンセプトに惹かれたんです。<br />
                    実際に行ってみると、本当にそのコンセプト通りでした。<br />
                    踊りたい人は思いっきり踊れるし、疲れたら校庭でのんびりできるし、お酒が苦手な人にはソフトドリンクもちゃんと用意されてて。誰も誰かを否定したりしない、すごく温かい空間だったんです。<br />
                    3日目の朝、校庭でみんなで見た朝日は忘れられません。<br />
                    『また来年も絶対ここに帰ってこよう』って自然と思えました。<br />
                    ガッコウレイヴは単なるイベントじゃなくて、みんなで作る特別な場所なんだなって感じました。
                  </p>
                </div>
              </div>
              <div className="card bg-base-100">
                <div className="card-body">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-24 rounded-full">
                      <span className="text-3xl">C</span>
                    </div>
                  </div>
                  <h3 className="card-title">参加者Cさん</h3>
                  <h4 className="font-bold">Twitterで見つけて即参加決定。同じ趣味の仲間と最高の時間を</h4>
                  <p>
                    元々EDMが好きで、Twitterでガッコウレイヴの投稿を見かけて『これは行くしかない』と思って申し込みました。<br />
                    参加者のnoteを読んで、アニメやゲーム好きの人が多そうだなと感じて、なんか居心地良さそうだなって。<br />
                    実際参加してみると、本当にみんな優しくて受け入れてくれる雰囲気でした。<br />
                    初日にコーヒースタンドで隣にいた人と『あのアニメの曲かかったときヤバかったですよね』って話が始まって、気づいたら朝まで一緒に踊ってました（笑）。<br />
                    理科室でのアンビエント系のフロアも良かったです。<br />
                    疲れたときにちょっと休憩がてら聞きに行くと、まったり系の音楽で癒されて。<br />
                    フロア間の移動も自由だから、自分のペースで楽しめるのが最高でした。<br />
                    普段は人見知りする方なんですが、ここでは自然と人と話せて、今でも連絡取り合う友達ができました。<br />
                    音楽って本当に人を繋げるんだなって実感した3日間でした。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
