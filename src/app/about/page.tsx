import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VenueLink from "@/components/VenueLink";
import { EVENT_INFO } from "@/constants/eventInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `イベント概要 - ${EVENT_INFO.title}`,
  description: `${EVENT_INFO.title}のイベント概要、開催日時、会場情報などをご確認いただけます。`,
};

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 text-base-content">
        <h1 className="text-4xl font-bold text-center mb-12">イベント概要</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">開催情報</h2>
              <p>
                開催日 : {EVENT_INFO.dates}<br />
                開催場所 : <VenueLink /><br />
                東京からの無料バス送迎あり！<br />
                予定費用：{EVENT_INFO.price}<br/>
              </p>
              <p>他 何書けばいいかアイデアください～～～！！！！</p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">タイムテーブル</h2>
              
              <div className="space-y-4">
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="schedule-accordion" defaultChecked aria-label="1日目のスケジュール" />
                  <div className="collapse-title text-lg font-medium">
                    【1日目】金曜日 - Welcome to School
                  </div>
                  <div className="collapse-content">
                    <div className="space-y-2 text-sm">
                      <p><strong>15:00-16:00</strong> 受付・チェックイン</p>
                      <p><strong>16:00-17:00</strong> オープニング・会場案内</p>
                      <p><strong>17:00-19:00</strong> Welcome Party（体育館）</p>
                      <p><strong>19:00-21:00</strong> 夕食・フリータイム</p>
                      <p><strong>21:00-24:00</strong> Evening Session（各フロア）</p>
                      <p><strong>24:00-03:00</strong> Midnight Groove</p>
                      <p><strong>03:00-06:00</strong> After Hours（音楽室）</p>
                    </div>
                  </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="schedule-accordion" aria-label="2日目のスケジュール" />
                  <div className="collapse-title text-lg font-medium">
                    【2日目】土曜日 - Full Experience
                  </div>
                  <div className="collapse-content">
                    <div className="space-y-2 text-sm">
                      <p><strong>09:00-11:00</strong> 朝食・モーニングアクティビティ</p>
                      <p><strong>11:00-13:00</strong> ボードゲーム大会（図書室）</p>
                      <p><strong>13:00-15:00</strong> 昼食・休憩</p>
                      <p><strong>15:00-17:00</strong> 参加者DJタイム Vol.1</p>
                      <p><strong>17:00-19:00</strong> OCTONE Brewing タイム</p>
                      <p><strong>19:00-21:00</strong> 夕食・交流タイム</p>
                      <p><strong>21:00-24:00</strong> Saturday Night Fever</p>
                      <p><strong>24:00-03:00</strong> Deep Night</p>
                      <p><strong>03:00-06:00</strong> Sunrise Session</p>
                    </div>
                  </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="schedule-accordion" aria-label="3日目のスケジュール" />
                  <div className="collapse-title text-lg font-medium">
                    【3日目】日曜日 - Farewell Celebration
                  </div>
                  <div className="collapse-content">
                    <div className="space-y-2 text-sm">
                      <p><strong>09:00-11:00</strong> 朝食・片付け</p>
                      <p><strong>11:00-13:00</strong> サンデーマーケット</p>
                      <p><strong>13:00-15:00</strong> 昼食・最後のフリータイム</p>
                      <p><strong>15:00-17:00</strong> 参加者DJタイム Vol.2</p>
                      <p><strong>17:00-19:00</strong> Closing Ceremony</p>
                      <p><strong>19:00-20:00</strong> チェックアウト・送迎バス出発</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-base-content/70">
                ※時間は予定です。詳細なタイムテーブルは参加者の方に後日配布いたします
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">参加方法</h2>
              <p>
                参加登録は、公式サイトから行えます。<br />
                トップページまたはヘッダーの「参加登録はこちら」ボタンをクリックしてください。<br />
                その後、googleフォームに必要事項を入力し、送信してください。<br />
                参加登録後、詳細な情報をメールでお送りします。<br />
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
