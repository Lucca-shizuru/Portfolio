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
            gap: '50px',
        },
        pastaWrapper: {
            width: isMobile ? '90%' : '200px',
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'transform 0.2s ease',
        },
        pasta: {
            width: '100%',
            height: '120px',
            backgroundColor: '#facc15',
            border: '4px solid #d4af37',
            borderRadius: '6px 6px 4px 4px',
            position: 'relative',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        },
        aba: {
            width: '50%',
            height: '24px',
            backgroundColor: '#fde047',
            border: '4px solid #d4af37',
            borderBottom: 'none',
            borderRadius: '4px 4px 0 0',
            position: 'absolute',
            top: '-20px',
            left: '0',
        },
        texto: {
            marginTop: '12px',
            fontFamily: 'monospace',
            color: '#fff',
        },
        nome: {
            fontSize: '1rem',
            fontWeight: 'bold',
        },
        descricao: {
            fontSize: '0.85rem',
            opacity: 0.85,
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