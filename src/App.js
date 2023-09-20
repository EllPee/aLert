import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink, } from 'react-router-dom';
import './styles/css/nav.css';
import Home from './views/home';
import About from './views/about';
import Help from './views/help';
import Contact from './views/contact';
import Dashboard from './views/dashboard';
import alertLogo from "./styles/img/alert-logo.svg";
import burgerIcon from "./styles/img/burgermanu.svg";



function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        // Ereignis-Listener löschen
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);
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
                            <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>
                                Über alert
                            </NavLink>
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
                    <div className="nav-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img src={burgerIcon} alt="菜单图标"/>
                    </div>
                </nav>
            </div>

            {/* 弹出菜单 */}
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <button onClick={() => setIsMenuOpen(false)}>X</button>
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}
                                 onClick={() => setIsMenuOpen(false)}>
                            Start
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}
                                 onClick={() => setIsMenuOpen(false)}>
                            Über alert
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help" className={({isActive}) => isActive ? 'active' : ''}
                                 onClick={() => setIsMenuOpen(false)}>
                            Hilfe
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}
                                 onClick={() => setIsMenuOpen(false)}>
                            Kontakt
                        </NavLink>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>
    );
}

export default App;
