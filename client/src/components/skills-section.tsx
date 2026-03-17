export default function SkillsSection() {
  const skillCategories = [
    {
      title: "AI 콘텐츠 & 교육",
      icon: "fas fa-graduation-cap",
      color: "from-blue-500 to-purple-600",
      textColor: "text-blue-400",
      skills: [
        { name: "GPT 프롬프트 엔지니어링", level: 95 },
        { name: "AI 리터러시 교육", level: 92 },
        { name: "맞춤형 GPTs 개발", level: 90 },
        { name: "디지털 융합 교육", level: 88 }
      ]
    },
    {
      title: "AI 아트 & 크리에이티브",
      icon: "fas fa-palette",
      color: "from-purple-500 to-pink-600", 
      textColor: "text-purple-400",
      skills: [
        { name: "AI 아트 창작", level: 95 },
        { name: "AI 웹툰 제작", level: 88 },
        { name: "AI 영상 제작", level: 85 },
        { name: "전시 기획", level: 90 }
      ]
    },
    {
      title: "브랜드 & 컨설팅",
      icon: "fas fa-heart",
      color: "from-green-500 to-teal-600",
      textColor: "text-green-400", 
      skills: [
        { name: "개인 브랜딩", level: 92 },
        { name: "비전 코칭", level: 88 },
        { name: "콘텐츠 전략", level: 85 },
        { name: "디지털 마케팅", level: 82 }
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            기술 스택
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            AI 교육, 창작, 컨설팅 분야의 전문 역량으로 개인과 기업의 성장을 지원합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-navy-800 p-8 rounded-xl border border-navy-700 hover:border-blue-500/50 transition-all duration-300"
              data-testid={`skill-category-${index}`}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${category.icon} text-white text-2xl`}></i>
                </div>
                <h3 className={`text-xl font-semibold ${category.textColor}`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between items-center" data-testid={`skill-${index}-${skillIndex}`}>
                    <span className="text-slate-300">{skill.name}</span>
                    <div className="w-24 bg-navy-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${category.color.replace('to-pink-600', 'to-purple-400').replace('to-teal-600', 'to-green-400').replace('to-purple-600', 'to-blue-400')} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
