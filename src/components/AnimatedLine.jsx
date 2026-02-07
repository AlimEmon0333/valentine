/* eslint-disable no-unused-vars */ 
import { motion } from "framer-motion";

const AnimatedLine = ({ children, delay }) => (
  <motion.p
    style={{
      fontSize: "20px",
      color: "#fff",
      margin: "10px 0",
      textAlign: "center",
    }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 1.2 }}
  >
    {children}
  </motion.p>
);

export default AnimatedLine;
