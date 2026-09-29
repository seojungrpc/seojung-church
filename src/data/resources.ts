export interface ResourceLink {
  name: string;
  url: string;
  desc?: string;
}

export interface ResourceGroup {
  title: string;
  note?: string;
  links: ResourceLink[];
}

// 교단 홈페이지. (교단 소속 확정 전까지 신학교·예배출판·선교 묶음은 아래에 보관만 하고 노출하지 않음)
export const resourceGroups: ResourceGroup[] = [
  {
    title: '개혁장로교회 (RP) 세계 교단',
    links: [
      { name: 'RPCNA · 북미', url: 'https://reformedpresbyterian.org/' },
      { name: 'RP Church of Canada · 캐나다', url: 'https://rpccanada.org/' },
      { name: 'RP Church of Ireland · 아일랜드', url: 'https://www.rpc.org/' },
      { name: 'RP Church of Scotland · 스코틀랜드', url: 'https://www.rpcscotland.org/' },
      { name: 'RP Church of Australia · 호주', url: 'https://rpca.org.au/' },
      { name: 'RPCNA 일본 노회 · 일본', url: 'https://rpjapan.org/' },
    ],
  },
];

// 참고 서적 (제목은 <em>…</em> 로 강조). 자유롭게 추가/수정하세요.
export const books: string[] = [
  'Hall, Archibald. <em>Gospel Worship</em>. Grand Rapids: Reformation Heritage Books, 2024.',
  'Westminster Assembly of Divines. <em>A Directory for the Publick Worship of God</em>. London, 1645.',
  'Westminster Assembly of Divines. <em>The Form of Presbyterial Church-Government</em>. London, 1645.',
  'Westminster Assembly of Divines. <em>The Westminster Confession of Faith</em>. London, 1646.',
  'Westminster Assembly of Divines. <em>The Larger Catechism</em>. London, 1647.',
  'Westminster Assembly of Divines. <em>The Shorter Catechism</em>. London, 1647.',
  '김중락. 『스코틀랜드 종교개혁사: 존 녹스에서 웨스트민스터 총회까지』. 안산: 흑곰북스, 2017.',
  '조지 길레스피. 『조지 길레스피의 교회정치와 사역에 관한 111가지 명제들』. 서학량 옮김. 고양: 젠틀레인, 2021.',
  '존 L. 지라도. 『악기 없는 예배를 고민하는 이들에게』. 서학량·정재운 옮김. 고양: Festina Lente, 2026.',
];

// ── 교단 소속 확정 후 다시 노출할 묶음 (현재 숨김) ────────────────────
export const hiddenGroups: ResourceGroup[] = [
  {
    title: '신학교',
    links: [
      { name: 'RPTS · 미국', url: 'https://www.rpts.edu/', desc: '개혁장로교 신학교' },
      { name: 'Reformed Theological College · 아일랜드 벨파스트', url: 'https://www.rpc.org/theological-college/' },
      { name: '神戸神学館 (Kobe Theological Hall) · 일본 고베', url: 'https://church.ne.jp/kth/', desc: 'RPCNA 일본 노회 신학교' },
    ],
  },
  {
    title: '예배 · 출판',
    links: [
      { name: 'Crown & Covenant Publications', url: 'https://crownandcovenant.com/', desc: 'RP 교단 출판사' },
      { name: 'The Book of Psalms for Worship', url: 'https://crownandcovenant.com/collections/the-book-of-psalms-for-worship', desc: '공예배용 시편찬송집' },
    ],
  },
  {
    title: '선교',
    links: [
      { name: 'RP Global Missions', url: 'https://www.rpglobalmissions.org/' },
      { name: 'RP Short Term Missions', url: 'https://rpmissions.org/' },
    ],
  },
];
