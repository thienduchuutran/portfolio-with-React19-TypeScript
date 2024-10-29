import { Col, Row } from 'react-bootstrap';
import Tilt from "react-parallax-tilt";
import avatarImg from "assets/duclogo.jpg";
import './introduction.scss';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
    const { t, i18n } = useTranslation();

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
                        <br />
                        <br />
                        <i>
                            <b className='text-pink-100'> JavaScript {t("introSection.vs")} TypeScript </b>
                        </i>
                        {t("introSection.heading2")}
                        <i>
                            <b className='text-pink-100'> ReactJS - Node.js {t("introSection.vs")} ExpressJS {t("introSection.vs")} NestJS </b>
                        </i>
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
            <div className="about-container d-none d-md-flex">
                <span className="about-label">{t("introSection.about")}</span>
                <span className="vertical-line"></span>
            </div>
        </section>
    )
}

export default Introduction;