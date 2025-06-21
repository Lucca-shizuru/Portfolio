import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';

function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        container: {
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent:  isMobile ? 'center' : 'flex-start',
            paddingLeft: isMobile ? '10px' : '20px',
            textAlign: isMobile ? 'center' : 'left',
        },
        heading: {
            fontSize: isMobile ? '2rem' : '4.5rem',
            fontWeight: '600',
            fontFamily: "'Fira Mono', monospace",
            lineHeight: '1.5',
            textAlign: 'left',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>
                Olá,<br />
                Eu sou o <span style={{ color: '#facc15' }}>Lucca Shizuru</span>,<br />
                &lt;desenvolvedor{'\n'}
                Backend /&gt;
            </h1>
        </div>
    );
}



export default Home;