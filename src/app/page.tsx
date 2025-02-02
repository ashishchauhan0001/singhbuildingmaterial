
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import CustomerFeedback from "@/components/TestimonialCards";
import { Timeline2 } from "@/components/Timeline2";

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased font-sans">
      <HeroSection />
      <Timeline2/>
      <FeaturedCourses />
      <CustomerFeedback />
      <Instructors />
      <Footer />
    </main>
  );
}
