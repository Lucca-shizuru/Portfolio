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
        projectWrapper: {
            width: isMobile ? '90%' : '220px',
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'all 0.3s ease',
        },
        notebook: {
            position: 'relative',
            width: '100%',
            height: '180px',
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            border: '2px solid #333',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },

        notebookScreen: {
            width: '100%',
            height: 'calc(100% - 12px)',
            objectFit: 'cover',
            borderRadius: '10px 10px 0 0',
            zIndex: 1,
            position: 'relative',
        },

        notebookBase: {
            width: '70%',
            height: '12px',
            backgroundColor: '#555',
            borderRadius: '0 0 8px 8px',
            zIndex: 2,
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
                    style={styles.projectWrapper}
                    onClick={() => window.open(project.pdf, '_blank')}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                    <div style={styles.notebook}>
                        <img
                            src={project.image}
                            alt={project.name}
                            style={styles.notebookScreen}
                        />
                        <div style={styles.notebookBase}></div>
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