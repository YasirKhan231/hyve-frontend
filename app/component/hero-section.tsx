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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-4">
        <div className="grid lg:grid-cols-2 gap-11 items-center">
          {/* Left Column */}
          <div className="space-y-8 relative ">
            <div className="mb-6">
              <h2 className="text-xl mb-2">Coming Soon</h2>
              <div className="w-12 h-1 bg-[#F7A800]"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
              Get Notified
              <br />
              When we Launch
            </h1>

            <p className="text-text-secondary text-base sm:text-lg max-w-xl animate-slide-up [animation-delay:0.3s]">
              Get ready to elevate your career at HYVE! Connect with exciting
              gigs, build teams, and form meaningful connections to create great
              projects and get paid more. Join us soon and shape the future
              together!
            </p>
            <div className="flex gap-x-3">
              {/* Subscription Form */}
              <div className="bg-white/50 backdrop-blur-sm p-3 rounded-3xl  shadow-lg hover:shadow-xl transition-shadow">
                {/* Decorative Wave on Top */}
                {/* <div className="absolute left-0 right-0 -top-3">
                <svg viewBox="0 0 400 24" className="w-full">
                  <path
                    d="M0,24 C100,0 200,24 300,0 C400,24 500,0 600,24"
                    fill="white"
                  />
                </svg>
              </div> */}
                <h3 className="text-lg mb-3 text-text-secondary">
                  Subscribe for early access!!
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-x-3 "
                >
                  <input
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    type="email"
                    placeholder="Email Id"
                    className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary text-text font-medium rounded-xl transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
                {/* {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 mt-2"
                >
                  Thank you for subscribing!
                </motion.p>
              )} */}
              </div>

              <div>
                <TeamRegistrationDialog
                  iisOpen={isDialogOpen}
                  onClose={() => setIsDialogOpen(false)}
                />
              </div>
              <div>
                <RegisterTeamCard onOpen={() => setIsDialogOpen(true)} />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative lg:block animate-fade-in [animation-delay:0.5s] lg:ml-20">
            {/* Yellow Glow Behind the Hero Image */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <RightSvg />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
