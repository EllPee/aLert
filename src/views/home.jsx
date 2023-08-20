import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/css/home.css'; // 导入样式文件
import beispielBild from '../styles/img/beispiel.jpg'; // 导入图片
import anzeigerIcon from '../styles/img/anzeiger.svg'; // 导入显示密码的图标
import anzeiger1Icon from '../styles/img/anzeiger-1.svg'; // 导入另一个显示密码的图标

function Home() {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordIcon, setPasswordIcon] = useState(anzeiger1Icon);

    const toggleShowPassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
        setPasswordIcon(prevIcon => prevIcon === anzeiger1Icon ? anzeigerIcon : anzeiger1Icon);
    };

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();  // 阻止默认的表单提交
        // ... 验证和其他操作

        navigate('/dashboard');  // 跳转到/dashboard路由
    };

    return (
        <div className="page-content">
            <div className="left-section">
                <img src={beispielBild} alt="Example" className="rounded-image"/>
            </div>
            <div className="right-section">
                <div className="login-box">
                    <h1>In OpenOlat anmelden</h1>
                    <p className="login-text">Bitte verwenden Sie Ihren OpenOlat-Anmeldenamen und Ihr Passwort.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="textbox">
                            <input
                                type="text"
                                placeholder="Anmeldename"
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
                                    alt={showPassword ? "Verbergen" : "Anzeigen"}
                                    className="password-icon"
                                />
                            </button>
                        </div>
                        <input type="submit" className="btn" value="Anmelden"/>
                        <p className="ps-vergessen">Password vergessen?</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
