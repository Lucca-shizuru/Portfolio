import React, { useEffect, useState } from 'react';

const ProfileCard = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handler = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener('change', handler);
        setIsMobile(mediaQuery.matches);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);
    const styles = {
        card: {
            backgroundColor: '#1c1c1e',
            color: '#fff',
            borderRadius: '16px',
            padding:  isMobile ? '16px' : '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            maxWidth: isMobile ? '90%' :'700px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            margin: isMobile ? '20px auto' : '0',
        },
        image: {
            width: isMobile ? '100px' : '240px',
            height: isMobile ? '100px' : '240px',
            borderRadius: '9999px',
            objectFit: 'cover',
            border: '2px solid #facc15',
        },
        textContent: {
            textAlign: 'center',
        },
        name: {
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: '700',
            color: '#facc15',
            marginBottom: '8px',
        },
        description: {
            fontSize: isMobile ? '0.9rem' : '1rem',
            lineHeight: '1.6',
        },
    };


    return (
        <div style={styles.card}>
            <img
                src="/fotoDePerfil.jpg"
                alt="Foto de Lucca Shizuru"
                style={styles.image}
            />
            <div style={styles.textContent}>
                <h2 style={styles.name}>Lucca Shizuru</h2>
                <p style={styles.description}>
                    Desenvolvedor Backend com cerca de 1 ano de experiência, em projetos
                    pessoais e acadêmicos, com uma base sólida em desenvolvimento de APIs
                    usando Spring Boot e .NET. Tenho expertise em bancos relacionais,
                    trabalhando com PostgreSQL, além de conhecimento em design de APIs,
                    buscando os princípios SOLID e Clean Code para garantir o desacoplamento e
                    criar soluções robustas, escaláveis e de fácil manutenção. No ecossistema
                    Spring, utilizo tecnologias como Spring Web, Spring JPA e Spring Data.
                    Possuo uma boa base em React para construção de interfaces dinâmicas e
                    funcionais, bem como familiaridade com conceitos fundamentais de
                    contêineres e orquestração, tendo aplicado práticas com Docker em ambientes
                    de desenvolvimento e testes. Atualmente, estou me aprofundando no
                    ecossistema de cloud computing, com foco em serviços da AWS, para ampliar
                    minha capacidade de entregar soluções modernas e integradas.
                    Busco constantemente aprimorar minhas habilidades e seguir as melhores
                    práticas de desenvolvimento.
                </p>
            </div>
        </div>
    );
};


export default ProfileCard;


