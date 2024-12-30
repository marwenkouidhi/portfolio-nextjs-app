"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }}>
      <motion.div className="mix-blend-lighten">
        <Image height={500} width={300} alt="me" src="/me.png" className="rounded-full bg-muted p-3 object-contain" />
      </motion.div>
    </motion.div>
  );
};

export default Photo;
