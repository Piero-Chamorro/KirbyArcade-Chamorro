import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBar';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Kirby Arcade</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about-us">
                        Sobre Nosotros
                    </NavLink>
                    <NavLink to="/our-products">
                        Productos
                    </NavLink>
                    <NavLink to="/contact-us">
                        Contáctanos
                    </NavLink>
                    <NavLink to="/sign-up">
                        Regístrate
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/sign-in'>
                        Iniciar Sesión
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
