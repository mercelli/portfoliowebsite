import Projects from "../sections/Projects.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Elena Mercelli Portfolio"
        description="Elena Mercelli's Portfolio to view or download."
        url="/portfolio"
      />

      <Projects
        title="Portfolio"
        description="Click any card to view details."
        headingLevel="h1"
        headingId="portfolio-heading"
        showViewMore={false}
      />
    </>
  );
}
