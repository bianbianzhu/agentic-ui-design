export default function Footer() {
  const socialLinks = ["LINKEDIN", "TWITTER", "FACEBOOK", "YOUTUBE"];
  const companyLinks = ["ABOUT US", "CAREERS", "BLOG", "CONTACT"];
  const legalLinks = ["PRIVACY POLICY", "TERMS OF SERVICE", "ACCESSIBILITY"];

  return (
    <footer className="bg-black text-white px-[3.3vw] py-16">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-normal hover:opacity-70 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {companyLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-normal hover:opacity-70 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-normal hover:opacity-70 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 gap-4">
          <div className="text-xs opacity-70">
            ©2025 EduFlow. All rights reserved.
          </div>
          <div className="text-xs font-normal">EN ES FR</div>
        </div>
      </div>
    </footer>
  );
}
