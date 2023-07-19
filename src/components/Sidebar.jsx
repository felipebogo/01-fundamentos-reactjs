import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from "@phosphor-icons/react";


export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover}
      src="https://media.istockphoto.com/id/680479680/pt/foto/man-typing-on-computer-keyboard-and-drinking-coffee.jpg?s=2048x2048&w=is&k=20&c=A_5mLIxZmgHh28ztDMgLjjtOWCATEKMr0L9fH1xW_Wc=" alt="" />
      <div className={styles.profile}>
        <Avatar src="https://github.com/felipebogo.png"/>

        <strong>Felipe Bogo</strong>
        <span>Full Stack Developer of Universe</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil</a>
      </footer>
    </aside>
  );
}