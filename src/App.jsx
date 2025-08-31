import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompletePage from "./Pages/CompletePage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CompletePage />} />
            </Routes>
        </Router>
    );
}

export default App;
