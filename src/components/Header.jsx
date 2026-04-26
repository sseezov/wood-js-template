import styles from './Header.module.css'

export default function Header() {
  return (
    <header class={styles.header}>
      <nav>
        <a href="/" class={styles.link}>Home</a>
        <a href="/catalog" class={styles.link}>Catalog</a>
        <a href="/about" class={styles.link}>About</a>
      </nav>
    </header>
  )
}