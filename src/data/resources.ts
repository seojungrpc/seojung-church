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

// RP 계열 및 참고 사이트 모음. 자유롭게 추가/수정하세요.
export const resourceGroups: ResourceGroup[] = [
  {
    title: '교단 · 기관',
    links: [
      { name: 'RPCNA (북미개혁장로교단)', url: 'https://www.reformedpresbyterian.org/', desc: '우리가 속한 교단' },
      { name: 'RPTS (개혁장로교 신학교)', url: 'https://www.rpts.edu/' },
      { name: 'Geneva College', url: 'https://www.geneva.edu/' },
      { name: 'RP Home', url: 'https://rphome.org/' },
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
  {
    title: '참고 교회 (레퍼런스)',
    links: [
      { name: 'Providence RPC', url: 'https://www.providencerpchurch.com/' },
      { name: 'Las Vegas RPC', url: 'https://lvrpcna.com/' },
    ],
  },
  {
    title: '국내 개혁·장로 자료',
    note: '국내 관련 링크는 확정되는 대로 채워 넣으세요.',
    links: [],
  },
];
