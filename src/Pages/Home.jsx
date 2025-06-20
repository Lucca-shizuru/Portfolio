import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>
                Olá,<br />
                Eu sou o <span style={{ color: '#facc15' }}>Lucca Shizuru</span>,<br />
                <TypeAnimation
                    sequence={[
                        '<Desenvolvedor Backend />',
                    ]}
                    wrapper="span"
                    speed={50}
                    cursor={true}
                    style={{ color: 'white', display: 'inline-block' }}
                />
            </h1>
        </div>
    );
}

const styles = {
    container: {
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '20px',
    },
    heading: {
        fontSize: '4.5rem',
        fontWeight: '600',
        fontFamily: "'Fira Mono', monospace",
        lineHeight: '1.5',
        textAlign: 'left',
    },
};

export default Home;