
import { Camera, MessageCircle, Video, Globe } from 'lucide-react';
import logo from '../../assets/GenBrightSchoolLogo.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand & Socials */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <img src={logo} alt="GenBright World School Logo" className="h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            </div>
            <p className="text-sm text-gray-500 mb-6">
              A school where childhood stays alive and learning stays joyful.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Camera size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Video size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Our Learning</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Campus</a></li>
            </ul>
          </div>

          {/* Admissions Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 invisible">More Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Admissions</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Life at GenBright</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Admissions Team</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-center"><span className="mr-2">📞</span> 880 433 5253</li>
              <li className="flex items-center"><span className="mr-2">✉️</span> admissions@genbright.in</li>
              <li className="flex items-center"><span className="mr-2">✉️</span> office@genbright.in</li>
              <li className="flex items-center"><span className="mr-2">🌐</span> www.genbright.in</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                GenBright World School,<br/>
                Mokila, Hyderabad,<br/>
                Telangana - 500 019
              </p>
              <button className="mt-4 text-sm font-medium text-gray-900 hover:underline inline-flex items-center">
                Book a Campus Tour <span className="ml-1">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
