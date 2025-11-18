import Section from "../Components/ui/Section.jsx";
import Container from "../Components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Resume() {
  return (
    <>
      <SEO
        title="Elena Mercelli Resume"
        description="View my professional resume and experience as a full-stack Web Developer."
        url="/resume"
      />

      <Section>
        <Container>
          <h1 className="heading-page">My Resume</h1>
          <p className="mt-2 body-default">Placeholder content.</p>
          <iframe
            src="src\assets\Test_Resume.pdf
        "
            width="100%"
            height="800px"
            title="Elena Mercelli Resume"
            className="mt-4 border-gray-300 rounded-lg shadow-lg"
          >
            <p>
              Your browser does not support iframes.
              <a href="src\assets\Test_Resume.pdf">
                Click here to view the pdf directly.
              </a>
            </p>
          </iframe>
        </Container>
      </Section>
    </>
  );
}
