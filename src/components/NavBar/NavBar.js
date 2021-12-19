import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #070a0d;
    height: 80px;
    display: flex;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 9;
    justify-content: flex-start;
`;

export const NavLink = styled(Link)`
    color: #eeeeee;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #EB6896;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #eeeeee;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    white-space: nowrap;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    justify-content: flex-end;
    width: 100vw;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #eb6896;
    padding: 10px 22px;
    color: #eeeeee;
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    margin-left: 24px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #eeeeee;
        color: #070a0d;
    }
`;


