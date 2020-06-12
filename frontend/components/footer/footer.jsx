import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component {
    render(){
        return (
            <footer className="splash-footer">
                <ul className="footer-nav">
                    <li className="footer-nav-item">
                        <a href="https://www.linkedin.com/in/eric-lee-b43561130/">
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']}className="fa-linkedin" />
                        </a>
                    </li>
                    <li className="footer-nav-item">
                        <a href="https://github.com/eric-2311">
                            <FontAwesomeIcon icon={['fab', 'github']}className="fa-github" />
                        </a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer;