import { CONTAINER_ANIMATION, FADE_IN_ANIMATION } from "@/constants";
import { motion, Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface PricingCardProps {
  title: string;
  items: PricingCardItem[];
}



const PricingCard: React.FC<PricingCardProps> = ({ title, items }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const previousScrollY = useRef(0);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollDirection(currentScrollY > previousScrollY.current ? "down" : "up");
    previousScrollY.current = currentScrollY;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
      className="mb-16"
    >
      <h2 className="text-3xl font-semibold mb-8 text-white text-center">
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
            className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 p-6 hover:scale-[1.02] transition-transform"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{item.details}</p>
            <div className="flex items-center justify-between text-sm font-medium text-white">
              <span className="bg-gradient-to-r from-primary/90 to-secondary/90 px-3 py-2 rounded-full text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all text-nowrap">
                ₹ {item.price}
              </span>
              <span className="text-gray-400 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all px-3 py-2 rounded-full text-nowrap">
                (${item.usd})
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingCard;
