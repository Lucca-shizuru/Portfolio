import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <Router>
            <div style={{
                display: 'flex',
                minHeight: '100vh',
                backgroundColor: '#111827', // bg-gray-900
                color: 'white'
            }}>
                <Navbar />
                <main style={{
                    flexGrow: 1,
                    marginLeft: '160px', // mesma largura do Navbar
                    padding: '24px',
                }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<About />} />
                        <Route path="/projetos" element={<Projects />} />
                        <Route path="/contato" element={<Contact />} />
                    </Routes>
                    <Footer />
                </main>
            </div>
        </Router>
    );
}

export default App;