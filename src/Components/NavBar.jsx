import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    const navLink = (to, label) => (
        <Link
            to={to}
            className={`mx-2 text-white hover:text-yellow-400 transition-colors ${
                location.pathname === to ? 'font-bold underline' : ''
            }`}
        >
            {label}
        </Link>
    );

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-white text-xl font-mono">MeuPortfólio</span>
                <div>
                    {navLink('/', 'Home')}
                    {navLink('/sobre', 'Sobre')}
                    {navLink('/projetos', 'Projetos')}
                    {navLink('/contato', 'Contato')}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;