import React, {useState, useEffect} from 'react';

function About() {
    const [iframeHeight, setIframeHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setIframeHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {

            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{width: '100%', height: iframeHeight}}>
            <iframe
                src="https://www.h3-basa-maps.de/alert/"
                width="100%"
                height="100%"
                title="Embedded Alert Page"
            ></iframe>
        </div>
    );
}

export default About;
