import Link from "next/link";
import Logo from "./logo";
import Menu from "./menu";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-background py-6 z-[999999999999]">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <Logo />
        </Link>

        <div className="flex items-center gap-8">
          <button>
            <svg
              width={43}
              height={20}
              viewBox="0 0 43 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.723145"
                y="2.98438"
                width="2.21538"
                height="14.0308"
                fill="black"
              />
              <rect
                x="7.73853"
                y="0.399902"
                width="2.21538"
                height="19.2"
                fill="black"
              />
              <rect
                x="14.7539"
                y="2.98438"
                width="2.21538"
                height="14.0308"
                fill="black"
              />
              <rect
                x="21.7693"
                y="0.399902"
                width="2.21538"
                height="19.2"
                fill="black"
              />
              <rect
                x="28.7847"
                y="2.98438"
                width="2.21538"
                height="14.0308"
                fill="black"
              />
              <circle
                cx="39.4"
                cy="3.9999"
                r="2.7"
                stroke="black"
                strokeWidth="1.8"
              />
            </svg>
          </button>

          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
