import { Container } from "react-bootstrap";
import Project from "@/components/sections/project";
import { useReveal } from "@/hooks/useReveal";

const ProjectPage = () => {
    const projectReveal = useReveal<HTMLElement>();
    return (
        <div className="project-screen">
            <section
                ref={projectReveal.ref}
                className={`mt-md-5 mt-2 pt-md-5 pt-0 reveal ${projectReveal.isVisible ? "is-visible" : ""}`}
            >
                <Container>
                    <Project />
                </Container>
            </section>
        </div>
    )
}

export default ProjectPage;