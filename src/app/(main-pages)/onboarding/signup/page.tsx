"use client";

import { ArrowRight } from "lucide-react";

const SignupPage = () => {
  return (
    <div className="flex-1 flex">
      <div className="flex-1">
        <div className="h-[390px] bg-[#0A0A0A] mt-[140px] flex items-center justify-center relative">
          <div className="w-[452px]">
            <div className="space-y-2">
              <label className="text-white text-[20px] block">
                What is your First Name?
              </label>

              <input
                className="border-b block w-full border-[#454545] h-10 outline-none placeholder:text-[#FFFFFF80] text-white"
                placeholder="Type your name here..."
              />
            </div>
          </div>

          <p className="absolute top-6 left-6 text-[#909090] text-sm">01</p>

          <div className="absolute bottom-0 left-0 flex items-center justify-between text-white w-full px-6 pb-6">
            <p className="text-[18px]">Sign up</p>

            <button>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-10">
        <div className="w-[200px] h-[320px] border border-[#C5C5C5] p-6 border-b-[#FF6D29] border-b-[3px] relative">
          <p className="text-[#909090] absolute top-6 right-6">02</p>

          <p className="text-[24px] absolute bottom-6 right-6 leading-8 text-right">
            Profile <br /> Setup
          </p>
        </div>

        <div className="w-[200px] h-[320px] border border-[#C5C5C5] p-6 border-b-[#F0CE10] border-b-[3px] relative">
          <p className="text-[#909090] absolute top-6 right-6">03</p>

          <p className="text-[24px] absolute bottom-6 right-6 leading-8 text-right">
            License <br /> Verification
          </p>
        </div>

        <div className="w-[200px] h-[320px] border border-[#C5C5C5] p-6 border-b-[#FF6D29] border-b-[3px] relative">
          <p className="text-[#909090] absolute top-6 right-6">04</p>

          <p className="text-[24px] absolute bottom-6 right-6 leading-8 text-right">
            KYC <br /> Verification
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
