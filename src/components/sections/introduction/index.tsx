import { Col, Row } from 'react-bootstrap';
import Tilt from "react-parallax-tilt";
import avatarImg from "assets/duclogo.jpg";
import './introduction.scss';
import { useTranslation } from 'react-i18next';
import { useScrollParallax } from '@/hooks/useScrollParallax';

const Introduction = () => {
    const { t, i18n } = useTranslation();

    // Foreground accent drifts slightly UP relative to scroll -> reads as a "close" layer.
    const aboutLabelRef = useScrollParallax<HTMLDivElement>({ speed: -0.08 });

    return (
        <section className='introduction-section my-5 my-md-7' style={{ position: "relative" }}>
            <Row>
                <Col xs={12} md={9}>
                    <h2 className='text-center text-md-start'>
                        {i18n.resolvedLanguage === "en" ? <>
                            LET ME <span className='text-pink-100'> INTRODUCE </span> MYSELF
                        </>
                            :
                            <>
                                <span className='text-pink-100'>GIỚI THIỆU</span> BẢN THÂN
                            </>
                        }
                    </h2>
                    <br />
                    <p>
                        {t("introSection.heading1")}
                        {/* <br />
                        <br /> */}
                        <i>
                            <b className='text-pink-100'> React frontends {t("introSection.vs")} Node.js APIs {t("introSection.heading7")}</b>
                        </i>
                        {t("introSection.heading2")}
                        <i>
                            <b className='text-pink-100'> {t("introSection.heading6")}</b>
                        </i>
                        <br />
                        <br />
                        {t("introSection.heading3")} &nbsp;
                        <br/>
                        <br/>
                        <i>
                            <b>
                                {t("introSection.heading4")}
                            </b>
                        </i>
                        <br />

                    </p>
                </Col>
                <Col md={3} className='d-md-block d-none'>
                    <Tilt>
                        <img src={avatarImg} style={{borderRadius: "100%"}} className="img-fluid" alt="avatar" />
                    </Tilt>
                </Col>
            </Row>
            <div ref={aboutLabelRef} className="about-container d-none d-md-flex">
                <span className="about-label">{t("introSection.about")}</span>
                <span className="vertical-line"></span>
            </div>
        </section>
    )
}

export default Introduction;