import React, { Component } from 'react';
import "./footer.scss";

class Footer extends Component {
    state = {}
    render() {
        return (
            <footer className="page-footer font-small blue" >
                {/* copy-right */}
                < div className="footer-copyright text-center py-3" >
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.talkstechy.com" target="_blank"> talkstechy.com </a>
                </div >
            </footer >
        );
    }
}

export default Footer;
