/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/purity */
import { motion } from "framer-motion";

const hearts = Array.from({ length: 20 });

const HeartsBackground2x = () => {
  return (
    <div style={styles.wrapper}>
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          style={styles.heart}
          initial={{
            y: "100vh",
            x: Math.random() * window.innerWidth,
            opacity: 0,
            scale: Math.random() * 0.8 + 0.4,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 1 +1,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        >
          💗
        </motion.div>
      ))}
    </div>
  );
};

export default HeartsBackground2x;

const styles = {
  wrapper: {
    position: "fixed",
    inset: 0,
    overflow: "hidden",
    zIndex: 0,
    pointerEvents: "none",
  },
  heart: {
    position: "absolute",
    fontSize: "42px",
  },
};
