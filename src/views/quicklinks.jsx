import React, {useState} from 'react';
import '../styles/css/quicklinks.css';

function Quicklinks() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingLink, setEditingLink] = useState(null);

    const [quickLinks, setQuickLinks] = useState([
        {name: "OpenOlat", url: "https://olat.vcrp.de/dmz/"},
        {name: "QIS", url: "https://qisserver.hs-koblenz.de/qisserver/rds?state=user&type=0"},
        {
            name: "Lage- + Gebäudeplan",
            url: "https://www.hs-koblenz.de/hochschule/organisation/zentrale-einrichtungen/verwaltung/hausverwaltung-haustechnik/rheinahrcampus/lage-gebaeudeplan"
        }
    ]);
    const [showLinkPopup, setShowLinkPopup] = useState(false);
    const [linkName, setLinkName] = useState('');
    const [linkUrl, setLinkUrl] = useState('');

    const toggleEditing = () => {
        setIsEditing(!isEditing);
        if (editingLink) setEditingLink(null);
    };

    const deleteLink = (linkName) => {
        const newLinks = quickLinks.filter(link => link.name !== linkName);
        setQuickLinks(newLinks);
    }

    const editLink = (link) => {
        setEditingLink(link);
        setLinkName(link.name);
        setLinkUrl(link.url);
        setShowLinkPopup(true);
    };

    const addOrUpdateLink = () => {
        if (editingLink) {
            const updatedLinks = quickLinks.map(l => l.name === editingLink.name ? {name: linkName, url: linkUrl} : l);
            setQuickLinks(updatedLinks);
            setEditingLink(null);
        } else {
            setQuickLinks([...quickLinks, {name: linkName, url: linkUrl}]);
        }

        setShowLinkPopup(false);
        setLinkName('');
        setLinkUrl('');
    };

    return (
        <div className="widget-box-2">
            <button className="button-edit" onClick={toggleEditing}>
                {isEditing ? "Fertig" : "Bearbeiten"}
            </button>

            <div className="content-wrapper">
                {quickLinks.map(link => (
                    <div style={{width: '100%'}} key={link.name}>
                        <div className="link-row">
                            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>

                            {isEditing ? (
                                <div className="button-group">
                                    <button onClick={() => editLink(link)}>Ändern</button>
                                    <button onClick={() => deleteLink(link.name)}>Löschen</button>
                                </div>
                            ) : <span className="arrow-icon">></span>}
                        </div>
                        <hr/>
                    </div>
                ))}
                <button className="button-circle" onClick={() => setShowLinkPopup(true)}>+</button>
            </div>
            {showLinkPopup && (
                <div className="popup">
                    <label>
                        Bezeichnung:
                        <input type="text" value={linkName} onChange={(e) => setLinkName(e.target.value)}/>
                    </label>
                    <label>
                        URL:
                        <input type="text" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)}/>
                    </label>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <button onClick={addOrUpdateLink}>
                            {editingLink ? "Bestätigen" : "Hinzufügen"}
                        </button>
                        <button onClick={() => {
                            setShowLinkPopup(false);
                            setEditingLink(null);
                        }}>
                            Abbrechen
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Quicklinks;
