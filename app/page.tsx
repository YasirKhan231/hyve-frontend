import Navbar from "./component/navbar"; // Fix typo
import Hero from "./component/hero-section"; // Fix typo
import Footer from "./component/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero></Hero>
      {/* Ensures the Hero section fills remaining space */}
      {/* <Footer /> */}
    </div>
  );
}
