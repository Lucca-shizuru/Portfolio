import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/Contact.jsx';
import Navbar from './Components/Navbar.jsx';
function App() {
    return (
        <Router>
            <div style={{
                display: 'flex',
                minHeight: '100vh',
                backgroundColor: '#0a0a0a',
                color: 'white',
            }}>
                <Navbar />
                <main style={{
                    flexGrow: 1,
                    marginLeft: '160px',
                    padding: '24px',
                }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<About />} />
                        <Route path="/projetos" element={<Projects />} />
                        <Route path="/contato" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;