import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "よくある質問 - ガッコウレイヴ2025",
  description: "ガッコウレイヴ2025に関するよくある質問と回答をまとめています。",
};

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">よくある質問</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="faq-accordion" defaultChecked aria-label="イベントの参加費はいくらですか？" />
            <div className="collapse-title text-xl font-medium">
              イベントの参加費はいくらですか？
            </div>
            <div className="collapse-content">
              <p>参加費の詳細は後日発表予定です。</p>
            </div>
          </div>
          
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="faq-accordion" aria-label="駐車場はありますか？" />
            <div className="collapse-title text-xl font-medium">
              駐車場はありますか？
            </div>
            <div className="collapse-content">
              <p>駐車場の有無については詳細が決まり次第お知らせします。</p>
            </div>
          </div>
          
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="faq-accordion" aria-label="年齢制限はありますか？" />
            <div className="collapse-title text-xl font-medium">
              年齢制限はありますか？
            </div>
            <div className="collapse-content">
              <p>年齢制限の詳細については後日発表予定です。</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
