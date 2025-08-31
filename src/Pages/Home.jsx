import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import PageContainer from "../Components/PageContainer.jsx";

function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [ showModal, setShowModal ] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        container: {
            marginTop: '50px',
            padding: '0 16px',
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : 'left',
            overflowX: 'hidden',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
        },
        heading: {
            fontSize: isMobile ? '2rem' : '4.5rem',
            fontWeight: '600',
            fontFamily: "'Fira Mono', monospace",
            lineHeight: '1.5',
            textAlign: 'left',
        },
        button: {
            padding: '16px 40px',
            backgroundColor: isHovered ? '#facc15' : '#0a0a0a',
            color: isHovered ? '#000' : '#facc15',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '6px',
            fontSize: '1.5rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            boxShadow: isHovered ? '0 0 12px #facc15' : 'none',
        },
        modalOverlay: {
            position: 'fixed',
            top: 0, left: 0,
            width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        },
        modal: {
            backgroundColor: '#111',
            color: '#ffffff',
            padding: '30px',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '90%',
            textAlign: 'center',
            boxShadow: '0 0 20px #facc15',
            animation: 'fadeIn 0.4s ease-in-out',
        },
        closeBtn: {
            marginTop: '20px',
            backgroundColor: '#000',
            color: '#facc15',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
        }
    };

    return (
        <PageContainer>
            <div style={styles.content}>
            <h1 style={styles.heading}>
                Olá,<br />
                Eu sou o <span style={{ color: '#facc15' }}>Lucca Shizuru</span>,<br />
                <TypeAnimation
                    sequence={[
                        '<desenvolvedor Backend />', 2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    style={{ color: '#ffffff' }}
                />
            </h1>
            <button
                style={styles.button}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setShowModal(true)}
            >
                Contatar

            </button>

            </div>
            {showModal && (
                <div style={styles.modalOverlay} onClick={() => setShowModal(false)}>
                    <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <h2>📞 Informações de Contato</h2>
                        <p>Data de nascimento: 19 anos (20/09/2005)</p>
                        <p>Endereço: Rua Imbocuí, 60 – Vila Moreira – SP – 03088-030</p>
                        <p>Tel: (11) 95479-4717</p>
                        <p>Email: shizurulucca.dev@gmail.com</p>
                        <button style={styles.closeBtn} onClick={() => setShowModal(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </PageContainer>
    );
}



export default Home;