"use client";
import Image from "next/image";
import heroImage from "../../public/Rectangle.png";
import RegisterTeamCard from "./hero-components/RegisterTeamCard";
import TeamRegistrationDialog from "./hero-components/Registration_dialog_box";
import { useState } from "react";
import { BackgroundPatterns } from "./hero-components/background-patterns";
import RightSvg from "./hero-components/Right-svg";
import Footer from "./footer";
import { motion } from "framer-motion";

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // ✅ Change in Line 21: Set loading to true before API call

    try {
      const res = await fetch("/api/save-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Email saved successfully!");
        setEmail(""); // ✅ Change in Line 35: `setemail` → `setEmail`
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch {
      alert("Network error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative overflow-hidden pb-1">
      {/* Background Patterns */}
      <BackgroundPatterns />

      <div className="mx-auto relative px-4 sm:px-6 lg:px-8 pt-20 md:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center px-4 sm:px-6 lg:px-20">
          {/* Left Column */}
          <div className="space-y-8 text-center lg:text-left pl-8">
            <div className="mb-6">
              <h2 className="text-lg sm:text-xl mb-2">Coming Soon</h2>
              <div className="w-full max-w-[150px] sm:max-w-[150px] md:max-w-[150px] lg:max-w-[150px] h-2 bg-[#ffd98d] rounded-full overflow-hidden mx-auto lg:mx-0">
                <motion.div
                  className="h-full bg-[#e69a00]"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear",
                  }}
                  style={{
                    width: "100%",
                  }}
                />
              </div>

              {/* <div className="w-12 h-1 bg-[#F7A800] mx-auto lg:mx-0"></div> */}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-text leading-tight mb-6">
              Get Notified
              <br />
              When we Launch
            </h1>

            <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 animate-slide-up [animation-delay:0.3s]">
              Get ready to elevate your career at HYVE! Connect with exciting
              gigs, build teams, and form meaningful connections to create great
              projects and get paid more. Join us soon and shape the future
              together!
            </p>

            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center lg:justify-start">
              {/* Subscription Form */}
              <div className="bg-white/50 w-full sm:w-[300px] backdrop-blur-sm p-4 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg mb-3 text-text-secondary">
                  Subscribe for Early Access!
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-2"
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)} // ✅ Change in Line 84: `setemail` → `setEmail`
                    type="email"
                    value={email} // ✅ Change: Controlled input field
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                  <button
                    type="submit"
                    disabled={loading} // ✅ Change: Prevent multiple submissions
                    className="w-full py-2.5 bg-primary hover:bg-[#e69a00] text-white rounded-xl flex items-center justify-center transition-colors"
                  >
                    {loading ? "Submitting..." : "Subscribe"}
                  </button>
                </form>
              </div>

              <div>
                <TeamRegistrationDialog
                  iisOpen={isDialogOpen} // ✅ Change in Line 103: `iisOpen` → `isOpen`
                  onClose={() => setIsDialogOpen(false)}
                />
              </div>

              <div className="max-w-[334px] w-full mr-0">
                <RegisterTeamCard onOpen={() => setIsDialogOpen(true)} />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative hidden lg:flex justify-center animate-fade-in [animation-delay:0.5s] translate-x-[80px]">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              <RightSvg />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
