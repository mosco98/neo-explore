"use client";

import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Mail,
  MessageCircle,
  Search,
  UserPlus
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import AddProfessionalNetwork from "./add-professional-network";
import ContactList from "./contacts-list";

export type DetailType = { name: string; role: string };

const ALPHA_NUMERIC = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0-9"
];

const AddressBook = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState<"default" | "keypad">(
    "default"
  );
  const [activeLetter, setActiveLetter] = useState("");
  const [selectedDetails, setSelectedDetails] = useState<
    DetailType | undefined
  >(undefined);

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToLetter = (letter: string) => {
    const el = sectionRefs.current[letter];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (isAddOpen) {
    return (
      <AddProfessionalNetwork
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
      />
    );
  }

  return (
    <div className="flex flex-1 gap-16 pl-[92px] pt-12">
      <div className="flex-1 pb-[64px]">
        <div className="h-8 min-w-8 text-[20px] bg-[#909090] inline-flex items-center justify-center text-white uppercase">
          {activeLetter}
        </div>

        <AnimatePresence>
          {!isAddOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-[66px] max-h-[calc(100vh-330px)] overflow-y-auto pr-2"
            >
              <ContactList
                setActiveLetter={(letter) => setActiveLetter(letter)}
                setSelectedDetails={setSelectedDetails}
                sectionRefs={sectionRefs}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        layoutId="details-panel"
        className="w-[278px] h-[590px] bg-[#0A0A0A] self-end px-[42px] pt-[42px] pb-[64px] text-white text-sm flex flex-col justify-between font-mono"
      >
        <>
          {!selectedDetails && (
            <>
              {activeScreen === "default" && (
                <>
                  <div className="flex items-center justify-between">
                    <p>/25</p>

                    <button>
                      <Search className="size-[14px]" />
                    </button>
                  </div>

                  <div>
                    <ul className="space-y-3">
                      <li>
                        <button>PROVIDERS</button>
                      </li>

                      <li>
                        <button>CLINICS</button>
                      </li>

                      <li>
                        <button>HOSPITALS</button>
                      </li>

                      <li>
                        <button>DIAGNOSTIC CENTRES</button>
                      </li>

                      <li>
                        <button>PHARMACIES</button>
                      </li>

                      <li>
                        <button>PATIENTS</button>
                      </li>

                      <li>
                        <button>PRIVATE CONTACTS</button>
                      </li>

                      <li>
                        <button>OTHERS</button>
                      </li>

                      <li className="text-[#F05211]">
                        <button
                          className="inline-flex items-center gap-[19px]"
                          onClick={() => setActiveScreen("keypad")}
                        >
                          <svg
                            width={22}
                            height={12}
                            viewBox="0 0 22 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.1105 6.48612C21.379 6.21764 21.379 5.78236 21.1105 5.51388L16.7354 1.13879C16.4669 0.870313 16.0316 0.870313 15.7632 1.13879C15.4947 1.40727 15.4947 1.84255 15.7632 2.11103L19.6521 6L15.7632 9.88897C15.4947 10.1574 15.4947 10.5927 15.7632 10.8612C16.0316 11.1297 16.4669 11.1297 16.7354 10.8612L21.1105 6.48612ZM0 6V6.68748H20.6244V6V5.31252H0V6Z"
                              fill="#F05211"
                            />
                          </svg>
                          A-Z
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              )}

              {activeScreen === "keypad" && (
                <>
                  <div>
                    <div className="flex items-center justify-end">
                      <button>
                        <Search className="size-[14px]" />
                      </button>
                    </div>

                    <div className="mt-[46px] grid grid-cols-6 gap-6">
                      {ALPHA_NUMERIC.map((item, i) => (
                        <button
                          key={i}
                          className={cn(
                            "flex items-center justify-center uppercase h-[23px] text-[18px]",
                            i === ALPHA_NUMERIC.length - 1 && "col-span-2",
                            item === activeLetter && "text-[#F05211]"
                          )}
                          onClick={() => {
                            scrollToLetter(item);
                            setActiveLetter(item);
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <button
                      className="text-xs inline-flex items-center gap-1"
                      onClick={() => setActiveScreen("default")}
                    >
                      <ArrowLeft className="size-4" />
                      BACK
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </>

        {selectedDetails && (
          <>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="relative">
                  <div className="size-12 rounded-full relative overflow-hidden">
                    <Image
                      src={"/provider.webp"}
                      fill
                      alt="provider"
                      className="object-cover object-top"
                    />
                  </div>

                  <button className="absolute top-1 right-0 group">
                    <ArrowUpRight className="size-4.5 group-hover:rotate-45 will-change-transform transition" />
                  </button>
                </div>

                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-2.5"
                  >
                    <div>
                      <h2 className="text-sm font-semibold line-clamp-1">
                        {selectedDetails.name}
                      </h2>
                      <p className="mt-px text-[#C5C5C5] text-xs">
                        {selectedDetails.role}
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

                    <div className="mt-10 space-y-4">
                      <div>
                        <p className="text-[#C5C5C5] uppercase text-[10px] !font-mono">
                          Location [1]
                        </p>

                        <div className="text-xs mt-1.5 space-y-px">
                          <p>United Kingdom</p>
                          <p>London</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-[#C5C5C5] uppercase text-[10px]">
                          Tomorrow +2hrs
                        </p>

                        <div className="text-xs mt-1.5">
                          <p>1:30pm Local Time</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-[#C5C5C5] uppercase text-[10px]">
                          Visit Types [5]
                        </p>

                        <div className="text-xs mt-1.5 space-y-px">
                          <p>Telemedicine</p>
                          <p>General health consultations +2</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-[#C5C5C5] uppercase text-[10px]">
                          Availability
                        </p>

                        <div className="text-xs mt-1.5 space-y-px">
                          <p>Mon–Fri, 8am–5pm</p>
                          <p>Sat, Closed</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-between"
                >
                  <button className="size-8 border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
                    <Mail className="size-4" />
                  </button>

                  <button className="size-8 border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
                    <MessageCircle className="size-4" />
                  </button>

                  <button className="size-8 border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
                    <Calendar className="size-4" />
                  </button>

                  <motion.button
                    layoutId="add-icon-box"
                    className="size-8 border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
                    transition={{ duration: 0 }}
                    onClick={() => setIsAddOpen(true)}
                  >
                    <UserPlus className="size-4" />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default AddressBook;
