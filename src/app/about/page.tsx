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
    <div className="min-h-screen bg-base-200 pt-16">
      <Header />
      <main className="container mx-auto px-4 py-16 text-base-content">
        <h1 className="text-4xl font-bold text-center mb-12">イベント概要</h1>
        
        <div className="space-y-8">
          <div className="card bg-base-100 mb-8">
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

          <div className="card bg-base-100 mb-8">
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
          
          <div className="card bg-base-100 mb-8">
            <div className="card-body">
              <h2 className="card-title">昨年のタイムテーブル</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-base-200 rounded-lg p-4">
                  <div className="text-lg font-bold mb-4">
                    【1日目】
                  </div>
                  <ul className="timeline timeline-vertical timeline-compact">
                      <li>
                        <div className="timeline-start">
                          08:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          チャーターバス出発 @新宿駅前
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          11:30
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          休憩兼昼食タイム @赤城高原SA
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          15:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          さる小到着、機材設営、順次音出し
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          18:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          施設の全体案内&注意事項説明
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          19:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          夕食タイム
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          21:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          全ブースDJスタート
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          日を囲む会 @BBQスペース
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          A面打破（APOP） @音楽室
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          22:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          キャンドルナイト（chill） @図書室
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          24:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          夜食タイム
                        </div>
                        <hr />
                      </li>
                    </ul>
                </div>

                <div className="bg-base-200 rounded-lg p-4">
                  <div className="text-lg font-bold mb-4">
                    【2日目】
                  </div>
                  <ul className="timeline timeline-vertical timeline-compact">
                      <li>
                        <hr />
                        <div className="timeline-start">
                          07:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          Sound of Sunrise（House, Techno etc） @音楽室
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          09:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          ボドゲ会 @多目的室
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          10:30
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          ブランチタイム
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          12:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          パラグライダー体験（希望者のみ） @さる小近隣
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          12:30
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          デジゲー会 @多目的室
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          15:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          Coffee & Music（downtempo） @図工室
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          15:30
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          Purpose ep.EX（DnB） @音楽室
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          16:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          ドッチビー @校庭
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          18:30
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          夕食タイム
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          20:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          🔥キャンプファイヤー🔥 @校庭
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          22:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          キャンドルタイム（chill） @図書室
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          25:30
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          夜食タイム
                        </div>
                        <hr />
                      </li>
                    </ul>
                </div>

                <div className="bg-base-200 rounded-lg p-4">
                  <div className="text-lg font-bold mb-4">
                    【3日目】
                  </div>
                  <ul className="timeline timeline-vertical timeline-compact">
                      <li>
                        <hr />
                        <div className="timeline-start">
                          08:30
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          Totsuzen Game（Game Music） @音楽室
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          10:30
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          ブランチタイム
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          13:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          撤収作業
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          14:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          資材確認
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          精算、集金
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          16:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          さる小出発
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          17:30
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          休憩 @上里ＳＡ
                        </div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">
                          20:00
                        </div>
                        <div className="timeline-end timeline-box ml-4 text-sm">
                          新宿駅到着・解散
                        </div>
                      </li>
                    </ul>
                </div>
                
              <div className="mt-4 text-xs text-base-content/70">
                ※タイムテーブルは昨年のものです。今年度のものは、参加者の皆さんと相談して決めていきます！
              </div>
              </div>
            </div>
          </div>

        </div>

      </main>
      <Footer />
    </div>
  );
}
