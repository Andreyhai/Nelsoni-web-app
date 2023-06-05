import React from 'react';

import stylesHeader from "./Haeder.module.css"
import {Link} from "react-router-dom";
import {CONTACTS_PAGE_ROUTE, HOME_ROUTE, SERVICES_ROUTE, TEMP_ROUTE, WORKS_PAGE_ROUTE} from "../../routes";

const Logotype = () => {
    return (
        <Link to={HOME_ROUTE}>
            <div className={stylesHeader.logo}>
                <div className={stylesHeader.d}>D</div>
                <div className={stylesHeader.up}>Производство и монтаж </div>
                <div className={stylesHeader.down}>екора</div>
            </div>
        </Link>
    );
}

const Navigation = () => {
    return (
        <nav className={`${stylesHeader.navigation} text-center`}>
            <Link  to={SERVICES_ROUTE}>Услуги</Link>
            <Link to={WORKS_PAGE_ROUTE}>Работы</Link>
            <Link to={TEMP_ROUTE}>Цены</Link>
            <Link to={CONTACTS_PAGE_ROUTE}>Контакты</Link>
        </nav>
    );
}

const Numbers = () => {
    return (
        <div className={stylesHeader.numbers}>
            <div className={stylesHeader.number}>+7(909) <span className={stylesHeader.gold}>904-26-02</span></div>
            <div className={stylesHeader.number}>+7(961) <span className={stylesHeader.gold}>409-99-89</span></div>
        </div>
    );
}

const Icons = () => {
    return (
        <div className={stylesHeader.icons}>
            <a href={"https://ru-ru.facebook.com"}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 24H4C4 24.338 4 25.662 4 26C4 37.028 12.972 46 24 46C35.028 46 44 37.028 44 26C44 25.662 44 24.338 44 24Z" fill="white"/>
                    <path d="M24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43Z" fill="#0D1453"/>
                    <path d="M24 44C12.972 44 4 35.028 4 24C4 12.972 12.972 4 24 4C35.028 4 44 12.972 44 24C44 35.028 35.028 44 24 44ZM24 6C14.075 6 6 14.075 6 24C6 33.925 14.075 42 24 42C33.925 42 42 33.925 42 24C42 14.075 33.925 6 24 6Z" fill="white"/>
                    <path d="M26.573 29.038H31.494L32.259 24.045H26.573V21.31C26.573 19.232 27.248 17.397 29.191 17.397H32.313V13.034C31.764 12.962 30.604 12.8 28.418 12.8C23.839 12.8 21.158 15.211 21.158 20.717V24.046H16.462V29.039H21.158V42.767C22.093 42.901 23.028 43 24 43C24.873 43 25.727 42.919 26.573 42.802V29.038Z" fill="white"/>
                </svg>
            </a>
            <a href={"https://vk.com"}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42 37C42 39.762 39.762 42 37 42H11C8.239 42 6 39.762 6 37V11C6 8.238 8.239 6 11 6H37C39.762 6 42 8.238 42 11V37Z" fill="#0D1453"/>
                    <path d="M35.937 18.041C35.983 17.89 36.005 17.75 35.999 17.625C35.984 17.263 35.735 17 35.149 17H32.531C31.87 17 31.565 17.4 31.387 17.801C31.387 17.801 29.755 21.16 27.874 23.375C27.264 24.016 26.954 24 26.624 24C26.447 24 26 23.786 26 23.199V18.014C26 17.32 25.827 17 25.268 17H20.619C20.212 17 20 17.32 20 17.641C20 18.308 20.898 18.468 21 20.337V23.96C21 24.84 20.847 25 20.517 25C19.627 25 17.875 22 16.702 18.068C16.448 17.294 16.194 17 15.533 17H12.89C12.127 17 12 17.374 12 17.774C12 18.495 12.6 22.393 15.875 26.875C18.25 30.125 21.379 32 24.149 32C25.827 32 25.999 31.573 25.999 30.906V27.934C26 27.133 26.183 27 26.717 27C27.098 27 27.875 27.25 29.375 29C31.105 31.018 31.419 32 32.411 32H35.029C35.637 32 35.986 31.745 36 31.25C36.003 31.124 35.985 30.983 35.944 30.826C35.75 30.25 34.86 28.842 33.75 27.5C33.135 26.757 32.528 26.021 32.249 25.621C32.062 25.36 31.991 25.176 32 25C32.009 24.815 32.105 24.639 32.249 24.393C32.223 24.393 35.607 19.642 35.937 18.041Z" fill="white"/>
                </svg>
            </a>
            <a href={"https://instagram.com"}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 5C10.1664 5 5 10.1664 5 16.5V31.5C5 37.8327 10.1662 43 16.5 43H31.5C37.8329 43 43 37.8329 43 31.5V16.5C43 10.1662 37.8327 5 31.5 5H16.5ZM16.5 8H31.5C36.2112 8 40 11.7878 40 16.5V31.5C40 36.211 36.211 40 31.5 40H16.5C11.7878 40 8 36.2112 8 31.5V16.5C8 11.7876 11.7876 8 16.5 8ZM34 12C32.895 12 32 12.895 32 14C32 15.105 32.895 16 34 16C35.105 16 36 15.105 36 14C36 12.895 35.105 12 34 12ZM24 14C18.4952 14 14 18.4952 14 24C14 29.5048 18.4952 34 24 34C29.5048 34 34 29.5048 34 24C34 18.4952 29.5048 14 24 14ZM24 17C27.8832 17 31 20.1168 31 24C31 27.8832 27.8832 31 24 31C20.1168 31 17 27.8832 17 24C17 20.1168 20.1168 17 24 17Z" fill="white"/>
                </svg>
            </a>
        </div>
    );
}

const Header = () => {
    return (
        <header className={stylesHeader.header }>
            <Logotype />
            <Navigation />
            <Numbers />
            <Icons />
        </header>
    );
};

export default Header;