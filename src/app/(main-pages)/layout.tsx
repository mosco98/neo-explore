import Navbar from "@/components/navbar";

interface MainPagesLayoutProps {
  children: React.ReactNode;
}

const MainPagesLayout = ({ children }: MainPagesLayoutProps) => {
  return (
    <>
      <Navbar />

      <main className="py-20 min-h-screen flex">
        <div className="pt-10 flex flex-col justify-between container">
          {children}
        </div>
      </main>
    </>
  );
};

export default MainPagesLayout;
