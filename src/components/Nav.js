import React, { StyleSheet } from 'react';

const Nav = () => {

    const style = {
        menu: {
            width: "100%",
            height: "50px",
            backgroundColor: "#222",
            textAlign: "center"
        },
        navItem: {
            color: "#fff",
            marginTop: "5px"
        }
    };
    return (
        <nav className="nav justify-content-center" style={style.menu}>
            <a className="nav-link" href="/" style={style.navItem}>Home</a>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" style={style.navItem} data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Profissionais</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/listagem/profissional">Listagem</a></li>
                    <li><a className="dropdown-item" href="/cadastro/profissional">Novo cadasatro</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" style={style.navItem} data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Tipos de profissional</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/listagem/tipodeprofissional">Listagem</a></li>
                    <li><a className="dropdown-item" href="/cadastro/tipodeprofissional">Novo cadasatro</a></li>
                </ul>
            </li>
        </nav>
    );
};

export default Nav;