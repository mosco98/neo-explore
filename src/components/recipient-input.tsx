"use client";

import { clinics } from "@/lib/clinics";
import { diagnosticCentres } from "@/lib/diagnostic-centres";
import { hospitals } from "@/lib/hospitals";
import { pharmacies } from "@/lib/pharmacies";
import { providers } from "@/lib/providers";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { DetailType } from "./address-book";

interface RecipientInputProps {
  selectedRecipient: DetailType;
}

const RecipientInput = ({ selectedRecipient }: RecipientInputProps) => {
  const [searchResults, setSearchResults] = useState<DetailType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [selectedRecipients, setSelectedRecipients] = useState<DetailType[]>(
    [selectedRecipient] // Initialize with the selected recipient
  );

  const allClinics = Object.values(clinics).flat();
  const allProviders = Object.values(providers).flat();
  const allHospitals = Object.values(hospitals).flat();
  const allDiagnosticCentres = Object.values(diagnosticCentres).flat();
  const allPharmacies = Object.values(pharmacies).flat();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Combine all facilities into a single array
  const allFacilities: DetailType[] = useMemo(() => {
    const combined = [
      ...allClinics,
      ...allProviders,
      ...allHospitals,
      ...allDiagnosticCentres,
      ...allPharmacies
    ];

    const seen = new Set<string>();
    return combined.filter((facility) => {
      if (seen.has(facility.name)) return false;
      seen.add(facility.name);
      return true;
    });
  }, []);

  useEffect(() => {
    if (inputValue) {
      setIsOpen(true);

      const results = allFacilities.filter(
        (clinic) =>
          clinic.name.toLowerCase().includes(inputValue.toLowerCase()) &&
          !selectedRecipients.some(
            (recipient) => recipient.name === clinic.name
          )
      );

      setSearchResults(results);
    } else {
      setIsOpen(false);
      setSearchResults([]);
    }
  }, [allFacilities, inputValue]);

  const handleRecipientSelect = (recipient: DetailType) => {
    if (!selectedRecipients.some((r) => r.name === recipient.name)) {
      setSelectedRecipients((prev) => [...prev, recipient]);
      setInputValue("");
      setIsOpen(false);
    }
  };

  const handleRemoveRecipient = (recipient: DetailType) => {
    setSelectedRecipients((prev) =>
      prev.filter((r) => r.name !== recipient.name)
    );
  };

  return (
    <div className="flex items-center gap-2 flex-wrap flex-1">
      {selectedRecipients.map((recipient, index) => (
        <div
          key={index}
          className="h-8 px-2 flex items-center gap-2 bg-[#F4F5F6]"
        >
          <div className="size-8 rounded-full relative overflow-hidden">
            <Image
              src={recipient.avatar}
              className="object-cover"
              fill
              alt="Provider"
            />
          </div>

          <p className="font-semibold">{recipient.name}</p>

          <button onClick={() => handleRemoveRecipient(recipient)}>
            <X className="size-4 text-[#98A2B3]" />
          </button>
        </div>
      ))}

      <div ref={ref} className="flex-1 relative min-w-[100px]">
        <input
          className="w-full outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              className="absolute w-[250px] max-h-[250px] bg-white shadow-address-book border top-full mt-1.5 overflow-y-auto z-[999999]"
            >
              {searchResults.length > 0 && (
                <ul>
                  {searchResults.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm py-1.5 px-2 hover:bg-[#F4F5F6] cursor-pointer transition flex items-center justify-between"
                      role="button"
                      onClick={() => handleRecipientSelect(item)}
                    >
                      {item.name}

                      {/* {item.role && (
                        <span className="text-xs">{item.role}</span>
                      )} */}
                    </li>
                  ))}
                </ul>
              )}

              {searchResults.length === 0 && (
                <div className="text-sm text-center py-4">No results found</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RecipientInput;
