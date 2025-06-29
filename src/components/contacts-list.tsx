"use client";

import { clinics } from "@/lib/clinics";
import { diagnosticCentres } from "@/lib/diagnostic-centres";
import { hospitals } from "@/lib/hospitals";
import { pharmacies } from "@/lib/pharmacies";
import { providers } from "@/lib/providers";
import { RefObject, useEffect } from "react";
import { DetailType } from "./address-book";

interface ContactListProps {
  setActiveLetter: (letter: string) => void;
  setSelectedDetails: (detail: DetailType | undefined) => void;
  sectionRefs: RefObject<{
    [key: string]: HTMLElement | null;
  }>;
  selectedType:
    | "providers"
    | "clinics"
    | "hospitals"
    | "diagnostic-centres"
    | "pharmacies";
}

const contactData = {
  providers,
  clinics,
  hospitals,
  "diagnostic-centres": diagnosticCentres,
  pharmacies: pharmacies
};

const ContactList = ({
  setActiveLetter,
  setSelectedDetails,
  sectionRefs,
  selectedType
}: ContactListProps) => {
  // const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const data = contactData[selectedType];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const letter = visible[0].target.getAttribute("data-letter");
          if (letter) {
            setActiveLetter(letter);
          }
        }
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnMouseOver = (detail: DetailType) => {
    setSelectedDetails(detail);
  };

  return (
    <>
      {Object.entries(data).map(([letter, contacts]) => (
        <section
          key={letter}
          ref={(el) => {
            sectionRefs.current[letter] = el;
          }}
          data-letter={letter}
        >
          {contacts.map((item, i) => (
            <div
              key={i}
              role="button"
              className="py-3 flex items-center justify-between border-b border-[#909090] relative cursor-pointer hover:bg-[#90909005] transition group"
              onMouseOver={() => handleOnMouseOver(item)}
            >
              <p className="text-sm font-medium font-mono group-hover:text-[#F05211] transition uppercase">
                {item.name}
              </p>

              <p className="text-[#909090] text-xs capitalize">{item.role}</p>

              <div className="absolute w-[42px] h-[2px] bg-[#909090] top-[99%] group-hover:bg-[#F05211] transition"></div>
            </div>
          ))}
        </section>
      ))}
    </>
  );
};

export default ContactList;
