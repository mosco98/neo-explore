"use client";

import AddressBook from "@/components/address-book";
import ProfileButton from "@/components/profile-button";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const AddressBookPage = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <div className="flex-1 relative flex gap-[129px]">
      <div className="pt-12">
        <div className="inline-flex items-center gap-5 text-[32px] font-medium">
          <button>
            <ArrowLeft className="size-[26px]" />
          </button>
          Address Book
        </div>

        <ProfileButton isOpen={isAccountOpen} onOpenChange={setIsAccountOpen} />
      </div>

      <div className="flex-1 bg-white shadow-address-book flex px-[45px] overflow-hidden">
        <AddressBook />
      </div>
    </div>
  );
};

export default AddressBookPage;
