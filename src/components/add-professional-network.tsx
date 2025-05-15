"use client";

import { Send, UserPlus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

interface AddProfessionalNetworkProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddProfessionalNetwork = ({
  isOpen,
  onClose
}: AddProfessionalNetworkProps) => {
  return (
    <div className="flex-1 gap-20 pl-[92px] pt-12">
      <div className="inline-flex items-center gap-2.5 uppercase font-mono">
        <motion.div
          layoutId="add-icon-box"
          className="size-8 flex items-center justify-center bg-[#6C737F] text-white"
          transition={{ duration: 0.7 }}
        >
          <UserPlus className="size-4" />
        </motion.div>

        <AnimatePresence>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.7 } }}
            exit={{ opacity: 0 }}
            className="text-sm"
          >
            Invite to your Professional Network
          </motion.p>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-[62px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.9 } }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId="details-panel"
              className="w-[278px] bg-[#0A0A0A] pl-[42px] py-[42px] pr-[37px] text-white"
              // transition={{ duration: 0 }}
            >
              <div className="relative">
                <div className="size-12 rounded-full relative overflow-hidden">
                  <Image
                    src={"/provider.webp"}
                    fill
                    alt="provider"
                    className="object-cover object-top"
                  />
                </div>

                <div className="mt-2.5">
                  <h2 className="text-sm font-semibold line-clamp-1">
                    Amina Chinyere - Thomp...
                  </h2>
                  <p className="mt-px text-[#C5C5C5] text-xs">
                    Occupational Therapist
                  </p>

                  <div className="flex items-center flex-wrap gap-1 mt-2">
                    <div className="h-[18px] px-2 bg-[#D1D1D1] flex items-center justify-center text-[8px] text-xs font-mono text-[#0A0A0A] uppercase font-medium">
                      Endocrinology
                    </div>

                    <div className="h-[18px] px-2 bg-[#D1D1D1] flex items-center justify-center text-[8px] text-xs font-mono text-[#0A0A0A] uppercase font-medium">
                      Diabetology
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="w-[562px] max-w-full">
              <textarea
                className="border-[0.68px] border-[#333] resize-none outline-none pl-[42px] pt-[37px] placeholder:text-[#909090] text-sm w-full h-[182px] mb-0"
                placeholder="Add a personal note"
              />

              <div className="-mt-2 flex justify-end">
                <button
                  className="h-12 bg-[#0A0A0A] text-white text-[16px] uppercase inline-flex items-center gap-1.5 px-[35px]"
                  onClick={onClose}
                >
                  Send
                  <Send className="size-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddProfessionalNetwork;
