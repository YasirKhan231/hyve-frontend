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
      <div className="absolute -right-16 -top-25 w-[200px] h-[200px] opacity-30">
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

      <div className="absolute -right-16 top-20 w-[200px] h-[200px] opacity-30">
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
      <div className="absolute -right-16 bottom-0 w-[200px] h-[200px] opacity-30">
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
  );
}

