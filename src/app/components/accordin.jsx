"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImCross } from "react-icons/im";
import { FaCirclePlus } from "react-icons/fa6";

function Accordin({ state }) {
  const [box, setBox] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
  });

  return (
    <div>
      <AnimatePresence>
        <div
          className="md:w-[29rem] bg-neutral-900 rounded-2xl flex-col gap-4 p-6 flex "
          onClick={() => setBox({ ...box, [state]: !box[state] })}
        >
          <motion.div className="flex justify-between items-center gap-2">
            <p className="text-white text-md font-semibold">
              How is Layers different from other design tools?
            </p>
            {box[state] ? (
              <ImCross size={25} className="text-lime-400" />
            ) : (
              <FaCirclePlus size={25} className="text-lime-400" />
            )}
          </motion.div>

          <AnimatePresence>
            {box[state] && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
              >
                <p className="text-white/50 text-sm font-semibold">
                  How is Layers different from other design tools? How is Layers
                  different from other design tools? How is Layers different
                  from other design tools?
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Accordin;
