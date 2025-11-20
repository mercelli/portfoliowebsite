import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import Section from "../components/ui/Section.jsx";

export default function FinalCTA() {
  return (
    <Section
      aria-labelledby="cta-heading"
      className="bg-gradient-to-b from-white/5 to-transparent text-center py-20"
    >
      <Container>
        <h2 id="cta-heading" className="heading-cta">
          Like what you see?
        </h2>
        <p className="mt-3 body-default max-w-prose mx-auto">
          Contact me and let's chat!
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button as="a" href="/contact" variant="primary">
            Contact Me
          </Button>
        </div>
      </Container>
    </Section>
  );
}
