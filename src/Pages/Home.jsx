import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';

function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        container: {
            marginTop: '100px',
            height: '80vh',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent:  isMobile ? 'center' : 'flex-start',
            paddingLeft: isMobile ? '10px' : '20px',
            textAlign: isMobile ? 'center' : 'left',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start',
        },
        heading: {
            fontSize: isMobile ? '2rem' : '4.5rem',
            fontWeight: '600',
            fontFamily: "'Fira Mono', monospace",
            lineHeight: '1.5',
            textAlign: 'left',
        },
        button: {
            padding: '20px 60px',
            backgroundColor: isHovered ? '#facc15' : '#0a0a0a',
            color: isHovered ? '#000' : '#facc15',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '6px',
            fontSize: '1.5rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            boxShadow: isHovered ? '0 0 12px #facc15' : 'none',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
            <h1 style={styles.heading}>
                Olá,<br />
                Eu sou o <span style={{ color: '#facc15' }}>Lucca Shizuru</span>,<br />
                &lt;desenvolvedor{'\n'}
                Backend /&gt;
            </h1>
            <button
                style={styles.button}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                Contatar

            </button>

            </div>
        </div>
    );
}



export default Home;