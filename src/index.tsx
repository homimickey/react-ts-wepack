import React from "react";
import ReactDOM from "react-dom";
import "./public/css/styles.css";
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div
      animate={{ 
        translateX: 325,
        scale:2
      }}
      className="hello"
    >
      <h1>Hello react ts</h1>
    </motion.div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
