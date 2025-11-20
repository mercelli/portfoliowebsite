import { fragments } from "../data/FragmentsData.jsx";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function About() {
  return (
    <>
      <Section>
        <SEO
          title="About Elena Mercelli"
          description="All about Elena Mercelli."
          url="/about"
        />
        <Container>
          <h1 className="heading-page">About Me</h1>
          <div className="mt-2 body-default"></div>
          <div>{fragments.content}</div>
        </Container>
      </Section>
    </>
  );
}
