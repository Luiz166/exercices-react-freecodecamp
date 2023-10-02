import MailIcon from "../images/Mail.svg";
import PersonPicture from "../images/Rectangle90.png";

const MainContent = () => {
    return (
        <section className="MainContent">
            <header className="Header">
                <img src={PersonPicture} alt="PersonPicture" />
            </header>
            <h1>Laura Smith</h1>
            <span>Frontend Developer</span>
            <small>laurasmith.website</small>
            <a href="#">
                <img src={MailIcon} alt="MailIcon" />
                Email
            </a>
            <section className="About">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </section>
            <section className="Interests">
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </section>
        </section>
    )
}

export default MainContent;