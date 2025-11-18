import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import TechStack from "../sections/TechStack.jsx";
import Projects from "../sections/Projects.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import FinalCTA from "../sections/FinalCTA.jsx";

export default function Home() {
  return (
    <div>
      <Section
        as="section"
        aria-labelledby="intro-heading"
        className="min-h-[80vh] grid place-items-center bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1d]"
      >
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Text content - 2/3rds */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h1 id="intro-heading" className="heading-hero">
                Hello there!
              </h1>
              <h2 className="mt-4 max-w-prose lg:mx-0 mx-auto body-large">
                I'm Elena Mercelli and welcome to my portfolio. I design
                websites.
              </h2>
              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap lg:justify-start justify-center gap-4">
                <Button
                  as="a"
                  href="/portfolio"
                  aria-label="Check out my work"
                  variant="primary"
                >
                  Check out my work
                </Button>
                <Button
                  as="a"
                  href="/resume"
                  aria-label="Download my resume"
                  variant="secondary"
                >
                  Download my resume
                </Button>
              </div>
            </div>
            {/* Circular Image - 1/3 */}

            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="w-64 h-64 lg:w-80 lg:h-80 card-avatar">
                <img
                  src="src\assets\1.jpg"
                  alt="Joe Anonymous"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <TechStack />
      <Projects limit={6} />
      <Testimonials limit={3} />
      <FinalCTA />
    </div>
  );
}
