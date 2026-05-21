import Hero from "@/sections/landing/Hero";
import Problem from "@/sections/landing/Problem";
import Solution from "@/sections/landing/Solution";

export default function Landing() {
  return (
    <>
      <Hero />
      <Problem />
      <div className="divider" />
      <Solution />
    </>
  );
}
