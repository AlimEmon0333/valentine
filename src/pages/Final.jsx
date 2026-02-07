/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import HeartsBackground from "../components/HeartsBg";
import { useNavigate } from "react-router-dom";
import HeartsBackground2x from "../components/Heartbg2X";

const Final = () => {
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
            Yayayayaayayyaayyayayayay
            <br />
            My Babe My Cutooo My Masha My Bhujiyaa <br />
            My Wifeee My Janeman My babyyy My Jaaaan <br /> My My My My
            Everythingggggggggggggggggggggg
            <br /> Jaaan aap bohat bohat bohat bohat bohat achi ho <br /> aaap
            bohat bohat bohat bohat bohat pyaaarii ho <br /> Jaaaaaaaan apke
            hone ka eshaas esa hota he ke lagta sab mukammal ho gaya aaap hoti
            ho to mere face pe wo priceless smiles hoti hain jo aaj tak apse
            pehle kabhi nhi aayi, aaap hoti ho to dil ko ek sukooon hota he ke
            sab kuch mera mere paas he aaaap hoti ho to bs main explain nhi kr
            sakta ke sab kitna acha lagta he <br /> Jaaan aap itni achi ho ke
            aapne mujhe humesha samjha aap ne humesha meri feelings ki respect
            ki aapne humesha mujhe samajhne or samjhane ki dono ki koshish ki
            jaan jis tarha aap mera khayal rakhti daant kar bhi pyaar se bhi{" "}
            <br /> jaan aap itni achi ho ke aapne meri kisi baat ka bura nhi
            maana balke uspe khush hui jaan apne mujhe apna sab kuch kaha aapne
            mujhe apna husband kaha , apke wo i loveeee you ke text aap itni
            mehnat se jo likhti ho mujhe itnaaa saaraa pyaar karti ho jaaan aaap
            sab se achi ho sab se achi sab se pyaari sirf or sirf meri sirf or
            sirf meri sirf or sirf meri sirf or sirf meri sirf or sirf meri{" "}
            <br /> Jaan aap kabhi kabhi jo overthink karti ho zyada sochti ho to
            meri jaaan aap ye samajh lo ke main ab se sirf or sirf apka hun sirf
            or sirf apka bs apka humesha humesha apka rhunga humehsa or meri
            jaaan apko paaane ke liye mujhe apke parents ke paun parne parain
            unki minnatain karni parain unke aaage gir girana parey lekin main
            hamare liye unko manaunga main apko unse mangunga unki pyaari si
            cutoo se pari jo apne aap ko meri kehti he or mujhe apni jaaan bolti
            he <br /> Myyyy jaaaaaaaaaaaaaaaaan meri jo feeeelings hain main
            unhain words main express to kabhi bhi nhi kar sakta hun but meri
            jaaan main jitna likh saka main ne likha but ye baat yaaad rakhna ye
            mere pyaar ka sirf or sirf 0.1% he meri jaaaaan mera saara pyaar
            apke liye or humesha apka rahega main sirf apka ghulaaam hun sirf or
            sirf apka <br /> I loveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            youuuuuuuuuuuuuuuuuuuuuuuuu <br /> soooooooooooooooooooooooooooooo{" "}
            <br /> sooooooooooooooooooooooooooooooooo <br />{" "}
            soooooooooooooooooooooooooooooooooooo <br />{" "}
            muchhhhhhhhhhhhhhhhhhhhhhhhh <br />
            <br />
            Myy jaaan myy janemannn myy wifee myy cutoo myy babe myy bhujiyaa
            myy ayee myy myy everythinggggg myyy loveeeee foreverrr
          </motion.h1>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Final;

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
    overflowX: "hidden",
  },
  propsalImg: {
    width: "250px",
    borderRadius: "20px",
  },
  txt1: {
    color: "#ffffff",
    fontSize: "26px",
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
