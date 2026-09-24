# 서정교회 웹사이트

Astro(정적) + Sveltia CMS(관리자) + Cloudflare Pages(무료 호스팅).
블루배너 · 골드 · 화이트 디자인.

## 새로 들어간 기능
- **메인 슬라이드**: 홈 상단 사진 슬라이드쇼. 관리자 화면 → 사진 → "메인 슬라이드"에서 사진 추가.
- **페이지별 사진**: 각 페이지의 상단 배너 사진과 하단 갤러리. 관리자 화면 → 사진 → "페이지별 사진".
- **리더십**: 소개 페이지에 서학량 목사 약력 + 사진(`public/images/pastor.jpg`).

## 로컬 미리보기
Node 18+ 필요.
```bash
npm install
npm run dev      # http://localhost:4321
```

## 배포 (Cloudflare Pages + GitHub)
1. 이 폴더를 GitHub 저장소에 push.
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → 저장소 선택.
3. 빌드 설정: Framework=Astro, Build command=`npm run build`, Output=`dist`.
4. 배포 후 나온 주소(또는 구매한 도메인)를 `astro.config.mjs`의 `site`에 넣고 다시 push.
5. 구매한 도메인 연결: Cloudflare Pages → Custom domains에서 도메인 추가(안내대로 DNS 설정).

## 관리자(/admin) 연결 — Sveltia CMS
`내주소/admin` 접속. GitHub 로그인용 OAuth를 한 번 붙입니다(무료).
1. GitHub → Settings → Developer settings → OAuth Apps → New OAuth App.
2. 공식 인증 Worker `sveltia/sveltia-cms-auth`를 Cloudflare Workers에 배포(해당 저장소 README 따라).
3. `public/admin/config.yml`에서 `repo`와 `base_url` 두 줄을 본인 값으로 수정.
4. push 후 `/admin`에서 설교·소식·사진·설정 편집. 저장 시 자동 배포.

## 사진 넣는 법 (관리자 화면)
- 홈 슬라이드: 사진 → 사진 관리 → 메인 슬라이드 → 항목 추가 → 사진 업로드(+캡션).
- 페이지 사진: 사진 → 페이지별 사진 → 해당 페이지 → 상단 배너/갤러리에 업로드.
- 업로드된 사진은 `public/images`에 저장되고 `/images/파일명`으로 연결됩니다.

## 처음 채울 값 (사이트 설정)
- 주소·연락처 / 유튜브 채널 ID(라이브 자동연결) / 인스타그램 / 구글지도 임베드 URL.
