import Hero from "@/sections/landing/Hero";
import Problem from "@/sections/landing/Problem";
import Solution from "@/sections/landing/Solution";
import Process from "@/sections/landing/Process";
import Industries from "@/sections/landing/Industries";
import About from "@/sections/landing/About";
import Team from "@/sections/landing/Team";
import Contact from "@/sections/landing/Contact";
import { useDocumentTitle } from "@/lib/use-document-title";

export default function Landing() {
  useDocumentTitle("AI-Native Risk & Compliance Intelligence");
  return (
    <>
      <Hero />
      <Problem />
      <div className="divider" />
      <Solution />
      <Process />
      <Industries />
      <About />
      <Team />
      <Contact />
    </>
  );
}
