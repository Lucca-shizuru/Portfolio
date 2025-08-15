import projetcsData from "../Data/ProjetcsData.js";
import React, { useEffect, useState } from 'react';


function Projects() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        container: {
            marginLeft: isMobile ? 80 : 80,
            padding: '100px 1px',
            minHeight: '50vh',
            backgroundColor: '#0a0a0a',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            gap: '40px',
        },
        pastaWrapper: {
            width: isMobile ? '90%' : '220px',
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'all 0.3s ease',
        },
        pasta: {
            width: '100%',
            height: '140px',
            background: 'linear-gradient(145deg, #facc15, #facc15)',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            position: 'relative',
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
            overflow: 'hidden',
        },
        aba: {
            width: '50%',
            height: '26px',
            background: '#e9ecef',
            borderBottom: '1px solid #dee2e6',
            borderRadius: '6px 6px 0 0',
            position: 'absolute',
            top: '-20px',
            left: '0',
        },
        texto: {
            marginTop: '16px',
            fontFamily: 'Inter, sans-serif',
            color: '#f1f3f5',
        },
        nome: {
            fontSize: '1.1rem',
            fontWeight: '600',
            marginBottom: '4px',
        },
        descricao: {
            fontSize: '0.9rem',
            opacity: 0.85,
            lineHeight: 1.3,
        }
    };

    return (
        <div style={styles.container}>
            {projetcsData.map((project, index) => (
                <div
                    key={index}
                    style={styles.pastaWrapper}
                    onClick={() => window.open(project.pdf, '_blank')}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                    <div style={styles.pasta}>
                        <div style={styles.aba}></div>
                    </div>
                    <div style={styles.texto}>
                        <div style={styles.nome}>{project.name}</div>
                        <div style={styles.descricao}>{project.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;