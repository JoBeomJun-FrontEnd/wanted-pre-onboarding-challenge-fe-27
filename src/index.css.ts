import { globalFontFace, globalStyle } from '@vanilla-extract/css';

const Pretendard = 'PretendardVariable';

globalFontFace('PretendardVariable', {
  src: `local('PretendardVariable'), url('/fonts/PretendardVariable.woff2') format('woff2-variations')`,
  fontWeight: '45 920',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalStyle('*', {
  fontFamily: Pretendard,
});

globalStyle('h1', {
  fontSize: '2.5em',
  marginBottom: '1em',
});

globalStyle('a', {
  color: '#0070f3', // 링크 색상
  textDecoration: 'none', // 밑줄 제거
});

globalStyle('a:hover', {
  textDecoration: 'underline', // 마우스 오버 시 밑줄 추가
});
