import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <h1>Bem vindo a nosso site!</h1>
                <h4>Confira o que você procura abaixo.</h4>
                <nav>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/produtos"}>Produtos</Link></li>
                        <li><Link to={"/sobre"}>Sobre</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
 
export default Header;