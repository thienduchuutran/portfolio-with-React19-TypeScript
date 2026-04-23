import { Container } from "react-bootstrap";
import About from "components/sections/about";
import { useReveal } from "@/hooks/useReveal";

const AboutPage = () => {
    const aboutReveal = useReveal<HTMLElement>();
    return (
        <div className="about-screen">
            <section
                ref={aboutReveal.ref}
                className={`mt-md-5 mt-2 pt-md-5 pt-0 reveal ${aboutReveal.isVisible ? "is-visible" : ""}`}
            >
                <Container>
                    <About />
                </Container>
            </section>
        </div>
    )
}

export default AboutPage;