export type Plan = {
  id: string;
  title: string;
  organizers: string;
  genres: string[];
  /**
   * Markdown形式で記述
   */
  description: string;
};

export const plans: Plan[] = [
  {
    id: "dj-night",
    title: "DJナイト in 体育館",
    organizers: "DJ部有志",
    genres: ["音楽", "ダンス", "ナイトイベント"],
    description: `体育館をメインフロアに、プロ・アマ問わず様々なDJが集結！\n\n- ジャンルレスな音楽と照明演出で夜通し踊り明かそう\n- **初心者向けのDJ体験コーナーも併設**`,
  },
  {
    id: "boardgame-cafe",
    title: "ボードゲームカフェ@図書室",
    organizers: "ボドゲ同好会",
    genres: ["交流", "ゲーム", "昼イベント"],
    description: `図書室が1日限定のボードゲームカフェに！\n\n- 初心者歓迎\n- 持ち込みもOK\n- みんなでワイワイ遊びながら新しい友達を作ろう\n\n飲み物・お菓子の販売もあり。`,
  },
  {
    id: "workshop-art",
    title: "廃材アートワークショップ",
    organizers: "美術部・有志講師",
    genres: ["ワークショップ", "アート", "子ども向け"],
    description: `校内や周辺で集めた廃材を使って、自由にアート作品を作ろう！\n\n- 小さなお子様から大人まで参加OK\n- 完成作品は会場内に展示します`,
  },
  {
    id: "campfire-night",
    title: "キャンプファイヤーと星空観察",
    organizers: "自然科学部",
    genres: ["アウトドア", "夜イベント", "交流"],
    description: `校庭で大きなキャンプファイヤーを囲みながら、星空ガイドによる天体観測。\n\n- 焚き火で焼きマシュマロ体験も！`,
  },
  {
    id: "anime-song-remix",
    title: "アニソンRemixパーティー",
    organizers: "アニソン研究会",
    genres: ["音楽", "アニメ", "パーティー"],
    description: `アニメソングを中心にしたDJパーティー`,
  },
  {
    id: "craft-beer-stand",
    title: "クラフトビールスタンド",
    organizers: "OCTONE Brewing",
    genres: ["飲食", "大人向け", "交流"],
    description: `地元ブルワリーによるクラフトビールの販売。\n\n- ノンアルコールやソフトドリンクも充実\n- 校庭で乾杯しよう！`,
  },
  {
    id: "relaxation-room",
    title: "リラクゼーションルーム（音楽室）",
    organizers: "ヒーリング有志",
    genres: ["癒し", "休憩", "音楽"],
    description: `音楽室が癒しの空間に変身。\n\n- アンビエントやヒーリングミュージックのBGM\n- アロマ体験\n- マッサージコーナーも`,
  },
  {
    id: "kids-park",
    title: "こどもパーク＆縁日",
    organizers: "保護者有志",
    genres: ["子ども向け", "遊び", "縁日"],
    description: `小さなお子様向けの遊び場と縁日コーナー。\n\n- ヨーヨー釣り\n- 射的\n- 紙芝居など家族で楽しめる企画が盛りだくさん`,
  },
];
