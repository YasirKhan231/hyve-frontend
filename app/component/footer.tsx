import { Facebook, InstagramIcon, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="animate-fade-in [animation-delay:0.6s]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {/* Social Media Section */}
          <div className="text-center md:text-left">
            <p className="text-text-secondary mb-2">Follow us on:</p>
            <div className="flex space-x-6 mt-2">
              {[
                { icon: Linkedin, href: "#" },
                { icon: InstagramIcon, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-text-secondary hover:cursor-pointer transition-all hover:scale-110 cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6 cursor-pointer" />
                </a>
              ))}
            </div>
          </div>

          {/* Email Section */}
          <div className="text-center md:text-right">
            <p className="text-text-secondary mb-2">Mail us at:</p>
            <a
              href="mailto:team@hyvework.com"
              className="text-text hover:text-primary transition-colors inline-block hover:scale-105 transform cursor-pointer"
            >
              team@hyvework.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
