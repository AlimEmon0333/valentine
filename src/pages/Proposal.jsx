/* eslint-disable no-unused-vars */
import { motion, AnimatePresence, color } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import propsalImg from "../assets/proposal.jpeg";
import propsalMasha from "../assets/proposalMasha.png";
import HeartsBackground from "../components/HeartsBg";
import HeartsBackground2x from "../components/Heartbg2X";

const Proposal = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <HeartsBackground2x />
      <PageWrapper>
        <div style={styles.glass}>
          <motion.h1
            animate={{ scale: [1, 1.02, 1], opacity: [0.9, 1, 0.9] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={styles.txt1}
          >
            Will you be My Valentine Babe? 🤭🌹
          </motion.h1>
          <div style={styles.propsalImg}>
            <motion.img
              src={propsalImg}
              width="100%"
              style={styles.propsalImg}
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div style={styles.buttonWrapper}>
            <motion.button
              style={styles.yesBtn}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: ["0 0 0px #fff", "0 0 25px #ff9aa2", "0 0 0px #fff"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => navigate("/final")}
            >
              YES 🤭
            </motion.button>
          </div>
          <div style={styles.noTxtCont}>
            <motion.p style={styles.noTxt}>Hehe No ka koi option nhi</motion.p>
            <div style={styles.mashaImg}>
              <motion.img
                src={propsalMasha}
                width="100%"
                style={styles.mashaImg}
              />
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Proposal;

const styles = {
  mashaImg: {
    width: "40px",
  },
  noTxt: {
    fontSize: "14px",
    color: "white",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background:
      "linear-gradient(200deg,rgba(242, 220, 242, 1) 0%, rgba(222, 131, 217, 1) 50%, rgba(247, 94, 199, 1) 100%)",
  },
  glass: {
    position: "relative",
    zIndex: 2,
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    width: "500px",
    height: "600px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.3)",
    overflowY: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  propsalImg: {
    width: "250px",
    borderRadius: "20px",
  },
  txt1: {
    color: "#ffffff",
    fontSize: "30px",
    textAlign: "center",
    lineHeight: 1.4,
    fontWeight: 500,
    fontFamily: "Dancing Script, cursive",
  },

  buttonWrapper: {
    display: "flex",
    gap: "40px",
    padding: "20px 0px 0px 0px",
  },

  yesBtn: {
    padding: "10px 50px",
    fontSize: "15px",
    borderRadius: "40px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #ff758f, #ff7eb3)",
    color: "#fff",
  },

  noTxtCont: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
};
