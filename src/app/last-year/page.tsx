import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "昨年の様子 - ガッコウレイヴ2025",
  description: "ガッコウレイヴ2024の開催レポート、参加者の感想、写真ギャラリーをご覧いただけます。",
};

export default function LastYear() {
  return (
    <div className="min-h-screen">
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
            <div className="space-y-4">
              {/* 参加者の感想を掲載予定 */}
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <p>参加者の感想を掲載予定</p>
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
