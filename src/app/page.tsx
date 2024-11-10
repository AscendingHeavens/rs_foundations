import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";
import About from "@/components/About";

export const Home = () => {
  return (
    <Container>
      <Hero />
      <SectionTitle preTitle="About" title="About Us">
        We are a team of talented developers making reliable software for you.
      </SectionTitle>
      <About />
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
    </Container>
  );
};

export default Home;
