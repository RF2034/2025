import RegistrationButton from "@/components/RegistrationButton";
import Link from "next/link";

const HeroSection = () => (
  <section className="hero min-h-screen"
    style={{
      backgroundImage:
        "url(https://images.schoolrave.net/cdn-cgi/image/f=webp/day1_DSC_0039.JPG)",
    }}
  >
    <div className="hero-overlay"></div>
    <div className="hero-content text-center text-base-content">
      <div className="max-w-sm md:max-w-md lg:max-w-2xl mx-auto">
        <div className="mb-8">
          <img
            src="https://logos.schoolrave.net/cdn-cgi/image/f=webp/schoolrave_logo_W.png"
            alt="ガッコウレイヴ ロゴ"
            className="w-72 md:w-96 lg:w-[50rem] xl:w-[80rem] mx-auto mb-6"
          />
        </div>
        <h2 className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          廃校で、踊ろう
        </h2>
        <div className="flex flex-col gap-4 justify-center items-center">
          <RegistrationButton size="3xl" />
          <Link href="/about" className="btn btn-soft btn-lg">概要を見る</Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
