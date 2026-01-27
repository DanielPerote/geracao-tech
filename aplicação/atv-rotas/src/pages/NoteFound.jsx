import { Link } from "react-router-dom";

const NoteFound = () => {
    return (
        <>
            <h3>Página não encontrada!</h3>
            <Link to={"/"}>Voltar</Link>
        </>
    );
}
 
export default NoteFound;