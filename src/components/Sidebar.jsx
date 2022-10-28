
import styles from './Sidebar.module.css'
import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from './Avatar';


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>
            
            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/GabrielDsanta.png"/>
                <strong>Gabriel Santana Féo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} />
                    Editar Seu Perfil
                </a>
            </footer>
        </aside>
    )
}