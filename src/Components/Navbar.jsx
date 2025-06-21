import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';


function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav style={styles.container(isMobile)}>
            <img src="/lsdev-logo.jpg" alt="Logo" style={styles.logo} />
            <div style={styles.separator} />
            <div style={styles.navList}>
                <NavLinkItem to="/" label="Home" />
                <div style={styles.separator} />
                <NavLinkItem to="/sobre" label="Sobre" />
                <div style={styles.separator} />
                <NavLinkItem to="/projetos" label="Projetos" />
                <div style={styles.separator} />
                <NavLinkItem to="/contato" label="Contato" />
            </div>

            <div style={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/lucca-shizuru-da-costa-68943726b" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} color="white" />
                </a>
                <a href="https://github.com/Lucca-shizuru" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} color="white" />
                </a>
            </div>
        </nav>


    );
}

const NavLinkItem = ({ to, label, icon }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = '#facc15';
        e.target.style.color = 'black';
    };

    const handleMouseLeave = (e) => {
        if (!isActive) {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';
        }
    };

    return (
        <Link
            to={to}
            style={styles.link(isActive)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {icon ? <span style={{ fontSize: '1.25rem' }}>{icon}</span> : label}
        </Link>
    );
};



const styles = {
    container: (isMobile) => ({
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: isMobile ? '52px' : '64px',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '24px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        zIndex: 1000,
        borderRight: '1px solid #141414',
    }),
    logo: {
        height: '48px',
        width: '48px',
        objectFit: 'contain',
        marginBottom: '35px',
    },
    separator: {
        width: '70%',
        height: '1px',
        backgroundColor: '#2e2e2e',
        margin: '1px 0',
        alignSelf: 'center',
    },
    navList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '100%',
        padding: '0 8px',
    },
    socialLinks: {
        marginTop: '500px',
        display: 'flex',
        gap: '10px',
        padding: '16px 0',
        justifyContent: 'center',
    },
    link: (isActive) => ({
        width: '100%',
        color: isActive ? 'black' : 'white',
        fontSize: '0.75rem',
        padding: '10px 0',
        borderRadius: '6px',
        backgroundColor: isActive ? '#facc15' : 'transparent',
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    }),
};



export default Navbar;