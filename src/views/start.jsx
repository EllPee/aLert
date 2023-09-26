import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/css/start.css'; // Importiere Stylesheet
import beispielBild from '../styles/img/beispiel.jpg'; // Importiere Bild
import anzeigerIcon from '../styles/img/anzeiger.svg'; // Importiere Anzeige-Passwort-Symbol
import anzeiger1Icon from '../styles/img/anzeiger-1.svg'; // Importiere ein anderes Anzeige-Passwort-Symbol
import logoGif from '../styles/img/alert-logo-animation-ohne-hintergrund.gif';

function Start() {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordIcon, setPasswordIcon] = useState(anzeiger1Icon);

    const toggleShowPassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
        setPasswordIcon(prevIcon => prevIcon === anzeiger1Icon ? anzeigerIcon : anzeiger1Icon);
    };

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();  // Verhindere das Standardformularsubmit
        // ... Überprüfung und andere Operationen

        navigate('/dashboard');  // Navigiere zur /dashboard-Route
    };


    return (
        <div className="page-content">
            <div className="left-section">
                <img src={beispielBild} alt="Beispiel" className="rounded-image"/>
            </div>
            <div className="right-section">
                <div className="login-box">
                    <img
                        src={logoGif} // Verwende .gif-Datei
                        alt="Beispiel"
                        className="logo-gif"
                    />
                    <h1>Melden Sie sich bei OpenOlat an</h1>
                    <p className="login-text">Bitte verwenden Sie Ihren OpenOlat-Benutzernamen und Ihr Passwort.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="textbox">
                            <input
                                type="text"
                                placeholder="Benutzername"
                                required
                            />
                        </div>
                        <div className="textbox">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Passwort"
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={toggleShowPassword}
                            >
                                <img
                                    src={passwordIcon}
                                    alt={showPassword ? "Ausblenden" : "Anzeigen"}
                                    className="password-icon"
                                />
                            </button>
                        </div>
                        <input type="submit" className="btn" value="Anmelden"/>
                        <p className="ps-vergessen">Passwort vergessen?</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Start;
