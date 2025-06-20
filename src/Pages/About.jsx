import ProfileCard from "../Components/ProfileCard.jsx";


function About () {
    return (
        <div style={styles.container}>
            <ProfileCard />

        </div>
    );
}

const styles = {
    container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',

    }
}

export default About;