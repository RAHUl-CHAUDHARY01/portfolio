import Contact from "@/components/contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/footer";
import HeroSection from "@/components/Hero";
import MaxWidthContainer from "@/components/maxwidthcontainer";
import ProofOfWork from "@/components/proofofwork";

export default function Home() {
  return (
    <MaxWidthContainer>
      <HeroSection/>
      <ProofOfWork/>
      <Experience/>
      <Education/>
      <Contact/>
      <Footer/>
      <div className="fixed inset-0 -z-10" style={{background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(179, 185, 193, 0.25), transparent 70%), #f5f2f2ff",}}/>
    </MaxWidthContainer>
  );
}
