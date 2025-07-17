import TimetableDay, { TimetableItem } from "@/components/TimetableDay";

const day1: TimetableItem[] = [
  { time: "08:00", description: "チャーターバス出発 @新宿駅前" },
  { time: "11:30", description: "休憩兼昼食タイム @赤城高原SA" },
  { time: "15:00", description: "さる小到着、機材設営、順次音出し" },
  { time: "18:00", description: "施設の全体案内&注意事項説明" },
  { time: "19:00", description: "夕食タイム" },
  { time: "21:00", description: "全ブースDJスタート" },
  { description: "日を囲む会 @BBQスペース" },
  { description: "A面打破（APOP） @音楽室" },
  { time: "22:00", description: "キャンドルナイト（chill） @図書室" },
  { time: "24:00", description: "夜食タイム" },
];

const day2: TimetableItem[] = [
  { time: "07:00", description: "Sound of Sunrise（House, Techno etc） @音楽室" },
  { time: "09:00", description: "ボドゲ会 @多目的室" },
  { time: "10:30", description: "ブランチタイム" },
  { time: "12:00", description: "パラグライダー体験（希望者のみ） @さる小近隣" },
  { time: "12:30", description: "デジゲー会 @多目的室" },
  { time: "15:00", description: "Coffee & Music（downtempo） @図工室" },
  { time: "15:30", description: "Purpose ep.EX（DnB） @音楽室" },
  { time: "16:00", description: "ドッチビー @校庭" },
  { time: "18:30", description: "夕食タイム" },
  { time: "20:00", description: "🔥キャンプファイヤー🔥 @校庭" },
  { time: "22:00", description: "キャンドルタイム（chill） @図書室" },
  { time: "25:30", description: "夜食タイム" },
];

const day3: TimetableItem[] = [
  { time: "08:30", description: "Totsuzen Game（Game Music） @音楽室" },
  { time: "10:30", description: "ブランチタイム" },
  { time: "13:00", description: "撤収作業" },
  { time: "14:00", description: "資材確認" },
  { description: "精算、集金" },
  { time: "16:00", description: "さる小出発" },
  { time: "17:30", description: "休憩 @上里ＳＡ" },
  { time: "20:00", description: "新宿駅到着・解散" },
];

export default function LastYearTimetableCard() {
  return (
    <div className="card bg-base-100 mb-8">
      <div className="card-body">
        <h2 className="card-title">昨年のタイムテーブル</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <TimetableDay title="【1日目】" items={day1} />
          <TimetableDay title="【2日目】" items={day2} />
          <TimetableDay title="【3日目】" items={day3} />
        </div>
        <div className="mt-4 text-xs text-base-content/70">
          ※タイムテーブルは昨年のものです。今年度のものは、参加者の皆さんと相談して決めていきます！
        </div>
      </div>
    </div>
  );
}