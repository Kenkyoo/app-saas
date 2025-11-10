import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Hero from "@/components/hero";
import Features from "@/components/features";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Build Your SaaS is a{" "}
          <Highlight className="text-black dark:text-white">
            Launch your SaaS product in record time with our powerful,
            ready-to-use template. Packed with modern technologies and essential
            integrations.
          </Highlight>
        </motion.h1>
      </HeroHighlight>
    </main>
  );
}
