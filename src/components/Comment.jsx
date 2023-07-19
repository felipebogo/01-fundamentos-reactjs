/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';
export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);
  
  
  function handleDeleteComment(){
    console.log('entro nessa jossa',onDeleteComment);
    if(onDeleteComment){
      onDeleteComment(content);
    }
  }

  function handleLike(){
    setLikeCount(likeCount+1);
  }
  
  return (
    <div className={styles.comment} >
      <Avatar
        hasBorder={false}
        src="https://github.com/felipebogo.png" alt="imagem avatar" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Bogo</strong>
              <time title='2023-07-17 21:00:00' dateTime='2023-07-17 21:00:00' >Cerca de 1 hora</time>
            </div>
            <button  onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
          <footer>
            <button onClick={handleLike}>
              <ThumbsUp />
              Aplaudir
              <span>{likeCount}</span>
            </button>
          </footer>
      </div>
    </div>
  );
}