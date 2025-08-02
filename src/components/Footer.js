import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-3">📬 Contact</h4>
          <p className="text-sm text-gray-400">📍 Faisalabad, Punjab, Pakistan</p>
          <p className="text-sm text-gray-400 break-words hover:text-white transition duration-300">
            <a href="mailto:muhammadabuhurairah22@gmail.com"> ✉️ muhammadabuhurairah22@gmail.com</a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">⚡ Quick Links</h4>
          <ul className="text-sm space-y-2">
            {[
              { name: "About Me", href: "/about" },
              { name: "Contact Me", href: "/message" },
              // { name: "Blog", href: "/blog" },
              { name: "FAQs", href: "/faqs" },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-3">🌐 Social Media</h4>
          <div className="flex space-x-5 text-2xl text-gray-400">
            <a
              href="https://x.com/HurairahAb73769"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white transition duration-300"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://github.com/ITZ-HURAIRAH18
"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition duration-300"
            >
              <i className="fab fa-github" />
            </a>
            
<a
  href="https://www.linkedin.com/in/muhammad-abu-hurairah-988ba1303/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="hover:text-white transition duration-300"
>
  <i className="fab fa-linkedin" />
</a>
          </div>
        </div>

        {/* About Site */}
        <div>
          <h4 className="text-xl font-semibold mb-3">💻 About This Site</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            A showcase of my passion in full-stack development, UI/UX, and AI.
            <br />
            Built with <span className="text-red-400">❤️</span> using <strong>React</strong> & <strong>Tailwind CSS</strong>.
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} <span className="font-medium text-white">Muhammad Abu Hurairah</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
