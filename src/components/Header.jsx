import styles from './Header.module.css'

export default function Header() {
  return (
    <header class={styles.header}>
      <nav>
        <a href="/" class={styles.link}>Main</a>
        <a href="/about" class={styles.link}>About</a>
      </nav>
    </header>
  )
}