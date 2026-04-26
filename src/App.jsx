import Header from './components/Header'
import Footer from './components/Footer'
import styles from './App.module.css'
import CounterPage from './pages/Counter'

export default function App() {
  return <>
    <Header />
    <main class={styles.main} id='main'>
      <CounterPage />
    </main>
    <Footer />
  </>
}
