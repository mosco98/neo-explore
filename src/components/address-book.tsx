"use client";

import { cn, getCurrentTimeFromOffset } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  ChevronDown,
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
import SendMail from "./mail";

export type DetailType = {
  name: string;
  role: string;
  location: string;
  consult_types: string[];
  timezone: string;
  avatar: string;
  specialities: string[];
};

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
  const [isMailOpen, setIsMailOpen] = useState(false);

  const [activeScreen, setActiveScreen] = useState<
    "default" | "keypad" | "filter"
  >("default");
  const [activeLetter, setActiveLetter] = useState("");
  const [selectedDetails, setSelectedDetails] = useState<
    DetailType | undefined
  >();

  const [selectedType, setSelectedType] = useState<
    "providers" | "clinics" | "hospitals" | "diagnostic-centres" | "pharmacies"
  >("providers");

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToLetter = (letter: string) => {
    const el = sectionRefs.current[letter];
    if (el) {
      el.scrollIntoView({ block: "start" });
    }
  };

  if (isMailOpen) {
    return (
      <SendMail
        isOpen={isMailOpen}
        onClose={() => setIsMailOpen(false)}
        selectedDetails={selectedDetails}
      />
    );
  }

  if (isAddOpen) {
    return (
      <AddProfessionalNetwork
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        selectedDetails={selectedDetails}
      />
    );
  }

  const handleSelectType = (
    type:
      | "providers"
      | "clinics"
      | "hospitals"
      | "diagnostic-centres"
      | "pharmacies"
  ) => {
    setSelectedType(type);
    setActiveScreen("default");
    setActiveLetter("A");
    setSelectedDetails(undefined);
  };

  return (
    <div className="flex flex-1 gap-[45px] pt-[45px] pb-10">
      <div className="flex-1 pb-[64px]">
        <div className="flex items-center justify-between uppercase text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="size-2.5 bg-black"></div>

            <p className="font-mono uppercase">
              {selectedType.split("-").join(" ")}
            </p>
          </div>

          <div className="text-[#909090]">letter {activeLetter}</div>
        </div>

        <AnimatePresence>
          {!isAddOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="max-h-[calc(100dvh-330px)] overflow-y-auto pr-2 mt-10"
            >
              <ContactList
                setActiveLetter={(letter) => setActiveLetter(letter)}
                setSelectedDetails={setSelectedDetails}
                sectionRefs={sectionRefs}
                selectedType={selectedType}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        layoutId="details-panel"
        className="w-[278px] h-full bg-[#0A0A0A] self-end px-[42px] pt-[45px] pb-[42px] text-white text-sm flex flex-col justify-between font-mono"
      >
        <>
          {!selectedDetails && (
            <>
              {activeScreen === "default" && (
                <div className="flex-1 space-y-[88px]">
                  <div className="flex items-center justify-between">
                    <button
                      className="text-xs uppercase font-medium font-mono"
                      onClick={() => setActiveScreen("filter")}
                    >
                      FIlter
                    </button>

                    <button>
                      <Search className="size-[14px]" />
                    </button>
                  </div>

                  <div>
                    <ul className="space-y-3">
                      <li>
                        <button onClick={() => handleSelectType("providers")}>
                          PROVIDERS
                        </button>
                      </li>

                      <li>
                        <button onClick={() => handleSelectType("clinics")}>
                          CLINICS
                        </button>
                      </li>

                      <li>
                        <button onClick={() => handleSelectType("hospitals")}>
                          HOSPITALS
                        </button>
                      </li>

                      <li>
                        <button
                          onClick={() => handleSelectType("diagnostic-centres")}
                        >
                          DIAGNOSTIC CENTRES
                        </button>
                      </li>

                      <li>
                        <button onClick={() => handleSelectType("pharmacies")}>
                          PHARMACIES
                        </button>
                      </li>

                      {/* <li>
                        <button>PATIENTS</button>
                      </li>

                      <li>
                        <button>PRIVATE CONTACTS</button>
                      </li>

                      <li>
                        <button>OTHERS</button>
                      </li> */}

                      {/* <li className="text-[#F05211]">
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
                      </li> */}
                    </ul>
                  </div>
                </div>
              )}

              {activeScreen === "filter" && (
                <div className="flex-1 space-y-[37px]">
                  <div className="flex items-center justify-between">
                    <button
                      className="text-xs uppercase font-medium font-mono"
                      onClick={() => setActiveScreen("default")}
                    >
                      <ArrowLeft className="text-[#F05211] size-4" />
                    </button>

                    <button>
                      <Search className="size-[14px]" />
                    </button>
                  </div>

                  <div className="border border-[#343434]">
                    <div>
                      <div className="text-sm uppercase flex items-center justify-between p-2 border-b border-[#343434]">
                        <p>Filter by</p>

                        <ChevronDown className="text-[#343434] size-5" />
                      </div>

                      <ul className="space-y-3 px-2 pt-2 pb-10 text-xs">
                        <li>SPECIALTY</li>
                        <li>DISTANCE</li>
                        <li>LOCATION</li>
                      </ul>
                    </div>

                    <div>
                      <div className="text-sm uppercase flex items-center justify-between p-2 border-y border-[#343434]">
                        <p>Sort by</p>

                        <ChevronDown className="text-[#343434] size-5" />
                      </div>

                      <ul className="space-y-3 px-2 pt-2 pb-10 text-xs">
                        <li>ALL</li>
                        <li>FAVOURITE</li>
                        <li onClick={() => setActiveScreen("keypad")}>A - Z</li>
                        <li>Z - A</li>
                      </ul>
                    </div>
                  </div>
                </div>
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
                <div className="mb-6">
                  <button
                    onClick={() => {
                      setSelectedDetails(undefined);
                    }}
                  >
                    <ArrowLeft className="size-4" />
                  </button>
                </div>

                <div className="relative">
                  <div className="size-12 rounded-full relative overflow-hidden">
                    <Image
                      src={selectedDetails.avatar}
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
                        {selectedDetails.specialities.map((spec, index) => (
                          <div
                            key={index}
                            className="h-[18px] px-2 bg-[#D1D1D1] flex items-center justify-center text-[8px] text-xs font-mono text-[#0A0A0A] uppercase font-medium"
                          >
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-10 space-y-4">
                      <div>
                        <p className="text-[#C5C5C5] uppercase text-[10px] !font-mono">
                          Location [
                          {selectedDetails.location.split(", ").length}]
                        </p>

                        <div className="text-xs mt-1.5 space-y-px">
                          {selectedDetails.location
                            .split(", ")
                            .map((line, index) => (
                              <p key={index}>{line}</p>
                            ))}
                          {/* <p>United Kingdom</p>
                          <p>London</p> */}
                        </div>
                      </div>

                      <div>
                        <p className="text-[#C5C5C5] uppercase text-[10px]">
                          Tomorrow {selectedDetails.timezone}hrs
                        </p>

                        <div className="text-xs mt-1.5">
                          <p>
                            {getCurrentTimeFromOffset(
                              Number(selectedDetails.timezone)
                            )}{" "}
                            Local Time
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-[#C5C5C5] uppercase text-[10px]">
                          Visit Types [{selectedDetails.consult_types.length}]
                        </p>

                        <div className="text-xs mt-1.5 space-y-px">
                          {selectedDetails.consult_types.map((type, index) => (
                            <p key={index}>{type}</p>
                          ))}
                          {/* <p>General health consultations +2</p> */}
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
                  <motion.button
                    layoutId="mail-icon-box"
                    className="size-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
                    transition={{ duration: 0 }}
                    onClick={() => setIsMailOpen(true)}
                  >
                    <Mail className="size-4" />
                  </motion.button>

                  <button className="size-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
                    <MessageCircle className="size-4" />
                  </button>

                  <button className="size-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
                    <Calendar className="size-4" />
                  </button>

                  <motion.button
                    layoutId="add-icon-box"
                    className="size-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
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
