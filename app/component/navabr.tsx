import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

export default function Navbar() {
  return (
    <header className="bg-white border-b-2 border-[#F7A800] relative">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="HYVE Logo"
              width={40}
              height={40}
              className="rounded-none"
            />
            <span className="text-xl font-semibold text-black">HYVE</span>
          </div>

          <nav>
            <ul className="flex items-center gap-12">
              <li>
                <Link
                  href="#"
                  className="text-lg font-semibold text-black hover:text-[#F7A800] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg font-semibold text-black hover:text-[#F7A800] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg font-semibold text-black hover:text-[#F7A800] transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
