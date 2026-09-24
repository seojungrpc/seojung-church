// 유튜브 영상 주소/ID에서 11자리 영상 ID를 추출합니다.
export function youtubeId(input?: string | null): string | null {
  if (!input) return null;
  const url = input.trim();
  const m = url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([A-Za-z0-9_-]{11})/);
  if (m) return m[1];
  if (/^[A-Za-z0-9_-]{11}$/.test(url)) return url;
  return null;
}
