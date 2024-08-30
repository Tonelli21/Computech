import { Link } from "react-router-dom"

const Menu = () => {
    return(
        <nav >
            <ul className="menusuperior">
                <li> <Link to="/"> Inicio </Link> </li>
                <li> <Link to="/productos">Lista de Productos </Link> </li>
                <li> <Link to="/Formulario"> Registro </Link> </li>
                <li><Link to="/login">Inicio de Sesion</Link></li>
            </ul>
        
        
        </nav>
    )
}

export default Menu;