export default function AboutSection() {
  const expertiseAreas = [
    {
      icon: "fas fa-graduation-cap",
      title: "AI 교육 & 강의",
      description: "대학, 공공기관, 기업 대상 AI 리터러시 교육"
    },
    {
      icon: "fas fa-palette", 
      title: "AI 아트 & 콘텐츠",
      description: "AI 아트, 웹툰, 영상 제작 및 전시 기획"
    },
    {
      icon: "fas fa-heart",
      title: "브랜드 컨설팅", 
      description: "마음과 비전 기반 개인 브랜드 전략 컨설팅"
    }
  ];

  const experiences = [
    {
      title: "AI컨텐츠융합연구소장",
      company: "메이랜드AI비즈랩 대표 (현재)",
      description: "AI 콘텐츠 제작 도구 연구 및 크리에이터 양성 프로그램 운영"
    },
    {
      title: "디지털융합교육원 지도교수",
      company: "숙명여대 미래교육원 소속강사 (현재)",
      description: "AI 리터러시 교육 및 디지털 융합 교육 프로그램 개발"
    },
    {
      title: "한국AI리터러시강사협회 부회장",
      company: "APL프롬프트연구소 책임연구원 (현재)",
      description: "맞춤형 GPTs 개발 연구 및 생성AI 프롬프트 전문가 활동"
    }
  ];

  const stats = [
    { value: "10+", label: "전문 자격증" },
    { value: "3회", label: "수상 경력" },
    { value: "다수", label: "AI 아트 전시" },
    { value: "Google", label: "공인 교육 전문가" }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            소개
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            AI 콘텐츠 융합 연구와 교육을 통해 디지털 시대의 창의적 미래를 만들어가는 전문가입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-400">전문 분야</h3>
              <div className="space-y-4">
                {expertiseAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="bg-navy-800 p-6 rounded-xl border border-navy-700 hover:border-blue-500/50 transition-all duration-300"
                    data-testid={`expertise-card-${index}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <i className={`${area.icon} text-white text-xl`}></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">{area.title}</h4>
                        <p className="text-slate-400">{area.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-navy-800 p-8 rounded-xl border border-navy-700">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">경력 하이라이트</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-6" data-testid={`experience-${index}`}>
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <p className="text-slate-400">{exp.company}</p>
                    <p className="text-sm text-slate-500 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-8 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4">성과 지표</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center" data-testid={`stat-${index}`}>
                    <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
