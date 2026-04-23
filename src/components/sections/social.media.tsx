import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { TbBrandGmail } from "react-icons/tb";
interface IProps {
    github: string;
    linkedin: string;
    gmail: string;
}

const SocialMedia = (props: IProps) => {
    const { github, linkedin, gmail } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={github} target='_blank' className="highlight" title="Github Duc">
                <VscGithubInverted size={30} />
            </a>
            <a href={linkedin} target='_blank' className="highlight" title="Linkedin Duc">
                <FaLinkedin size={30} />
            </a>
            <a href={gmail} target='_blank' className="highlight" title="Gmail Duc">
                <TbBrandGmail size={30} />
            </a>
        </div>
    )
}

export default SocialMedia;