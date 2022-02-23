import React from 'react';

const Nav = () => {
    return (
        <div className="ui secondary pointing menu">
            <a className="item">
                Home
            </a>
            <a className="item active">
                Students
            </a>
            <a className="item">
                Classes
            </a>
            <div className="right menu">
                <a className="ui item">
                    Login
                </a>
            </div>
        </div>
    );
}

export default Nav;
