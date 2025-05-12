import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  id: string;
  number: string;
  img: string;
  title: string;
  subtitle: string;
}

const ArticleCard = ({
  id,
  img,
  number,
  subtitle,
  title
}: ArticleCardProps) => {
  return (
    <Link href={`/${id}`}>
      <div className="w-[161px] group hover:bg-[#EEEEEE30] transition">
        <p className="text-[#9B9BA5] text-xs font-sussie">{number}/</p>

        <div className="mt-5">
          <h2 className="text-sm leading-4 font-medium">{title}</h2>
          <p className="line-clamp-2 text-xs text-[#9B9BA5] mt-1">{subtitle}</p>
        </div>

        <div className="mt-4 aspect-[1/1.5] relative overflow-hidden">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover object-top group-hover:scale-105 transition duration-400 will-change-transform"
          />
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
