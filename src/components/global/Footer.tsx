import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[rgba(59,130,246,0.03)] text-gray-200 px-4 inter py-10">
      <div className="px-20 mx-auto w-full ">
       
        <div className="flex flex-col md:flex-row items-center justify-between ">
          {/* Left Brand */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-white orbitron">
              SnapCoat CRM
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              © 2025 SnapCoat LLC
            </p>
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-8 text-sm text-gray-300">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Beta Feedback
            </a>
          </div>
        </div>
        {' '}
        {/* Bottom section with copyright and policies */}
   
      </div>
    </footer>
  );
};

export default Footer;
