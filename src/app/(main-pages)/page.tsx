import DashboardOptions from "@/components/dashboard-options";

const HomePage = () => {
  return (
    <>
      <div className="max-w-[261px] pt-10">
        <h1 className="font-sussie text-[40px] font-medium">Connections</h1>
        <p className="text-sm text-[#4D5761]">
          Connect with colleagues and build your professional network and engage
          in.
        </p>
      </div>

      <DashboardOptions />
    </>
  );
};

export default HomePage;
