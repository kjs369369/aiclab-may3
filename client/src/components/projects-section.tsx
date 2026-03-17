import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI 교육 프로그램",
      description: "대학, 공공기관, 기업 대상 맞춤형 AI 리터러시 교육 과정 개발 및 운영",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["GPT", "교육설계", "워크숍"],
      techColor: "blue"
    },
    {
      title: "AI 아트 전시회",
      description: "생성형 AI를 활용한 창작 작품 전시 기획 및 아트 크리에이터 양성 프로그램",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["DALL-E", "Midjourney", "전시기획"],
      techColor: "purple"
    },
    {
      title: "맞춤형 GPTs 개발",
      description: "기업 및 개인 맞춤형 GPT 모델 개발 및 프롬프트 엔지니어링 컨설팅",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["OpenAI", "프롬프트", "커스터마이징"],
      techColor: "green"
    },
    {
      title: "AI 웹툰 제작",
      description: "AI 도구를 활용한 웹툰 창작 및 스토리텔링 프로젝트",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["ComicAI", "스토리보드", "캐릭터디자인"],
      techColor: "orange"
    },
    {
      title: "브랜드 컨설팅",
      description: "마음과 비전 기반 개인 브랜드 전략 수립 및 디지털 마케팅 컨설팅",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["브랜딩", "마케팅전략", "비전코칭"],
      techColor: "yellow"
    },
    {
      title: "AI 영상 제작",
      description: "AI 기반 영상 콘텐츠 제작 및 하남 AI 뮤직 무비 영화제 운영위원 활동",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["AI영상", "영화제기획", "콘텐츠제작"],
      techColor: "red"
    }
  ];

  const getTechColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500/20 text-blue-300",
      purple: "bg-purple-500/20 text-purple-300", 
      green: "bg-green-500/20 text-green-300",
      orange: "bg-orange-500/20 text-orange-300",
      yellow: "bg-yellow-500/20 text-yellow-300",
      red: "bg-red-500/20 text-red-300"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-blue-500/20 text-blue-300";
  };

  const handleViewProject = (projectTitle: string) => {
    console.log(`View project: ${projectTitle}`);
  };

  const handleViewCode = (projectTitle: string) => {
    console.log(`View code for: ${projectTitle}`);
  };

  const handleViewAllProjects = () => {
    console.log('View all projects');
  };

  return (
    <section id="projects" className="py-20 px-6 bg-navy-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            주요 프로젝트
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            AI 교육, 창작, 컨설팅 분야에서 진행한 대표적인 프로젝트들을 소개합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-navy-800 rounded-xl border border-navy-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
              data-testid={`project-card-${index}`}
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`project-image-${index}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full ${getTechColorClasses(project.techColor)}`}
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => handleViewProject(project.title)}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    data-testid={`button-view-project-${index}`}
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>자세히 보기
                  </button>
                  <button 
                    onClick={() => handleViewCode(project.title)}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                    data-testid={`button-view-code-${index}`}
                  >
                    <i className="fab fa-github mr-2"></i>코드
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={handleViewAllProjects}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105"
            data-testid="button-view-all-projects"
          >
            <i className="fas fa-folder-open mr-2"></i>
            모든 프로젝트 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
