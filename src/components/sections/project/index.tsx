import { Col, Row } from "react-bootstrap"
import ProjectCard from "./project.card";
import { PROJECTS } from "helpers/data";
import { useTranslation } from "react-i18next";

type TLanguage = "vi" | "en"

const Project = () => {
    const { t, i18n } = useTranslation();

    const currentLanguage = (i18n.resolvedLanguage) as TLanguage;
    return (
        <>
            <Row>
                <Col xs={12}>
                {currentLanguage == "en"? 
                    <h3 className="text-center">{t("projects.header")} <span className="brand-red">{t("projects.work")}</span> </h3>
                :
                    <h3 className="text-center"><span className="brand-red">{t("projects.header")}</span> {t("projects.work")} </h3>
                }
                    <h6 className="text-center mb-md-5 mb-2">{t("projects.description")}</h6>
                </Col>
            </Row>
            <Row
                style={{ justifyContent: "center", paddingBottom: "10px" }}
            >
                {PROJECTS?.map(item => {
                    return (
                        <Col md={4} className="project-card" key={item.id}>
                            <ProjectCard
                                imgPath={item.imgPath}
                                title={item.title[currentLanguage]}
                                description={item.description[currentLanguage]}
                                githubLink={item.githubLink}
                                // demoLink={item.demoLink}
                            />
                        </Col>
                    )
                })}

            </Row>
            <div className="mb-7"></div>
        </>
    )
}

export default Project;