import { div } from "framer-motion/client";

export function BackgroundPatterns() {
  return (
    <div className="absolute inset-0 z-0 mr-0 pr-0">
      {/* Yellow Ellipse Background */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F7A800] rounded-full opacity-30 blur-3xl"
        style={{ transform: "translateX(0) translateY(-50%)" }}
      ></div>
      {/* Yellow Glow Above the Hero Image */}
      <div className="absolute -right-16 top-[10%] w-[500px] h-[300px] bg-[#F7A800] rounded-full opacity-20 blur-2xl"></div>
      {/* Circular Patterns - Left Top */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -left-20 -top-24 animate-spin-slow opacity-70"
          width="300"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="#F6C84E"
            strokeWidth="3"
            strokeDasharray="6 11"
            className="animate-pulse-subtle"
          />
          <circle
            cx="200"
            cy="200"
            r="140"
            stroke="#F6C84E"
            strokeWidth="3"
            strokeDasharray="6 11"
            className="animate-pulse-subtle [animation-delay:0.2s]"
          />
          <circle
            cx="200"
            cy="200"
            r="100"
            stroke="#F6C84E"
            strokeWidth="3"
            strokeDasharray="6 11"
            className="animate-pulse-subtle [animation-delay:0.4s]"
          />
        </svg>
      </div>
      {/* Circular Patterns - left Top */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -right-11 -top-20 animate-spin-slow opacity-70"
          width="200"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="#F6C84E"
            strokeWidth="3"
            strokeDasharray="6 11"
            className="animate-pulse-subtle"
          />
          <circle
            cx="200"
            cy="200"
            r="140"
            stroke="#F6C84E"
            strokeWidth="3"
            strokeDasharray="6 11"
            className="animate-pulse-subtle [animation-delay:0.2s]"
          />
          <circle
            cx="200"
            cy="200"
            r="100"
            stroke="#F6C84E"
            strokeWidth="3"
            strokeDasharray="6 11"
            className="animate-pulse-subtle [animation-delay:0.4s]"
          />
        </svg>
      </div>
      {/* -right-11 -top-0 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -right-11 -top-0 animate-spin-slow opacity-70"
          width="200"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="#F6C84E"
            strokeWidth="3"
            strokeDasharray="6 11"
            className="animate-pulse-subtle"
          />
          <circle
            cx="200"
            cy="200"
            r="140"
            stroke="#F6C84E"
            strokeWidth="3"
            strokeDasharray="6 11"
            className="animate-pulse-subtle [animation-delay:0.2s]"
          />
          <circle
            cx="200"
            cy="200"
            r="100"
            stroke="#F6C84E"
            strokeWidth="3"
            strokeDasharray="6 11"
            className="animate-pulse-subtle [animation-delay:0.4s]"
          />
        </svg>
      </div>
      {/* Circular Patterns - Right Bottom */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -right-20 bottom-0 animate-spin-slow opacity-70"
          width="200"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="#F6C84E"
            strokeWidth="3"
            strokeDasharray="6 11"
            className="animate-pulse-subtle"
          />
          <circle
            cx="200"
            cy="200"
            r="140"
            stroke="#F6C84E"
            strokeWidth="3"
            strokeDasharray="6 11"
            className="animate-pulse-subtle [animation-delay:0.2s]"
          />
          <circle
            cx="200"
            cy="200"
            r="100"
            stroke="#F6C84E"
            strokeWidth="3"
            strokeDasharray="6 11"
            className="animate-pulse-subtle [animation-delay:0.4s]"
          />
        </svg>
      </div>{" "}
      {/* Additional Circular Pattern - Right Middle */}
      {/* <div className="absolute right-1/4 top-1/3 w-[150px] h-[150px] opacity-30">
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
      </div> */}
    </div>
  );
}

