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

// RP 계열 참고 사이트 모음. 자유롭게 추가/수정하세요.
export const resourceGroups: ResourceGroup[] = [
  {
    title: '개혁장로교회 (RP) 세계 교단',
    links: [
      { name: 'RPCNA · 북미', url: 'https://www.reformedpresbyterian.org/' },
      { name: 'RP Church of Canada · 캐나다', url: 'https://rpccanada.org/' },
      { name: 'RP Church of Ireland · 아일랜드', url: 'https://www.rpc.org/' },
      { name: 'RP Church of Scotland · 스코틀랜드', url: 'https://www.rpcscotland.org/' },
      { name: 'RP Church of Australia · 호주', url: 'https://rpca.org.au/' },
      { name: 'RPCNA 일본 노회 · 일본', url: 'https://rpjapan.org/' },
    ],
  },
  {
    title: '신학교',
    links: [
      { name: 'RPTS · 미국', url: 'https://www.rpts.edu/', desc: '개혁장로교 신학교' },
      { name: 'Reformed Theological College · 아일랜드 벨파스트', url: 'https://www.rpc.org/theological-college/' },
      { name: '神戸神学館 (Kobe Theological Hall) · 일본 고베', url: 'https://church.ne.jp/kth/', desc: 'RPCNA 일본 노회 신학교' },
    ],
  },
  {
    title: '선교',
    links: [
      { name: 'RP Global Missions', url: 'https://www.rpglobalmissions.org/' },
      { name: 'RP Short Term Missions', url: 'https://rpmissions.org/' },
    ],
  },
  {
    title: '예배 · 출판',
    links: [
      { name: 'Crown & Covenant Publications', url: 'https://crownandcovenant.com/', desc: 'RP 교단 출판사' },
      { name: 'The Book of Psalms for Worship', url: 'https://crownandcovenant.com/collections/the-book-of-psalms-for-worship', desc: '공예배용 시편찬송집' },
    ],
  },
];
