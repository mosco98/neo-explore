"use client";

import { providers } from "@/lib/providers";
import { useEffect, useRef } from "react";
import { DetailType } from "./address-book";

interface ContactListProps {
  setActiveLetter: (letter: string) => void;
  setSelectedDetails: (detail: DetailType | undefined) => void;
}

const ContactList = ({
  setActiveLetter,
  setSelectedDetails
}: ContactListProps) => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

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
  }, []);

  const handleOnMouseOver = (detail: { name: string; role: string }) => {
    setSelectedDetails(detail);
  };

  return (
    <>
      {Object.entries(providers).map(([letter, contacts]) => (
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
              className="py-3 uppercase flex items-center justify-between border-b relative cursor-pointer hover:bg-[#90909005] transition group"
              onMouseOver={() => handleOnMouseOver(item)}
            >
              <p className="text-sm font-medium font-mono group-hover:text-[#F05211] transition">
                {item.name}
              </p>

              <p className="text-[#909090] text-[11px]">{item.role}</p>

              <div className="absolute w-[42px] h-[2px] bg-black top-[99%] group-hover:bg-[#F05211] transition"></div>
            </div>
          ))}
        </section>
      ))}
    </>
  );
};

export default ContactList;
