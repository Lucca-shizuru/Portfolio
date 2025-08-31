import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaCode, FaCogs, FaDatabase, FaGitAlt, FaCloud, FaGithub, FaLinkedin } from "react-icons/fa";
import projetcsData from "../Data/ProjetcsData.js";

export default function CompletePage() {
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const skills = [
        {title: "Linguagens", icon: <FaCode/>, skills: ["Java", "Spring Boot", ".NET (C#)"], color: "#facc15"},
        {title: "Banco de Dados", icon: <FaDatabase/>, skills: ["PostgreSQL", "MySQL"], color: "#facc15"},
        {
            title: "ORM",
            icon: <FaCogs/>,
            skills: ["Dapper", "Entity Framework", "Spring JPA", "Hibernate"],
            color: "#facc15"
        },
        {title: "DevOps", icon: <FaGitAlt/>, skills: ["Git"], color: "#facc15"},
        {title: "Cloud", icon: <FaCloud/>, skills: ["AWS"], color: "#facc15"},
    ];

    const styles = {
        app: {
            display: "flex",
            minHeight: "100vh",
            backgroundColor: "#0a0a0a",
            color: "#fff",
            overflowX: "hidden", // evita scroll horizontal
        },
        navbar: {
            width: isMobile ? "100%" : "50px",
            height: isMobile ? "60px" : "100vh",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px",
            backgroundColor: "#0a0a0a",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 100,
        },
        logo: {
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#facc15",
            marginBottom: isMobile ? 0 : "40px",
        },
        navLinks: {
            display: "flex",
            flexDirection: "row",
            gap: "16px",
        },
        navIcon: {
            color: "#ffffff",
            fontSize: "1.5rem",
            cursor: "pointer",
            transition: "0.3s",
        },
        main: {
            flexGrow: 1,
            marginLeft: isMobile ? 0 : "100px",
            marginTop: isMobile ? "60px" : 0,
            padding: "48px 32px",
            boxSizing: "border-box",
        },
        section: {
            marginBottom: "160px",
        },
        heading: {
            fontSize: isMobile ? "1.2rem" : "4rem",
            fontWeight: "600",
            fontFamily: "'Fira Mono', monospace",
            lineHeight: "1.5",
            marginBottom: "24px",
        },
        button: {
            padding: "16px 40px",
            backgroundColor: isHovered ? "#facc15" : "#0a0a0a",
            color: isHovered ? "#000" : "#facc15",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "6px",
            fontSize: "1.0rem",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            boxShadow: isHovered ? "0 0 12px #facc15" : "none",
            marginTop: "16px",
        },
        modalOverlay: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
        },
        modal: {
            backgroundColor: "#111",
            color: "#ffffff",
            padding: "30px",
            borderRadius: "12px",
            maxWidth: "500px",
            width: "90%",
            textAlign: "center",
            boxShadow: "0 0 20px #facc15",
            animation: "fadeIn 0.4s ease-in-out",
        },
        closeBtn: {
            marginTop: "20px",
            backgroundColor: "#000",
            color: "#facc15",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
        },
        profileCard: {
            backgroundColor: "#1c1c1e",
            color: "#fff",
            borderRadius: "16px",
            padding: isMobile ? "16px" : "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            maxWidth: "700px",
            width: "100%",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            margin: "0 auto",
        },
        profileImage: {
            width: isMobile ? "80%" : "240px",
            height: "auto",
            borderRadius: "9999px",
            objectFit: "cover",
            border: "2px solid #facc15",
            maxWidth: "240px",
        },
        profileName: {
            fontSize: isMobile ? "1.5rem" : "2rem",
            fontWeight: "700",
            color: "#facc15",
            textAlign: "center",
            fontFamily: "'Fira Mono', monospace",
        },
        profileDescription: {
            fontSize: isMobile ? "0.95rem" : "1rem",
            lineHeight: "1.6",
            textAlign: "left",
            fontFamily: "'Fira Mono', monospace",
        },
        projectWrapper: {
            width: isMobile ? "100%" : "220px",
            maxWidth: "220px",
            cursor: "pointer",
            textAlign: "center",
            transition: "all 0.3s ease",
            marginBottom: "40px",
        },
        notebook: {
            position: "relative",
            width: "100%",
            height: "180px",
            backgroundColor: "#1a1a1a",
            borderRadius: "12px",
            border: "2px solid #333",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        },
        notebookScreen: {
            width: "100%",
            height: "calc(100% - 12px)",
            objectFit: "cover",
            borderRadius: "10px 10px 0 0",
        },
        notebookBase: {
            width: "70%",
            height: "12px",
            backgroundColor: "#555",
            borderRadius: "0 0 8px 8px",
        },
        texto: {
            marginTop: "16px",
            fontFamily: "Inter, sans-serif",
            color: "#f1f3f5",
        },
        nome: {
            fontSize: "1.1rem",
            fontWeight: "600",
            marginBottom: "4px",
        },
        descricao: {
            fontSize: "0.9rem",
            opacity: 0.85,
            lineHeight: 1.3,
        },
    };

    return (
        <div style={{...styles.app, overflowX: "hidden"}}>
            {/* Navbar lateral */}
            <div style={{
                ...styles.navbar,
                width: isMobile ? "100%" : "50px",
                height: isMobile ? "60px" : "100vh",
                flexDirection: isMobile ? "row" : "column",
                top: 0,
                left: 0,
                position: "fixed",
                zIndex: 1000,
                padding: "8px"
            }}>
                <img src="/lsdev-logo.jpg" alt="Logo" style={styles.logo}/>
                <div style={{...styles.navLinks, gap: "12px"}}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                       style={styles.navIcon}><FaGithub/></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                       style={styles.navIcon}><FaLinkedin/></a>
                </div>
            </div>

            {/* Main */}
            <main style={{
                ...styles.main,
                marginLeft: isMobile ? 0 : "60px",
                marginTop: isMobile ? "70px" : 0,
                padding: "32px",
                overflowX: "hidden",
                width: "100%",
                boxSizing: "border-box"
            }}>
                {/* Home */}
                <section style={{...styles.section, marginBottom: "160px"}}>
                    <div style={{maxWidth: "100%", margin: "0 auto", textAlign: "center"}}>
                        <h1 style={{...styles.heading, wordBreak: "break-word", overflowWrap: "break-word"}}>
                            Olá,<br/>
                            Eu sou o <span
                            style={{color: "#facc15", whiteSpace: "nowrap"}}>Lucca&nbsp;Shizuru</span>,<br/>
                            <TypeAnimation
                                sequence={["<desenvolvedor Backend />", 2000]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                style={{
                                    color: "#ffffff",
                                    whiteSpace: "nowrap",
                                    fontFamily: "'Fira Mono', monospace",
                                    display: "inline-block"
                                }}
                            />
                        </h1>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", marginTop: "24px"}}>
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
                                <button style={styles.closeBtn} onClick={() => setShowModal(false)}>Fechar</button>
                            </div>
                        </div>
                    )}
                </section>

                {/* Perfil */}
                <section style={{...styles.section, marginBottom: "160px"}}>
                    <h2 style={{
                        fontSize: isMobile ? "2rem" : "3rem",
                        textAlign: "center",
                        marginBottom: "40px",
                        fontFamily: "'Fira Mono', monospace"
                    }}>Sobre</h2>
                    <div style={styles.profileCard}>
                        <img src="/fotoDePerfil.jpg" alt="Foto de Lucca Shizuru" style={styles.profileImage}/>
                        <h2 style={{...styles.profileName, fontFamily: "'Fira Mono', monospace"}}>Lucca Shizuru</h2>
                        <p style={{...styles.profileDescription, fontFamily: "'Fira Mono', monospace"}}>
                            Desenvolvedor Backend com cerca de 2 anos de experiência, em projetos
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
                </section>

                {/* Projetos */}
                <section style={{...styles.section, marginBottom: "160px"}}>
                    <h2 style={{
                        ...styles.heading,
                        fontSize: "2.5rem",
                        textAlign: "center",
                        marginBottom: "40px",
                        fontFamily: "'Fira Mono', monospace"
                    }}>🖥️ Projetos</h2>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                        justifyContent: "center",
                        paddingBottom: "40px",
                        width: "100%"
                    }}>
                        {projetcsData.map((project, index) => (
                            <div key={index} style={styles.projectWrapper}
                                 onClick={() => window.open(project.pdf, "_blank")}
                                 onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                 onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                                <div style={styles.notebook}>
                                    <img src={project.image} alt={project.name} style={styles.notebookScreen}/>
                                    <div style={styles.notebookBase}></div>
                                </div>
                                <div style={styles.texto}>
                                    <div style={styles.nome}>{project.name}</div>
                                    <div style={styles.descricao}>{project.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Habilidades */}
                <section style={{...styles.section, marginBottom: "160px"}}>
                    <h2 style={{
                        ...styles.heading,
                        fontSize: "2.5rem",
                        textAlign: "center",
                        marginBottom: "40px",
                        fontFamily: "'Fira Mono', monospace"
                    }}>💻 Habilidades</h2>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                        gap: "20px",
                        width: "100%"
                    }}>
                        {skills.map((cat, index) => (
                            <div key={index} style={{
                                background: "#1a1a1a",
                                padding: "20px",
                                borderRadius: "12px",
                                textAlign: "center",
                                transition: "0.3s",
                                border: `2px solid ${cat.color}`
                            }}>
                                <div style={{fontSize: "2rem", marginBottom: "10px", color: cat.color}}>{cat.icon}</div>
                                <h3 style={{marginBottom: "10px", fontSize: "1.2rem"}}>{cat.title}</h3>
                                <ul style={{listStyle: "none", padding: 0, margin: 0}}>
                                    {cat.skills.map((skill, idx) => (
                                        <li key={idx} style={{
                                            background: "#262626",
                                            margin: "5px 0",
                                            padding: "6px 10px",
                                            borderRadius: "8px",
                                            fontSize: "0.9rem"
                                        }}>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
