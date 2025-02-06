"use client";
import Image from "next/image";
import heroImage from "../../public/Rectangle.png";
import RegisterTeamCard from "./hero-components/RegisterTeamCard";
import TeamRegistrationDialog from "./hero-components/Registration_dialog_box";
import { useState } from "react";
import { BackgroundPatterns } from "./hero-components/background-patterns";
import { div } from "framer-motion/client";
import RightSvg from "./hero-components/Right-svg";
import Footer from "./footer";

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setemail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        setemail(""); // Clear input field
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
    <main className="relative overflow-hidden">
      {/* Background Patterns */}
      <BackgroundPatterns />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 items-center px-4 sm:px-6 lg:px-20">
          {/* Left Column */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="mb-6">
              <h2 className="text-lg sm:text-xl mb-2">Coming Soon</h2>
              <div className="w-12 h-1 bg-[#F7A800] mx-auto lg:mx-0"></div>
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

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
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
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-primary hover:bg-[#e69a00] text-black rounded-xl flex items-center justify-center transition-colors font-medium"
                  >
                    {loading ? "Submitting..." : "Subscribe"}
                  </button>
                </form>
              </div>

              <div>
                <TeamRegistrationDialog
                  iisOpen={isDialogOpen}
                  onClose={() => setIsDialogOpen(false)}
                />
              </div>

              <RegisterTeamCard onOpen={() => setIsDialogOpen(true)} />
            </div>
          </div>

          {/* Right Column */}
          <div className="relative hidden lg:flex justify-center animate-fade-in [animation-delay:0.5s] ml-32">
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
