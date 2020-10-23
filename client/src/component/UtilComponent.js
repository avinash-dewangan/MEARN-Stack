import React, { PureComponent } from 'react';


class UtilComponent extends Component {
    state = {}
    render() {
        return (
            <div className="copy-right">
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.talkstechy.com"> MDBootstrap.com </a>
            </div>
        );
    }
}

export default UtilComponent;