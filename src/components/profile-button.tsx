"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface ProfileButtonProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const variants = {
  open: {
    width: "100%",
    height: "100%",
    top: 0,
    zIndex: 100
  },
  closed: {
    width: "64px",
    height: "64px",
    bottom: 0,
    zIndex: 1
  }
};

const ProfileButton = ({ isOpen, onOpenChange }: ProfileButtonProps) => {
  return (
    <div>
      <motion.div
        initial={false}
        variants={variants}
        animate={isOpen ? "open" : "closed"}
        className="size-16 bg-[#181818] text-white font-medium absolute"
        onClick={() => !isOpen && onOpenChange(true)}
        transition={{ type: "spring", bounce: 0.05, delay: 0.2 }}
      >
        <AnimatePresence initial={false}>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.8 } }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="size-full relative px-[9px] pb-1 flex items-end cursor-pointer"
            >
              <p className="text-2xl">Ba</p>

              <div className="size-[11px] border-[1.8px] border-white rounded-full absolute top-1.5 right-[7.42px]"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Account Options */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0, duration: 0 } }}
              transition={{ duration: 0.15, delay: 0.8 }}
              className="size-full bg-inherit p-6 relative"
            >
              <p>PROFILE OPTIONS HERE</p>

              <button
                className="absolute top-6 right-6 cursor-pointer hover:opacity-80 transition"
                onClick={() => onOpenChange(false)}
              >
                <X />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProfileButton;
