import React from 'react';

function Menu(props){
    return(
        <div className="wrapper">
            <nav className="borde">
                <div className="menu-icon">
                    <i className="fa fa-bars fa-2x"></i>
                </div>
                <div className="logo">
				    <a href="index.html">
                        <img src="../public/logo1.png" alt="Logo"/>  
                    </a>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="index.html">Website</a></li>
                        <li><a href="index.html">Hosting</a></li>
                        <li><a href="index.html">Área de clientes</a></li>
                        <li><a href="index.html">Nosotros</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Menu;