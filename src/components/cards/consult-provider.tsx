import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ConsultProviderCardProps {
  name: string;
  img: string;
  role: string;
  id: string;
}

const ConsultProviderCard = ({
  id,
  img,
  name,
  role
}: ConsultProviderCardProps) => {
  return (
    <Link href={`/${id}`}>
      <div className="w-[180px] bg-white border border-[#EEE] hover:bg-[#EEEEEE60] pt-[22px] pb-7 px-4 space-y-16 group transition">
        <div>
          <div className="size-[72px] rounded-full relative overflow-hidden">
            <Image
              src={img}
              alt={name}
              fill
              className="object-cover object-top group-hover:scale-105 transition duration-400 will-change-transform"
            />
          </div>
          <div className="mt-5">
            <p className="text-sm font-medium capitalize">{name}</p>
            <p className="text-[#909090] text-xs capitalize mt-[0.5px]">
              {role}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-medium">
          Book a consult
          <ArrowRight className="size-5 -rotate-45 text-[#9B9BA5] group-hover:rotate-0 will-change-transform transition" />
        </div>
      </div>
    </Link>
  );
};

export default ConsultProviderCard;
