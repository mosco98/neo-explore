"use client";

import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const LINKS = [
  { name: "Workspace", href: "#" },
  { name: "Connections", href: "#" },
  { name: "My Practice", href: "#" },
  { name: "Academy", href: "#" },
  { name: "Admin", href: "#" },
  { name: "Research", href: "#" },
  { name: "Launchpad", href: "#" },
  { name: "Support", href: "#" }
];

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className="uppercase font-mono font-medium"
        onClick={() => setIsMenuOpen(true)}
      >
        [ Menu ]
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-dvh w-dvw bg-white fixed top-0 left-0 z-[9999999999]
        
      "
          >
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                // transition={{ delay: 0.5 }}
                className="size-full grid grid-cols-2"
              >
                <div>
                  <div className="container h-full">
                    <ul className="text-[40px] font-medium tracking-tighter space-y-2 flex flex-col items-end justify-center h-full">
                      {LINKS.map((link, i) => (
                        <li
                          key={i}
                          className="inline-flex items-center gap-2 group cursor-pointer"
                          role="button"
                        >
                          <ArrowRight className="size-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition -translate-x-4 will-change-transform" />
                          {link.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-black text-white py-5">
                  <div className="container relative h-full flex flex-col">
                    <div className="flex justify-end">
                      <button
                        className="font-mono text-[24px]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        [x]
                      </button>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="w-full flex items-center gap-32">
                        <button className="underline underline-offset-[12px]">
                          Updates
                        </button>
                        <button>Messages</button>
                        <button>Tasks</button>
                      </div>

                      <div className="aspect-[1/0.5] w-full mt-20 p-4 relative">
                        <div className="size-full bg-[#121212] relative overflow-hidden">
                          <h1 className="text-[213px] font-medium text-[#FFFFFF20] absolute -bottom-24 -right-6">
                            05
                          </h1>
                        </div>
                      </div>

                      <div className="mt-32 w-full flex items-center justify-between">
                        <button>My Profile</button>
                        <button>Logout</button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
