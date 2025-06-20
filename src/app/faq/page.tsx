import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "よくある質問 - ガッコウレイヴ2025",
  description: "ガッコウレイヴ2025に関するよくある質問と回答をまとめています。",
};

export default function FAQ() {
  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">よくある質問</h1>
        
          <div className="collapse collapse-arrow bg-base-100 mb-4">
            <input type="checkbox" name="faq-accordion-1" aria-label="東京からの送迎バスはどこから出発しますか？" />
            <div className="collapse-title text-xl font-medium">
              東京からの送迎バスはどこから出発しますか？
            </div>
            <div className="collapse-content">
              <p>東京都内の主要駅からの出発を予定しています。詳細な乗車場所については、参加者の方に別途ご案内いたします。</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 mb-4">
            <input type="checkbox" name="faq-accordion-2" aria-label="宿泊施設はどのような感じですか？" />
            <div className="collapse-title text-xl font-medium">
              宿泊施設はどのような感じですか？
            </div>
            <div className="collapse-content">
              <p>廃校の教室を利用した宿泊となります。寝袋やマットレスなどの寝具は各自でご用意いただくか、レンタルの布団オプションをご利用ください。男女別の部屋をご用意いたします。</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 mb-4">
            <input type="checkbox" name="faq-accordion-3" aria-label="食事は提供されますか？" />
            <div className="collapse-title text-xl font-medium">
              食事は提供されますか？
            </div>
            <div className="collapse-content">
              <p>朝昼晩の食事が提供されます。また、近隣のコンビニやスーパーもご利用いただけます。アレルギーをお持ちの方は事前にお知らせください。</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 mb-4">
            <input type="checkbox" name="faq-accordion-4" aria-label="初心者でも楽しめますか？" />
            <div className="collapse-title text-xl font-medium">
              初心者でも楽しめますか？
            </div>
            <div className="collapse-content">
              <p>はい、もちろんです！「誰もが自由に、安心して楽しめる空間」をモットーにしており、自分のペースで楽しんでいただけます。</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 mb-4">
            <input type="checkbox" name="faq-accordion-5" aria-label="DJとして参加することはできますか？" />
            <div className="collapse-title text-xl font-medium">
              DJとして参加することはできますか？
            </div>
            <div className="collapse-content">
              <p>はい、DJとして参加することができます。機材の持ち込みの希望があれば事前にご相談させていただきます。</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 mb-4">
            <input type="checkbox" name="faq-accordion-6" aria-label="お酒は飲めますか？" />
            <div className="collapse-title text-xl font-medium">
              お酒は飲めますか？
            </div>
            <div className="collapse-content">
              <p>はい、OCTONE Brewingのクラフトビールをはじめ、各種アルコール類をご用意しています。お酒が苦手な方向けにソフトドリンクも豊富に取り揃えています。</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 mb-4">
            <input type="checkbox" name="faq-accordion-7" aria-label="雨天時はどうなりますか？" />
            <div className="collapse-title text-xl font-medium">
              雨天時はどうなりますか？
            </div>
            <div className="collapse-content">
              <p>メインのイベントは校舎内で開催されるため、雨天でも問題なく実施されます。野外アクティビティについては天候に応じて室内プログラムに変更する場合があります。</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 mb-4">
            <input type="checkbox" name="faq-accordion-8" aria-label="キャンセル料はかかりますか？" />
            <div className="collapse-title text-xl font-medium">
              キャンセル料はかかりますか？
            </div>
            <div className="collapse-content">
              <p>キャンセル料については、イベント開催日からの日数に応じて設定しています。詳細なキャンセルポリシーは申し込み時にご確認いただけます。</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 mb-4">
            <input type="checkbox" name="faq-accordion-9" aria-label="持参すべきものはありますか？" />
            <div className="collapse-title text-xl font-medium">
              持参すべきものはありますか？
            </div>
            <div className="collapse-content">
              <p>寝袋、マットレス、タオル、着替え、洗面用具などの基本的な宿泊用品をご持参ください。また、スマートフォンの充電器や常備薬もお忘れなく。詳細な持ち物リストは参加者の方にお送りします。</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 mb-4">
            <input type="checkbox" name="faq-accordion-10" aria-label="一人での参加でも大丈夫ですか？" />
            <div className="collapse-title text-xl font-medium">
              一人での参加でも大丈夫ですか？
            </div>
            <div className="collapse-content">
              <p>一人での参加も大歓迎です！参加者の多くは音楽やサブカルチャーが好きな方々で、自然と会話が生まれる雰囲気です。コーヒースタンドやボードゲーム大会など、交流の機会もたくさんあります。</p>
            </div>
          </div>
      </main>
      <Footer />
    </div>
  );
}
