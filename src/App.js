import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import './styles/css/nav.css'; // 导入样式文件
import Home from './views/home';
import About from './views/about';
import Help from './views/help';
import Contact from './views/contact';
import alertLogo from "./styles/img/alert-logo.svg";

function App() {
    return (
        <Router>
            <div className="navbar-container">
                <nav className="navbar">
                    <div className="logo">
                        <img src={alertLogo} alt="Alert Logo"/>
                    </div>
                    <ul className="nav-rechts">
                        <li>
                            <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} end>
                                Start
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>Über
                                alert</NavLink>
                        </li>
                        <li>
                            <NavLink to="/help" className={({isActive}) => isActive ? 'active' : ''}>
                                Hilfe
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>
                                Kontakt
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default App;