import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="bg-cardlight py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="gold-line" />
          <span className="font-mono text-xs text-secundaria tracking-widest uppercase">
            Contact
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Lado esquerdo */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-extras font-bold leading-tight mb-6">
              Let's work
              <br />
              <span className="text-secundaria">together.</span>
            </h2>
            <p className="text-extras/60 text-lg leading-relaxed mb-10">
              I'm available for freelance projects — Power Platform automation,
              Java backend APIs, or full-stack systems. If you have a problem
              that needs a real solution, let's talk.
            </p>

            {/* Links de contato */}
            <div className="space-y-4">
              {[
                {
                  icon: <MdEmail size={20} />,
                  label: "manoelalmorais@gmail.com",
                  href: "mailto:manoelalmorais@gmail.com",
                },
                {
                  icon: <FaWhatsapp size={18} />,
                  label: "+55 79 99914-2918",
                  href: "https://wa.me/5579999142918",
                },
                {
                  icon: <FaLinkedin size={18} />,
                  label: "linkedin.com/in/manoel-almeida",
                  href: "https://www.linkedin.com/in/manoel-almeida-a90054267/",
                },
                {
                  icon: <FaGithub size={18} />,
                  label: "github.com/ManoelMorais",
                  href: "https://github.com/ManoelMorais",
                },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-extras/50 hover:text-secundaria transition-colors duration-300 group"
                >
                  <span className="w-10 h-10 rounded-lg bg-principal/60 border border-white/5 flex items-center justify-center group-hover:border-secundaria/30 transition-colors duration-300">
                    {icon}
                  </span>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-principal/60 border border-white/5 rounded-2xl p-8">
            <form
              action="https://formsubmit.co/manoelalmorais@gmail.com"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Portfolio contact" />

              <div>
                <label className="block text-xs font-mono text-muted tracking-widest uppercase mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-cardlight border border-white/10 rounded-lg px-4 py-3 text-extras text-sm focus:outline-none focus:border-secundaria/50 transition-colors placeholder-extras/20"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-muted tracking-widest uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-cardlight border border-white/10 rounded-lg px-4 py-3 text-extras text-sm focus:outline-none focus:border-secundaria/50 transition-colors placeholder-extras/20"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-muted tracking-widest uppercase mb-2">
                  What do you need?
                </label>
                <select
                  name="topic"
                  required
                  className="w-full bg-cardlight border border-white/10 rounded-lg px-4 py-3 text-extras text-sm focus:outline-none focus:border-secundaria/50 transition-colors"
                >
                  <option value="">Select one...</option>
                  <option value="Power Platform automation">Power Platform automation</option>
                  <option value="Backend Java API">Backend Java API</option>
                  <option value="Full stack system">Full stack system</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-muted tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-cardlight border border-white/10 rounded-lg px-4 py-3 text-extras text-sm focus:outline-none focus:border-secundaria/50 transition-colors resize-none placeholder-extras/20"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secundaria text-principal font-semibold py-3 rounded-lg hover:bg-secundaria/90 transition-all duration-300 hover:shadow-lg hover:shadow-secundaria/20 hover:-translate-y-0.5"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
