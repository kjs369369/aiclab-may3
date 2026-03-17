import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "입력 오류",
        description: "모든 필드를 입력해주세요.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // In a real application, this would send the message to a backend API
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "메시지 전송 완료",
        description: "메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "전송 실패",
        description: "메시지 전송에 실패했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-phone",
      title: "전화",
      value: "010-8921-9536"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "주소",
      value: "서울특별시 서초구 서초중앙로2길 35 (서초동) L103호"
    },
    {
      icon: "fas fa-briefcase",
      title: "전문분야",
      value: "AI 콘텐츠 & 브랜드 컨설팅"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-linkedin", href: "#" },
    { icon: "fab fa-github", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fas fa-blog", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-navy-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            연락하기
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            AI 교육, 브랜드 컨설팅, 아트 크리에이터 관련 문의사항이나 협업 제안이 있으시다면 언제든 연락주세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-6 bg-navy-800 rounded-xl border border-navy-700"
                  data-testid={`contact-info-${index}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <i className={`${info.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400">{info.title}</h3>
                    <p className="text-slate-300">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">소셜 미디어</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-navy-800 border border-navy-700 rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                    data-testid={`social-link-${index}`}
                  >
                    <i className={`${social.icon} text-blue-400 text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-navy-800 p-8 rounded-xl border border-navy-700">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">메시지 보내기</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  이름
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-slate-100 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="성함을 입력해주세요"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  이메일
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-slate-100 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="이메일 주소를 입력해주세요"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  제목
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-slate-100 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="문의 제목을 입력해주세요"
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  메시지
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-slate-100 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  placeholder="상세한 문의사항을 입력해주세요"
                  data-testid="textarea-message"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                data-testid="button-submit"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                {isSubmitting ? '전송 중...' : '메시지 전송'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
