
import style from './Header.module.css'
import HeaderLogo from '../assets/ignite-logo.svg'

export function Header(){
    return (
        <header className={style.header}>
            <img src={HeaderLogo} alt="Logo Do Ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}