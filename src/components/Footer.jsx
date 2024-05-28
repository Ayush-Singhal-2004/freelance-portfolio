import InstagramLogo from "./InstgramLogo"
import WhatsAppLogo from "./WhatsAppLogo"
import EmailLogo from "./EmailLogo"

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <InstagramLogo />
                <WhatsAppLogo />
                <EmailLogo />
            </div>
        </footer>
    )
}

export default Footer