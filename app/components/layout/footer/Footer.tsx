import Link from "next/link";
import { footerLinks, socialLinks } from "./data";
import { Instagram, Twitter, MessageCircle, Linkedin, Play, CreditCard, User, BookOpen, FileText, Shield, Code, Newspaper, PhoneCall, ArrowLeft, Headphones } from "lucide-react";

export default function Footer() {
  const iconMap = {
    Instagram,
    Twitter,
    MessageCircle,
    Linkedin,
    Play,
    CreditCard,
    User,
    BookOpen,
    FileText,
    Shield,
    Code,
    Newspaper,
    PhoneCall
  };

  const getIcon = (name: keyof typeof iconMap, className = "w-4 h-4 text-muted-foreground") => {
    const Icon = iconMap[name];
    return Icon ? <Icon className={className} /> : null;
  };
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name} className="flex items-center gap-2">
                    {getIcon(link.icon as keyof typeof iconMap)}
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">زرین‌پال در شبکه‌های اجتماعی</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} className="w-12 h-12 bg-card rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  {getIcon(social.icon as keyof typeof iconMap, "w-5 h-5")}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-right font-bold text-lg flex items-center gap-2">
            <Headphones size={18} />
            پشتیبانی ۲۴ ساعته، ۷ روز هفته | شماره تماس:
            <span className="text-primary mr-2">۰۲۱-۴۱۲۳۹</span>
          </p>

          <Link href="/support" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            درخواست پشتیبانی
            <ArrowLeft size={18} />
          </Link>
        </div>

        <div className="mt-8 pt-4 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mohamadhosein safaryan. All rights reserved. |
          <Link href="https://www.linkedin.com/in/mohamadhosein-safaryan-9a6737357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-primary hover:underline mx-1">
            LinkedIn
          </Link>
          |
          <Link href="https://github.com/MohamadHosein86-Dev/Zarinpal" className="text-primary hover:underline mx-1">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
