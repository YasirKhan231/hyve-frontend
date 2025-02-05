import Image from "next/image";
import facebook from "../../public/facebook.png";
import instgram from "../../public/instagram.png";
import linkdin from "../../public/linkdin.png";
export default function Footer() {
  return (
    <footer className="container mx-auto px-6 py-4 m-0">
      <div
        className="flex flex-col md:flex-row 
      justify-between items-start"
      >
        {/* Social Media Section */}
        <div className="flex flex-col items-end md:items-start md:mr-[10%]">
          {" "}
          {/* Adjusted with margin-right */}
          <p className="text-[15px] text-[#666666] mb-2 font-poppins">
            Follow us on:
          </p>
          <div className="flex items-center gap-6">
            {/* Social Media Icons with Images */}
            <a
              href="#"
              className="w-[40px] h-[40px] flex items-center justify-center text-[#666666] hover:text-white rounded-full transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Image
                src={linkdin}
                alt="LinkedIn"
                className="w-[30px] h-[30px]"
              />
            </a>
            <a
              href="#"
              className="w-[40px] h-[40px] flex items-center justify-center text-[#666666] hover:text-white rounded-full transition-all duration-300"
              aria-label="Instagram"
            >
              <Image
                src={instgram}
                alt="Instagram"
                className="w-[30px] h-[30px]"
              />
            </a>
            <a
              href="#"
              className="w-[40px] h-[40px] flex items-center justify-center text-[#666666]  hover:text-white rounded-full transition-all duration-300"
              aria-label="Facebook"
            >
              <Image
                src={facebook}
                alt="Facebook"
                className="w-[30px] h-[30px]"
              />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <p className="text-[15px] text-[#666666] mb-2 font-poppins">
            Mail us at:
          </p>
          <a
            href="mailto:team@hyvework.com"
            className="text-[15px] text-[#666666] font-bold hover:opacity-80 transition-opacity font-poppins"
          >
            team@hyvework.com
          </a>
        </div>
      </div>
    </footer>
  );
}
