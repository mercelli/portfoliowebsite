import { fragments } from "../data/FragmentsData.jsx";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Fragments() {
  return (
    <>
      <SEO
        title="Fragments placeholder example page"
        description="Example of how to use React fragments on a page with an external data source."
        url="/fragments"
      />
      <Section>
        <Container className="flex flex-col space-y-2">
          {fragments.content}
        </Container>
      </Section>
    </>
  );
}
