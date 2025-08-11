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
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '100px',
            marginLeft:'350px'

    }
}

export default About;