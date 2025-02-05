// import heroImage from "../assets/Rectangle.png";
import RegisterTeamCard from "./hero-components/RegisterTeamCard";

export default function Hero() {
  return (
    <main className="container mx-auto px-6 py-16 relative m-0">
      {/* Background Patterns */}
      <div className="absolute inset-0 z-0">
        {/* Yellow Ellipse Background */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F7A800] rounded-full opacity-30 blur-3xl"
          style={{ transform: "translateX(-60px) translateY(-50%)" }}
        ></div>

        {/* Yellow Glow Above the Hero Image */}
        <div className="absolute right-0 top-[10%] w-[500px] h-[300px] bg-[#F7A800] rounded-full opacity-20 blur-2xl"></div>

        {/* Circular Patterns - Left Top */}
        <div className="absolute -left-25 -top-0 w-[200px] h-[200px] opacity-30">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Circular Patterns - Right Top */}
        <div className="absolute -right-36 -top-25 w-[200px] h-[200px] opacity-30">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        <div className="absolute right-99 top-20 w-[200px] h-[200px] opacity-30">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Circular Patterns - Right Bottom */}
        <div className="absolute -right-22 bottom-0 w-[200px] h-[200px] opacity-30">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full transform rotate-90"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Additional Circular Pattern - Right Middle */}
        <div className="absolute right-1/4 top-1/3 w-[150px] h-[150px] opacity-30">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              stroke="#F7A800"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column */}
        <div>
          <div className="mb-6">
            <h2 className="text-xl mb-2">Coming Soon</h2>
            <div className="w-12 h-1 bg-[#F7A800]"></div>
          </div>

          <h1 className="text-[3.5rem] font-bold leading-[1.1] mb-6">
            Get Notified
            <br />
            When we Launch
          </h1>

          <p className="text-gray-600 mb-12 text-lg leading-relaxed max-w-lg">
            Get ready to elevate your career at HYVE! Connect with exciting
            gigs, build teams, and form meaningful connections to create great
            projects and get paid more. Join us soon and shape the future
            together!
          </p>

          {/* Subscription Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md relative">
            {/* Decorative Wave on Top */}
            <div className="absolute left-0 right-0 -top-3">
              <svg viewBox="0 0 400 24" className="w-full">
                <path
                  d="M0,24 C100,0 200,24 300,0 C400,24 500,0 600,24"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-4">
              Subscribe for early access!!
            </h3>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Email Id"
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7A800] text-gray-800 placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#F7A800] text-white rounded-md hover:bg-[#e69a00] transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Vertical Stack of Small Triangles */}
            <div className="flex flex-col gap-4">
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                className="opacity-30"
              >
                <path d="M10 0L20 20H0L10 0Z" fill="#808080" />
              </svg>
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                className="opacity-30"
              >
                <path d="M10 0L20 20H0L10 0Z" fill="#808080" />
              </svg>
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                className="opacity-30"
              >
                <path d="M10 0L20 20H0L10 0Z" fill="#808080" />
              </svg>
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                className="opacity-30"
              >
                <path d="M10 0L20 20H0L10 0Z" fill="#808080" />
              </svg>
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-4 ml-24 justify-center left-36">
            <svg
              width="12"
              height="12"
              viewBox="0 0 20 20"
              className="opacity-30"
            >
              <path
                d="M10 0L20 20H0L10 0Z"
                fill="#F7A800"
                transform="rotate(90,10,10)"
              />
            </svg>
            <svg
              width="12"
              height="12"
              viewBox="0 0 20 20"
              className="opacity-30"
            >
              <path
                d="M10 0L20 20H0L10 0Z"
                fill="#F7A800"
                transform="rotate(90,10,10)"
              />
            </svg>
            <svg
              width="12"
              height="12"
              viewBox="0 0 20 20"
              className="opacity-30"
            >
              <path
                d="M10 0L20 20H0L10 0Z"
                fill="#F7A800"
                transform="rotate(90,10,10)"
              />
            </svg>
            <svg
              width="12"
              height="12"
              viewBox="0 0 20 20"
              className="opacity-30"
            >
              <path
                d="M10 0L20 20H0L10 0Z"
                fill="#F7A800"
                transform="rotate(90,10,10)"
              />
            </svg>
          </div>

          <RegisterTeamCard />
        </div>

        {/* Right Column */}
        <div className="relative top-[-94px]">
          {/* Yellow Glow Behind the Hero Image */}
          <div className="absolute right-30 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F4C24D] rounded-full opacity-80"></div>

          {/* Hero Image */}
          <div className="relative z-10">
            <img
              src={heroImage}
              alt="Illustration of person working"
              width={600}
              height={600}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
