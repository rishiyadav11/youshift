import CallToAction from "../components/CallToAction";
import Features from "../components/Features";
import Herosection from "../components/Herosection";
import Howitworks from "../components/Howitworks";
import { AnimatedTestimonialsDemo } from "../components/Testimonials";

export default async function Home() {
  return (
    <main className="relative">
      <Herosection />
      <Features/>
      <Howitworks/>
      <AnimatedTestimonialsDemo/>
      <CallToAction/>
    </main>
  );
}
