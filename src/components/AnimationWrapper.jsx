import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * AnimationWrapper component
 *
 * Props:
 * - children: ReactNode
 * - delay: number (optional, adds delay to the animation)
 * - customVariants: object (optional, allows passing custom variants)
 */
const AnimationWrapper = ({ children, delay = 0, customVariants }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const defaultVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      rotateX: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={customVariants || defaultVariants}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
