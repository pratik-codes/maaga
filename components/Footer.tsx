import React from 'react';
import { useData } from '../context/DataContext';
import { transformSocialLinks } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { data } = useData();
  const NAV_LINKS = data?.navLinks || [];
  const SOCIAL_LINKS = transformSocialLinks(data?.socialLinks || []);
  const COMPANY_INFO = data?.companyInfo || { name: 'MAAGA', tagline: '', email: '', locations: [] };
  const FOOTER = data?.footer || { taglineExtended: '', exploreTitle: 'Explore', contactTitle: 'Contact' };

  return (
    <footer className="bg-white text-maaga-navy pt-16 md:pt-20 pb-8 md:pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 pr-0 md:pr-8">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 md:w-12 h-10 md:h-12">
                    <Logo className="w-full h-full" />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="font-serif font-bold text-lg md:text-xl text-maaga-navy leading-none">
                        {COMPANY_INFO.name} <span className="text-base md:text-lg">Ltd</span>
                    </span>
                    <span className="text-[0.65rem] md:text-[0.7rem] tracking-wide text-maaga-blue font-medium">
                        <span className="font-semibold">M</span>anaging <span className="font-semibold">A</span>ssets & <span className="font-semibold">G</span>lobal <span className="font-semibold">A</span>ccounting
                    </span>
                </div>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed font-light mb-6 md:mb-8 text-sm md:text-base">
                {COMPANY_INFO.tagline} for the UK and US. <br/>
                {FOOTER.taglineExtended}
            </p>
            <div className="flex gap-3 md:gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.platform} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    <Icon size={16} color={social.color} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif font-bold text-base md:text-lg mb-4 md:mb-6">{FOOTER.exploreTitle}</h4>
            <ul className="space-y-2 md:space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 hover:text-maaga-blue transition-colors text-sm md:text-base">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-base md:text-lg mb-4 md:mb-6">{FOOTER.contactTitle}</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-500 text-sm md:text-base">
              <li><a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-maaga-blue transition-colors">{COMPANY_INFO.email}</a></li>
              {COMPANY_INFO.locations.map((location, index) => (
                <li key={index} className={index === 0 ? "mt-4 pt-4 border-t border-gray-100" : ""}>{location}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs uppercase tracking-wider">
                &copy; {new Date().getFullYear()} MAAGA LTD.
            </p>
            <div className="flex gap-6 text-xs text-gray-400 uppercase tracking-wider">
                <a href="#" className="hover:text-maaga-navy transition-colors">Privacy</a>
                <a href="#" className="hover:text-maaga-navy transition-colors">Terms</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
