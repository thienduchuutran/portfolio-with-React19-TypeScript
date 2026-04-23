import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "components/sections/hero/hero.left";
import HeroRight from "components/sections/hero/hero.right";
import { MdFileDownload } from "react-icons/md";
import bg from 'assets/section.svg';
import Introduction from "components/sections/introduction";
import ResizeButton from "components/sections/resize.button";
import { useTranslation } from "react-i18next";
import Divider from "@/components/sections/divider";
import Experience from "components/sections/experience";
import Skill from "components/sections/skill";
import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

const HomePage = () => {
    const { t } = useTranslation();

    const expRef = useRef<HTMLElement>(null) //null here is initial state

    const introReveal = useReveal<HTMLElement>();
    const expReveal = useReveal<HTMLElement>();
    const skillReveal = useReveal<HTMLElement>();

    const scrollToExperienceSection = () => {
        expRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const handleDownloadCV = () => {
        openInNewTab('/resume.pdf')
    }

    return (
        <div className="homepage-screen">
            <div style={{
                backgroundImage: `url(${bg})`,
                width: "100%",
                height: 500,
                position: "absolute",
                top: 0,
                backgroundRepeat: "no-repeat",
                zIndex: 0
            }}>
            </div>
            <section className="mt-md-7 mt-2" >
                <Container
                    style={{ position: "relative" }}
                >
                    <Row>
                        <Col md={6}>
                            <HeroLeft
                                scrollToExperienceSection={scrollToExperienceSection}
                            />
                        </Col>
                        <Col md={6} className="d-none d-md-block">
                            <HeroRight />
                        </Col>
                        <Col xs={12} className="d-md-none d-flex mt-4 justify-content-center">
                            <ResizeButton
                                btnText={t("heroSection.cv")}
                                btnIcons={<MdFileDownload />}
                                onClick={handleDownloadCV}

                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section
                ref={introReveal.ref}
                className={`reveal ${introReveal.isVisible ? "is-visible" : ""}`}
            >
                <Container>
                    <Introduction />
                </Container>
            </section>
            <Divider />
            <section
                ref={(node) => {
                    //one DOM node, two refs: React 19 marks RefObject.current readonly, so cast to write
                    (expRef as { current: HTMLElement | null }).current = node;
                    (expReveal.ref as { current: HTMLElement | null }).current = node;
                }}
                className={`reveal ${expReveal.isVisible ? "is-visible" : ""}`}
            >
                <Container >
                    <Experience />
                </Container>
            </section>
            <Divider />
            <section
                ref={skillReveal.ref}
                className={`reveal ${skillReveal.isVisible ? "is-visible" : ""}`}
            >
                <Container>
                    <Skill />
                </Container>
            </section>

        </div>
    )
}

export default HomePage;
