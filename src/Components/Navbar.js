import React from 'react';
import {Link as NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink to="/home"  className='nav-link'>Home                </NavLink>
                <NavLink to="/Blogs" className='nav-link'>Blogs                </NavLink>
                <NavLink to="/contract" className='nav-link'>Contract                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;