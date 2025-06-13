
// next.js의 기능
// 1. 자동 라우트 : 페이지 이동시 주소를 매핑하는 기능

export default function Home() {
  return (
    <div>
      <h1>/app/page.js</h1>
      <ul>
        <li><a href="/sub">/app/sub/page.js</a></li>
        <li><a href="/sub/about">/app/sub/about/page.js</a></li>
        {/* sub 상세 페이지로 이동하는 링크 추가 */}
        {/* /sub/1 과 /sub/2를 id라는 하나의 파일로 정리 */}
        {/* 중간에 id라는 경로를 []괄호로 감싸기 */}
        <li><a href="/sub/1">/app/sub/[id]/page</a></li>
        <li><a href="/sub/2">/app/sub/[id]/page</a></li>
        <li><a href="/fetch">/aoo/sub/fetch/page.js  </a></li>
      </ul>
    </div>
  );
}
