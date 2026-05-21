import Hero from "@/sections/landing/Hero";
import Problem from "@/sections/landing/Problem";
import Solution from "@/sections/landing/Solution";
import Products from "@/sections/landing/Products";
import Process from "@/sections/landing/Process";
import Industries from "@/sections/landing/Industries";
import About from "@/sections/landing/About";
import Contact from "@/sections/landing/Contact";

export default function Landing() {
  return (
    <>
      <Hero />
      <Problem />
      <div className="divider" />
      <Solution />
      <Products />
      <Process />
      <Industries />
      <About />
      <Contact />
    </>
  );
}
