import { Col, Row } from "react-bootstrap";
import AnimationLottie from "@/components/share/animation-lottie";
import codingJSON from 'assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";

import GlowCard from "@/components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "@/components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";

type TLanguage = "vi" | "en"
const About = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="text-center mb-md-5 mb-2">{t("about.title")}<span className="brand-red"> {t("about.who")}</span> </h3>
                    <div>
                        <div>
                            <p> {t("about.description1")}</p>

                            <p> {t("about.flex")}</p>

                            <p> {t("about.wish")}</p>
                        </div>
                    </div>
                    <div>
                        <p>{t("about.side")}

                        </p>
                        <ul>
                            <li>{t("about.act1")}</li>
                            <li>{t("about.act2")}</li>
                            <li>{t("about.act3")}</li>
                            <li>{t("about.act4")}</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-center brand-red">{t("about.verse")}</p>
                        <p className="text-center brand-red">--{t("about.destination")} &#10013;</p>

                    </div>
                </Col >
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div><h4 className="text-center brand-red">{t("about.education")}</h4></div>
                        <div >
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>2022-2026</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">{t("about.degree")}</p>
                                                <p className="company">{t("about.school")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className=" mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">{t("about.connect")}</h3>
                    <SocialMedia
                        github={APP_DATA.GITHUB_URL}
                        linkedin={APP_DATA.LINKEDIN_URL}
                        gmail={APP_DATA.GMAIL_URL}
                    />
                </Col >
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">thienductranhuu2784@gmail.com</h4>
                </Col>
            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default About;