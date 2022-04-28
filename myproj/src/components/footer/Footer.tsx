

import './footer.css';

type FooterProps = {
    copyright: string; 
}
const Footer: React.FC<FooterProps> = (props) => (
    <footer>Footer {props.copyright} </footer>
)

export default Footer;
