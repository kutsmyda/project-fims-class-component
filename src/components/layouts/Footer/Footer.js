
import styles from './Footer.module.css'

const Footer = ()=>{

    return (
        <div className="">
            <footer className="page-footer grey darken-4">
                <div className="container">
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">My GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );

}

export default Footer;
