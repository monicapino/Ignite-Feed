import  { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (

        <aside className={styles.sidebar}>
        <img className={styles.cover} src='https://wortev.capital/wp-content/uploads/2021/07/tendencias-de-las-tecnologias-verdes-980x686.jpg' />

        <div className={styles.profile}>
            <Avatar src="https://th.bing.com/th/id/R.c26e19487e620890133b6544d07aa1dc?rik=akILSbnfJfiMbw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-MTT3kAmTJm4%2fT_iE5G3R8XI%2fAAAAAAAAPRE%2ffQCV-YWivig%2fs1600%2fcute-bunny-pictures-010.jpg&ehk=bozzFQ97aoANYS%2fzQQ%2bU79%2bZUneoUdjGT95B5wvSl5k%3d&risl=&pid=ImgRaw&r=0" />
        

            <strong>Monica Pino</strong>
            Dev Front-End
        </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
       
    );
}