import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import { techstack } from "../data/techstack.js";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const iconMap = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: IoLogoJavascript,
  react: FaReact,
  tailwind: RiTailwindCssFill,
};

export default function TechStack() {
  return (
    <Section className="py-12 sm:py-16" aria-labelledby="techstack-heading">
      <Container>
        <header className="text-center">
          <h2 id="techstack-heading" className="heading-section">
            My Tech Stack
          </h2>
          <h3 className="mt-2 subheading-muted">
            Tools I have been using lately
          </h3>
        </header>

        {/* Tech Stack Grid */}
        <ul
          role="list"
          className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center"
        >
          {techstack.map((tech) => {
            const IconComponent = iconMap[tech.iconId];
            return (
              <li key={tech.id} className="text-center">
                <a
                  href={tech.href}
                  title={tech.label}
                  aria-label={tech.label}
                  className="group block"
                  target="_black"
                  rel="noreferrer"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center ounded-xl hover-scale">
                    {IconComponent && (
                      <IconComponent
                        className="h-12 w-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: tech.color }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <span className="mt-2 block text-label goup-hover:text-white/80 transition-colors">
                    {tech.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
