"use client";

import { Mail, Minimize2, Paperclip, Plus, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { DetailType } from "./address-book";
import PDF from "./icons/pdf";
import RichTextEditor from "./rich-text";
import { Checkbox } from "./ui/checkbox";

interface SendMailProps {
  isOpen?: boolean;
  onClose?: () => void;
  selectedDetails: DetailType | undefined;
}

const SendMail = ({ isOpen, onClose, selectedDetails }: SendMailProps) => {
  return (
    <div className="py-[45px] w-full max-w-[719px]">
      <div className="flex items-center justify-between">
        <motion.div
          layoutId="mail-icon-box"
          className="size-10 flex items-center justify-center bg-[#6C737F] text-white"
          transition={{ duration: 0.7 }}
        >
          <Mail className="size-5" />
        </motion.div>

        <AnimatePresence>
          {isOpen && selectedDetails && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.9 } }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <button className="size-10 flex items-center justify-center">
                <Paperclip className="size-5" />
              </button>

              <button className="size-10 flex items-center justify-center">
                <Minimize2 className="size-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && selectedDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.9 } }}
            exit={{ opacity: 0 }}
            className="mt-[53px]"
          >
            <div className="border-t border-[#C5C5C5] py-[14px] flex gap-[35px]">
              <p className="text-sm text-[#909090] mt-2">To</p>

              <div className="flex items-center gap-2 flex-wrap">
                <div className="h-8 px-2 flex items-center gap-2 bg-[#F4F5F6]">
                  <div className="size-8 rounded-full relative overflow-hidden">
                    <Image
                      src={"https://randomuser.me/api/portraits/women/70.jpg"}
                      className="object-cover"
                      fill
                      alt="Provider"
                    />
                  </div>

                  <p className="font-semibold">Sam Okafor</p>

                  <button>
                    <X className="size-4 text-[#98A2B3]" />
                  </button>
                </div>

                <button className="size-8 flex items-center justify-center border border-[#F4F5F6] hover:bg-[#F4F5F6] transition">
                  <Plus className="size-5" />
                </button>
              </div>
            </div>

            <div className="border-t border-[#C5C5C5] py-[14px] flex gap-[35px]">
              <p className="text-[#909090] text-sm">CC</p>
            </div>

            <div className="border-y border-[#C5C5C5] py-[14px] flex gap-[35px]">
              <p className="text-[#909090] text-sm">Subject</p>
            </div>

            <div className="mt-4">
              <RichTextEditor minHeight="120px" />
            </div>

            <div className="mt-[30px] py-2 px-5 border border-[#C5C5C5]">
              <p className="text-sm text-[#0F172A] font-semibold">
                Attachments
              </p>

              <div className="mt-2.5">
                <div className="flex items-center gap-3 text-sm">
                  <PDF />

                  <p>Doctor’s report.pdf</p>

                  <button>
                    <X className="size-4 text-[#98A2B3]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="text-sm flex items-center gap-2">
                <Checkbox id="allow" />
                <label htmlFor="allow">
                  Don’t allow the recipient to reply this message
                </label>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="h-9 text-sm border px-4 font-medium"
                  onClick={onClose}
                >
                  Cancel
                </button>

                <button
                  className="h-9 text-sm border px-4 font-medium flex items-center gap-2 text-[#F8FAFC] bg-black"
                  onClick={onClose}
                >
                  <Send className="size-4" />
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SendMail;
