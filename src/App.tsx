import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://th.bing.com/th/id/OIP.fVy7ycwk-FzTfTTXwdqUQQAAAA?rs=1&pid=ImgDetMain',
      name: 'Raccoon', 
      role: 'Web Devloper',   
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      
    ],
    publishedAt: new Date('2024-05-17 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://th.bing.com/th/id/R.c26e19487e620890133b6544d07aa1dc?rik=akILSbnfJfiMbw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-MTT3kAmTJm4%2fT_iE5G3R8XI%2fAAAAAAAAPRE%2ffQCV-YWivig%2fs1600%2fcute-bunny-pictures-010.jpg&ehk=bozzFQ97aoANYS%2fzQQ%2bU79%2bZUneoUdjGT95B5wvSl5k%3d&risl=&pid=ImgRaw&r=0',
      name: 'Monica Pino',
      role: 'Dev Front-End',
    },
    content: [
      {type: 'paragraph', content: '👋 oi pessoal 👋 '},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 '},
      
    ],
    publishedAt: new Date('2024-05-18 20:00:00'),
  },
  
];

export function App() {
  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>     
      {posts.map(post => {
        return (
        <Post 
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt} 
        />
        )
      })}
        
        

      </main>
    </div>
  </div>
  )
}

