import * as React from 'react';
// import { FontAwesome } from 'react-web-vector-icons';
import './navigation.css';
import { NavLink } from 'react-router-dom'

interface Props {
    history: () => void
}

interface State {

}

class Navigation extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <NavLink activeClassName="navigation__activeLink" to="/home">
                            <div className="navigation__link">
                                {/* <FontAwesome
                                    name='home'
                                    color='#f5905b'
                                    size={30}
                                    style={{
                                        verticalAlign: 'middle'
                                    }}
                                /> */}
                                <span className="navigation__link-name">Home</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Navigation;