
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                
         </Link>
            <nav>
                <Link to="/">Rap/Trap Internacional</Link>
                <Link to="/sobre">Rock Internacional</Link>
                <Link to="/projetos">Eletrônica/House</Link>
                    
            </nav>
        </header>
    )    
}

export default Header