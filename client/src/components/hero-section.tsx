import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadResume = () => {
    // This would trigger resume download in a real implementation
    console.log('Download resume clicked');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h2 className="text-lg text-blue-400 font-medium">안녕하세요, 저는</h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="gradient-text animate-gradient">
                김진수 Kimjinsoo
              </span>
            </h1>
            <h3 className="text-xl md:text-2xl text-slate-300 font-semibold mb-2">
              AI 콘텐츠 전문가 & 크리에이터
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg mb-2">
              AI 콘텐츠로 연결된 브랜드의 미래를 설계합니다.
            </p>
            <p className="text-base text-slate-400 leading-relaxed max-w-lg">
              AI 강의, 브랜드 컨설팅, 콘텐츠 창작을 통해 디지털 시대의 자립과 성장을 지원합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button 
              onClick={() => console.log('AI 클래스 페이지로 이동')}
              className="px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              data-testid="button-ai-class"
            >
              <i className="fas fa-graduation-cap mr-2"></i>
              AI 클래스
            </Button>
            <Button 
              onClick={() => console.log('마음과 비전 컨설팅 페이지로 이동')}
              className="px-6 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              data-testid="button-consulting"
            >
              <i className="fas fa-heart mr-2"></i>
              마음과 비전 컨설팅
            </Button>
            <Button 
              onClick={() => console.log('아트 크리에이터 페이지로 이동')}
              className="px-6 py-4 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
              data-testid="button-art-creator"
            >
              <i className="fas fa-palette mr-2"></i>
              아트 크리에이터
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-slate-400 space-y-1">
            <p><i className="fas fa-lightbulb mr-2 text-blue-400"></i>AI 클래스 → 실전 AI 강의 및 워크숍 신청</p>
            <p><i className="fas fa-lightbulb mr-2 text-purple-400"></i>마음과 비전 컨설팅 → 1:1 브랜드 코칭</p>
            <p><i className="fas fa-lightbulb mr-2 text-pink-400"></i>아트 크리에이터 → 시화집·AI 작품·전시 안내</p>
          </div>

          <div className="flex space-x-6 pt-4">
            <a href="#" className="text-2xl text-slate-400 hover:text-blue-400 transition-colors duration-300" data-testid="social-linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-2xl text-slate-400 hover:text-blue-400 transition-colors duration-300" data-testid="social-github">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-2xl text-slate-400 hover:text-blue-400 transition-colors duration-300" data-testid="social-twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-2xl text-slate-400 hover:text-blue-400 transition-colors duration-300" data-testid="social-blog">
              <i className="fas fa-blog"></i>
            </a>
          </div>
        </div>

        <div className="flex justify-center animate-fade-in">
          <div className="relative">
            <img 
              src="/attached_assets/KakaoTalk_20240728_041958357_01_1754742337191.jpg" 
              alt="김진수 프로필 사진" 
              className="w-80 h-80 rounded-full object-cover border-4 border-slate-700 shadow-2xl animate-float"
              data-testid="profile-image"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
