export default function Footer() {
  const socialLinks = [
    { icon: "fab fa-linkedin", href: "#" },
    { icon: "fab fa-github", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fas fa-blog", href: "#" }
  ];

  return (
    <footer className="py-12 px-6 border-t border-navy-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="text-2xl font-bold gradient-text">
            김진수 Kimjinsoo
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            AI 콘텐츠로 연결된 브랜드의 미래를 설계하는 크리에이터
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                data-testid={`footer-social-${index}`}
              >
                <i className={`${social.icon} text-xl`}></i>
              </a>
            ))}
          </div>
          <div className="text-sm text-slate-500 pt-6 border-t border-navy-700">
            © 2024 김진수 Kimjinsoo. All rights reserved. | Built with ❤️ and AI
          </div>
        </div>
      </div>
    </footer>
  );
}
