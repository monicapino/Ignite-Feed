import { ThumbsUp, Trash } from '@phosphor-icons/react';
import style from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
     onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount +1);
    }

    return (
        <div className={style.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://i.pinimg.com/originals/84/1a/eb/841aeb9f113999616d097b414c539dfd.gif" 
                alt="" 
            />

            <div className={style.commentBox}>
                <div className={style.commentContent}> 
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Cat</strong>
                            <time title='16 de Maio às 14:00' dateTime='2024-05-16 14:00:30'>Cerca de 1h atrás</time>
                        </div>    

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header> 

                    <p>{content}</p>
                </div>

                 <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
