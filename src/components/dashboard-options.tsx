"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import ProfileButton from "./profile-button";

const DashboardOptions = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <div className="flex items-end relative">
      <ProfileButton isOpen={isAccountOpen} onOpenChange={setIsAccountOpen} />

      <motion.div
        initial={false}
        animate={{ opacity: isAccountOpen ? 0 : 1 }}
        transition={{
          duration: isAccountOpen ? 0.15 : 0.4,
          delay: !isAccountOpen ? 0.5 : 0
        }}
        className="flex-1 flex justify-end"
      >
        <div className="w-fit">
          <div className="mb-[45px] flex items-center justify-end gap-4">
            <button className="text-[#9399A1] size-9 border-[0.8px] flex items-center justify-center">
              <ArrowLeft className="size-5" />
            </button>
            <button className="size-9 border-[0.8px] flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition">
              <ArrowRight className="size-5" />
            </button>
          </div>

          <div className="flex gap-6">
            <Link href={"/address-book"}>
              <div className="h-[386px] w-[208px] bg-[#181818] p-6 flex flex-col items-center">
                <div className="flex-1 flex items-center justify-center relative">
                  <svg
                    width={120}
                    height={120}
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute"
                  >
                    <g clipPath="url(#clip0_52_143)">
                      <path
                        d="M52.9585 119.911L54.8552 103.721"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M30.5562 112.653L38.5163 98.4348"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M12.6489 97.3884L25.4479 87.2776"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M1.9563 76.4207L17.6377 71.9851"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M0.090332 52.9578L16.2795 54.8545"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M7.34717 30.5562L21.565 38.5163"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M22.6267 12.6494L32.7225 25.4484"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M43.5791 1.95679L48.0147 17.6382"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M67.0562 0.0888672L65.1445 16.278"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M89.4441 7.34741L81.4839 21.5652"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M107.35 22.6262L94.5505 32.7221"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M118.043 43.5798L102.362 48.0154"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M119.911 67.042L103.722 65.1453"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M112.652 89.4436L98.4346 81.4834"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M97.3886 107.351L87.2778 94.5515"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M76.4207 118.043L71.9851 102.362"
                        stroke="#909090"
                        strokeWidth="0.727811"
                        strokeMiterlimit={10}
                      />
                      <line
                        x1="56.4408"
                        y1="65.55"
                        x2="56.4408"
                        y2="29.8217"
                        stroke="#909090"
                        strokeWidth="0.727811"
                      />
                      <line
                        x1="75.718"
                        y1="84.5435"
                        x2="56.5467"
                        y2="65.3722"
                        stroke="#909090"
                        strokeWidth="0.727811"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_52_143">
                        <rect width={120} height={120} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="pt-6 border-t border-[#ffffff20] flex items-start gap-6">
                  <div>
                    <h3 className="font-sussie text-white text-sm leading-0">
                      Address Book
                    </h3>

                    <p className="text-[10px] mt-3 max-w-[100px] text-[#9399A1] leading-3">
                      Your professional Network
                    </p>
                  </div>

                  <button className="-mt-1.5 cursor-pointer">
                    <ArrowRight className="size-4 text-white" />
                  </button>
                </div>
              </div>
            </Link>

            <div className="h-[386px] w-[208px] bg-[#181818] p-6 flex flex-col items-center">
              <div className="flex-1 flex items-center justify-center relative"></div>

              <div className="pt-6 border-t border-[#ffffff20] flex items-start gap-6">
                <div>
                  <h3 className="font-sussie text-white text-sm leading-0">
                    My Network
                  </h3>

                  <p className="text-[10px] mt-3 max-w-[100px] text-[#9399A1] leading-3">
                    Expand your health network
                  </p>
                </div>

                <button className="-mt-1.5 cursor-pointer">
                  <ArrowRight className="size-4 text-white" />
                </button>
              </div>
            </div>

            <div className="h-[386px] w-[208px] bg-[#181818] p-6 flex flex-col items-center overflow-hidden">
              <div className="flex-1">
                <div className="relative h-full bg-red-500">
                  <h1 className="text-[140px] absolute -top-[90px] -left-[44px] text-[#ffffff20] font-medium">
                    23
                  </h1>
                </div>
              </div>

              <div className="pt-6 border-t border-[#ffffff20] flex items-start gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 bg-[#F05211] self-stretch -mt-1.5"></div>

                  <div>
                    <h3 className="font-sussie text-white text-sm leading-0">
                      Live Chat
                    </h3>

                    <p className="text-[10px] mt-3 max-w-[100px] text-[#9399A1] leading-3">
                      Your professional Network
                    </p>
                  </div>
                </div>

                <button className="-mt-1.5 cursor-pointer">
                  <ArrowRight className="size-4 text-white" />
                </button>
              </div>
            </div>

            <div className="h-[386px] w-[208px] bg-[#181818] p-6 flex flex-col items-center">
              <div className="flex-1 flex items-center justify-center relative"></div>

              <div className="pt-6 border-t border-[#ffffff20] flex items-start gap-6">
                <div>
                  <h3 className="font-sussie text-white text-sm leading-0">
                    Peer Discussions
                  </h3>

                  <p className="text-[10px] mt-3 max-w-[100px] text-[#9399A1] leading-3">
                    Expand your health network
                  </p>
                </div>

                <button className="-mt-1.5 cursor-pointer">
                  <ArrowRight className="size-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardOptions;
