import FacebookIcon from "../images/FacebookIcon.svg"
import GitHubIcon from "../images/GitHubIcon.svg"
import InstagramIcon from "../images/InstagramIcon.svg"
import LinkedinIcon from "../images/LinkedinIcon.svg"
import TwitterIcon from "../images/TwitterIcon.svg"

const Footer = () => {
    return(
        <footer className="Footer">
            <img src={FacebookIcon} alt="SocialMediaIcon"/>
            <img src={GitHubIcon} alt="SocialMediaIcon"/>
            <img src={InstagramIcon} alt="SocialMediaIcon"/>
            <img src={LinkedinIcon} alt="SocialMediaIcon"/>
            <img src={TwitterIcon} alt="SocialMediaIcon"/>
        </footer>
    )
}

export default Footer;