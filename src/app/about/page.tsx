import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "イベント概要 - ガッコウレイヴ2025",
  description: "ガッコウレイヴ2025のイベント概要、開催日時、会場情報などをご確認いただけます。",
};

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">イベント概要</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">開催情報</h2>
              <p>日時、会場、参加費などの基本情報を掲載予定</p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">タイムテーブル</h2>
              <p>イベントのスケジュール詳細を掲載予定</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
