
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { useCurrentApp } from 'components/context/app.context';
import { useTranslation } from 'react-i18next';
import { NavDropdown } from 'react-bootstrap';
import viFlag from 'assets/svg/language/vi.svg';
import enFlag from 'assets/svg/language/en.svg';

type ThemeContextType = "dark" | "light"
type LangType = "vi" | "en"

function AppHeader() {
    const { theme, setTheme } = useCurrentApp();
    const { t, i18n } = useTranslation();
    const [expanded, setExpanded] = useState(false);

    const handleMode = (mode: ThemeContextType) => {
        localStorage.setItem("theme", mode);
        document.documentElement.setAttribute('data-bs-theme', mode);
        setTheme(mode);
    }

    const handleLanguage = (lang: LangType) => {
        i18n.changeLanguage(lang)
        localStorage.setItem("lang", lang);
        document.documentElement.setAttribute('data-bs-lang', lang);
    }

    const renderFlag = (language: string) => {
        return (
            <img
                style={{ height: 20, width: 20 }}
                src={language === "en" ? enFlag : viFlag} alt={language}
            />
        )
    }

    return (
        <Navbar
            data-bs-theme={theme}
            expand="lg"
            expanded={expanded}
            onToggle={setExpanded}
            className="bg-body-tertiary"
            style={{ zIndex: 10,
                position: 'sticky',
                top: 0
             }}
        >
            <Container>
                <Link className="navbar-brand" to="/">
                    <span className='brand-green'>
                        {t("appHeader.brand")}
                    </span>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/" onClick={() => setExpanded(false)}>{t("appHeader.home")}</NavLink>
                        <NavLink className="nav-link" to="/project" onClick={() => setExpanded(false)}>{t("appHeader.project")}</NavLink>
                        <NavLink className="nav-link" to="/about" onClick={() => setExpanded(false)}>{t("appHeader.about")}</NavLink>
                    </Nav>
                    <Nav className="ms-auto">
                        <div className='nav-link' style={{ cursor: "pointer" }}>
                            {theme === "light" ?
                                <MdOutlineLightMode
                                    onClick={() => handleMode("dark")}
                                    style={{ fontSize: 20 }}
                                />
                                :
                                <MdNightlight
                                    onClick={() => handleMode("light")}
                                    style={{ fontSize: 20 }}
                                />
                            }
                        </div>

                        <NavDropdown
                            title={renderFlag(i18n.resolvedLanguage!)}
                        >
                            <div
                                onClick={() => handleLanguage("en")}
                                className='dropdown-item d-flex gap-2 align-items-center' style={{ cursor: "pointer" }}>
                                <img
                                    style={{ height: 20, width: 20 }}
                                    src={enFlag} alt='english'
                                />
                                <span>English</span>

                            </div>
                            <div
                                onClick={() => handleLanguage("vi")}
                                className='dropdown-item d-flex gap-2 align-items-center' style={{ cursor: "pointer" }}>
                                <img
                                    style={{ height: 20, width: 20 }}
                                    src={viFlag} alt='vietnamese'
                                />
                                <span>Tiếng Việt</span>
                            </div>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppHeader;
