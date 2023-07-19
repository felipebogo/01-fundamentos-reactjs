import { Post } from './components/Post';
import { Header } from './components/Header';
import './global.css'
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/felipebogo.png',
      name: 'Felipe Bogo',
      role: 'Full Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'To postando aqui mais uma parada pra vcs curtirem'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-07-17: 21:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Enrolator'
    },
    content: [
      { type: 'paragraph', content: 'Oi meus queridos 👋'},
      { type: 'paragraph', content: 'Conheçam meu novo curso UIX.'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-07-15: 21:00:00'),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>


    </div>
  )
}

export default App
