import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sayan#
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100054545703937">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/arnab-kanti-das-61b164259/">
            <img src="/linkedin.png" alt="" />
          </a>
         
          <a href="https://github.com/IamArnab999">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
