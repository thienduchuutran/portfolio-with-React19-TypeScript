import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { TbBrandGmail } from "react-icons/tb";
interface IProps{
    github: string;
    linkedin: string;
    gmail: string;
}

const SocialMedia = (props: IProps) => {
    const { github, linkedin, gmail } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={github} target='_blank' className="highlight" title="Youtube Hỏi Dân IT">
                <VscGithubInverted size={30} />
            </a>
            <a href={linkedin} target='_blank' className="highlight" title="Tiktok Hỏi Dân IT">
                <FaLinkedin size={30} />
            </a>
            <a href={gmail} target='_blank' className="highlight" title="Udemy Hỏi Dân IT">
                <TbBrandGmail size={30} />
            </a>
        </div>
    )
}

export default SocialMedia;