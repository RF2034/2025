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
    id: "candle-night",
    title: "キャンドルナイト",
    organizers: "アクティビティ企画班",
    genres: ["DJ", "chill", "オールジャンル", "ナイトイベント"],
    description: `キャンドルの明かりに照らされた図書室でゆったりとしたDJを楽しむイベントです`,
  },
  {
    id: "purpose-feat-schoolrave",
    title: "Purpose feat. schoolrave",
    organizers: "ron3lyscript",
    genres: ["DJ", "LiquidFunk"],
    description: `早稲田茶箱で実施されている #purpose_sabaco のガッコウレイヴ特別編\n\n- 廃校で Liquid Funk を楽しもう`,
  },
  {
    id: "morning-voice",
    title: "Morning voice",
    organizers: "まいんず",
    genres: ["DJ", "アンビエント", "音声作品"],
    description: `朝から好きな音声作品を聴いて1日の始まりを整えよう`,
  },
  {
    id: "fuyu-rock-festival",
    title: "Fuyu Rock Festival",
    organizers: "IK",
    genres: ["DJ", "Rock", "Pops", "ClubMusic"],
    description: `ガッコウレイヴ開催地のさる小はFujiRockFestival開催地の苗場スキー場付近！\n\n- 来年のヘッドライナー予想や、自分の理想のフジロックアーティストをイメージしたセットでわいわいしましょう！`,
  },
];
