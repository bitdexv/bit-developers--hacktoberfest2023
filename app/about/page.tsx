import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Welcome to Bit Developers, where innovation meets code. We are a passionate software team dedicated to crafting cutting-edge solutions for the digital world. With a strong focus on SaaS applications and startup pages, we bring your ideas to life, one pixel at a time."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
