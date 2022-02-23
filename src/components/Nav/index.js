import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="ui secondary pointing menu">
            {/* <Link className="item">
                Home
            </Link> */}
            <Link className="item" to='students'>
                Students
            </Link>
            {/* <Link className="item">
                Classes
            </Link>
            <div className="right menu">
                <Link className="ui item">
                    Login
                </Link>
            </div> */}
        </div>
    );
}

export default Nav;
