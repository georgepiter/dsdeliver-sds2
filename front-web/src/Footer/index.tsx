import './styler.css'
import { ReactComponent as YoutubeIcon } from './youtube.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'
import { ReactComponent as InstagramIcon } from './instagram.svg'

function Footer() {
    return (
        <footer className="main-footer">
            Software Web desenvolvido durante a 2ª ed. do evento Semana DevSuperior <br/> George Piter
            <div className="footer-icons">
                <a href="linkaqui" target="_new">
                    <YoutubeIcon />
                </a>

                <a href="https://www.linkedin.com/in/gpiter" target="_new">
                    <LinkedinIcon />
                </a>

                <a href="linkaqui" target="_new">
                    <InstagramIcon />
                </a>

            </div>
        </footer>
    )
}

export default Footer;