import Link from "next/link";
import { FaFacebook, FaGoogle, FaGithub, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-black">
      {/* Social Icons */}
      <div className="text-center p-6 border-t border-gray-950 bg-gradient-to-r from-[#A2C3E0] to-[#489CDF]">
        <div className="flex justify-center space-x-6">
          <Link
            href="#"
            className="hover:text-blue-500 hover:scale-125 transition-transform duration-200"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="#"
            className="hover:text-red-500 hover:scale-125 transition-transform duration-200"
          >
            <FaGoogle size={24} />
          </Link>
          <Link
            href="#"
            className="hover:text-pink-500 hover:scale-125 transition-transform duration-200"
          >
            <FaTiktok size={24} />
          </Link>
          <Link
            href="#"
            className="hover:text-gray-400 hover:scale-125 transition-transform duration-200"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 px-5 border-t border-gray-900 bg-gradient-to-r from-[#A2C3E0] to-[#489CDF]">
        {/* Logo + Description */}
        <div>
          <h5 className="text-2xl">Sun Solutions Co.</h5>
          <p className="mt-2">
            Φυσική ενέργεια, φυσική επιλογή. Ηλιακοί θερμοσίφωνες με υπογραφή
            ποιότητας.
          </p>
        </div>

        {/* Products + Contact */}
        <div className="grid grid-cols-2 gap-8">
          {/* Products */}
          <div>
            <h5 className="font-mono">ΠΡΟΙΟΝΤΑ</h5>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href="/eurostar"
                  className="hover:text-orange-400 underline"
                >
                  Eurostar
                </Link>
              </li>
              <li>
                <Link href="/fino" className="hover:text-orange-400 underline">
                  Fino
                </Link>
              </li>
              <li>
                <Link href="/eco" className="hover:text-orange-400 underline">
                  Eco
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-lg">ΕΠΙΚΟΙΝΩΝΙΑ</h5>
            <ul className="mt-2 space-y-1">
              <li className="hover:text-orange-400">
                📍 Athens, Fedriadon 120, 113 64
              </li>
              <li>
                <Link
                  href="mailto:info@sunsolutions.gr"
                  className="hover:text-orange-400"
                >
                  ✉️ info@sunsolutions.gr
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+306932462414"
                  className="hover:text-orange-400"
                >
                  📞 +30 693 246 2414
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="flex justify-center border-t border-gray-900 bg-gradient-to-r from-[#A2C3E0] to-[#489CDF]">
        &copy; 2025 Copyrights
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center text-sm  p-2 space-y-1 md:space-y-0 md:space-x-4 bg-gradient-to-r from-[#A2C3E0] to-[#489CDF]">
        <Link href="/terms&conditions">
          <span className="underline hover:text-orange-400 transition-colors">
            Terms and Conditions
          </span>
        </Link>
        <Link href="/cookiepolicy">
          <span className="underline hover:text-orange-400 transition-colors">
            Cookie Policy
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
