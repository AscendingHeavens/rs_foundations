import { CONTAINER_ANIMATION, FADE_IN_ANIMATION } from "@/constants";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

interface PricingCardProps {
  title: string;
  items: PricingCardItem[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, items }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const previousScrollY = useRef(0);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setIsVisible(true);
      else setIsVisible(false);
    });
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollDirection(currentScrollY > previousScrollY.current ? "down" : "up");
    previousScrollY.current = currentScrollY;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: isMobile ? 0.1 : 0.5,
    });

    if (sectionRef.current) observer.observe(sectionRef.current);
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      variants={CONTAINER_ANIMATION}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="mb-8"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={FADE_IN_ANIMATION(scrollDirection)}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            custom={index}
            className="rounded-2xl shadow-xl border p-6 hover:scale-[1.02] transition-transform
              bg-white border-gray-200 text-gray-800 
              dark:bg-white/5 dark:border-white/10 dark:text-white backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{item.details}</p>
            <div className="flex items-center justify-between text-sm font-medium">
              <span className="bg-gradient-to-r from-primary/90 to-secondary/90 px-3 py-2 rounded-full text-white text-nowrap">
                {item.price}
              </span>
              <span className="text-gray-500 dark:text-gray-400 px-3 py-2 rounded-full text-nowrap">
                ({item.usd})
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingCard;
