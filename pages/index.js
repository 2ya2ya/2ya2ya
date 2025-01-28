export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">반응형 웹 디자인</h1>
        <p className="mt-4 text-lg">이곳에 주요 콘텐츠를 배치하세요.</p>
      </div>

      {/* 하단 메뉴바 */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 bg-opacity-80">
        <nav className="flex justify-around py-2">
          <a href="#" className="text-white">홈</a>
          <a href="#" className="text-white">소개</a>
          <a href="#" className="text-white">연락처</a>
        </nav>
      </div>
    </div>
  );
}
