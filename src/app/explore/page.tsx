import ArticleCard from "@/components/cards/article-card";
import ConsultProviderCard from "@/components/cards/consult-provider";

const ExplorePage = () => {
  return (
    <div className="container py-20">
      {/* <div className="w-[280px] h-[600px] bg-[#0A0A0A]"></div> */}

      <section>
        <h2 className="text-2xl font-semibold">Consult Cards</h2>
        <div className="flex items-center gap-10 mt-6 flex-wrap">
          <ConsultProviderCard
            id=""
            img={"/provider.webp"}
            name="Moses Enyinnaya"
            role="doctor"
          />

          <ConsultProviderCard
            id=""
            img={"/provider.webp"}
            name="Moses Enyinnaya"
            role="doctor"
          />

          <ConsultProviderCard
            id=""
            img={"/provider.webp"}
            name="Moses Enyinnaya"
            role="doctor"
          />

          <ConsultProviderCard
            id=""
            img={"/provider.webp"}
            name="Moses Enyinnaya"
            role="doctor"
          />
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold">Article Cards</h2>
        <div className="flex items-center gap-10 mt-6 flex-wrap">
          <ArticleCard
            id=""
            img="/blog-1.webp"
            number="01"
            title="Staying Healthy to Practice Mindfulness"
            subtitle="Symptoms are chills, fever and sweating, usually a sign of weakness and nothing more"
          />

          <ArticleCard
            id=""
            img="/blog-2.webp"
            number="02"
            title="Staying Healthy to Practice Mindfulness"
            subtitle="Symptoms are chills, fever and sweating, usually a sign of weakness and nothing more"
          />

          <ArticleCard
            id=""
            img="/blog-3.webp"
            number="03"
            title="Staying Healthy to Practice Mindfulness"
            subtitle="Symptoms are chills, fever and sweating, usually a sign of weakness and nothing more"
          />

          <ArticleCard
            id=""
            img="/blog-2.webp"
            number="04"
            title="Staying Healthy to Practice Mindfulness"
            subtitle="Symptoms are chills, fever and sweating, usually a sign of weakness and nothing more"
          />
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
