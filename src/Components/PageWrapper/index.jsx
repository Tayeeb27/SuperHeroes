import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ color: isActive ? '#2B061E' : '#875053'});

const PageWrapper = () => {
    return <>
        <header>
            <nav>
                <NavLink to="/" style={styles}>Home</NavLink>
                <NavLink to="/heroes" style={styles}>All your Heroes</NavLink>
                <NavLink to="/add" style={styles}>Add your favorite heroes</NavLink>
            </nav>
        </header>
        <Outlet />
        <footer>Tayeeb SuperHeroes 2023</footer>
    </>
};

export default PageWrapper;