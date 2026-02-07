/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.1 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default PageWrapper;
