import { FaCode, FaCogs, FaDatabase, FaGitAlt, FaCloud } from "react-icons/fa";
import {useEffect, useState} from "react";
import PageContainer from "../Components/PageContainer.jsx";

const skills = [
    {
        title: "Linguagens de Programação",
        icon: <FaCode />,
        skills: ["Java", "Spring Boot", ".NET (C#)"],
        color: "#facc15"
    },
    {
        title: "Banco de Dados",
        icon: <FaDatabase />,
        skills: ["PostgreSQL", "MySQL"],
        color: "#facc15"
    },
    {
        title: "ORM",
        icon: <FaCogs />,
        skills: ["Dapper", "Entity Framework", "Spring JPA", "Hibernate"],
        color: "#facc15"
    },
    {
        title: "DevOps",
        icon: <FaGitAlt />,
        skills: ["Git"],
        color: "#facc15"
    },
    {
        title: "Cloud Developer",
        icon: <FaCloud />,
        skills: ["AWS"],
        color: "#facc15"
    }

];

export default function Skills() {
    const [isMobile, setIsMobile] = useState(false); // ✅ Declarado corretamente

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <PageContainer>
            <h2 style={{
                fontSize: "2rem",
                marginBottom: "30px",
                textAlign: "center",
            }}>
                💻 Habilidades
            </h2>

            <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px"
            }}>
                {skills.map((cat, index) => (
                    <div key={index} style={{
                        background: "#1a1a1a",
                        padding: "20px",
                        borderRadius: "12px",
                        textAlign: "center",
                        transition: "0.3s",
                        border: `2px solid ${cat.color}`
                    }}
                    >
                        <div style={{
                            fontSize: "2rem",
                            marginBottom: "10px",
                            color: cat.color
                        }}>
                            {cat.icon}
                        </div>
                        <h3 style={{ marginBottom: "10px", fontSize: "1.2rem" }}>{cat.title}</h3>
                        <ul style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0
                        }}>
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
    </PageContainer>
    );
}