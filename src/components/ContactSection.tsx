import { useState, type FormEvent } from "react";
import { Mail, Phone, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { submitCounsel } from "../api/counsels";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", counselHp: "", counselMemo: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.counselHp || !formData.counselMemo) return;

    setStatus("sending");

    try {
      await submitCounsel(formData);
      setStatus("sent");
      setFormData({ name: "", counselHp: "", counselMemo: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 max-w-7xl mx-auto px-6">
      <div className="rounded-[3rem] glass p-12 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2" />

          <div className="grid md:grid-cols-2 gap-20 relative z-10 items-stretch">
          <div>
            <SectionHeading
              title="Contact"
              subtitle="Let’s build great products together."
              icon={Send}
            />
            <p className="text-white/60 text-lg mb-12">
              React와 Node.js(NestJS) 기반으로 웹 서비스와 SaaS 플랫폼을 개발해 왔습니다.
              <br/>
              <br/>
              CRM 관리자 시스템, RBAC 권한 관리, Multi-Tenant 구조 등
              확장성을 고려한 백엔드 시스템 개발 경험이 있습니다.
              <br/>
              <br/>
              좋은 팀에서 의미 있는 서비스를 만들고 함께 성장하고 싶습니다.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
                    Email
                  </p>
                  <p className="text-lg">seongmin000211@naver.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
                    Phone
                  </p>
                  <p className="text-lg">010-8586-6968</p>
                </div>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-6 h-full" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-phone"
                  className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1"
                >
                  Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={formData.counselHp}
                  onChange={(e) => setFormData((prev) => ({ ...prev, counselHp: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  placeholder="010-0000-0000"
                />
              </div>
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <label
                htmlFor="contact-message"
                className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                value={formData.counselMemo}
                onChange={(e) => setFormData((prev) => ({ ...prev, counselMemo: e.target.value }))}
                className="flex-1 w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-5 rounded-2xl bg-white text-black font-bold hover:bg-accent transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "전송 완료!"
                  : status === "error"
                    ? "전송 실패. 다시 시도해주세요."
                    : "Send Message"}
              {status === "idle" && (
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
