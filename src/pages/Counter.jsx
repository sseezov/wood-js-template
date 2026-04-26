import { render } from "@sseezov/wood-js"
import styles from './Counter.module.css'

export default function CounterPage() {
  let count = 0
  
  const increment = () => {
    count = count + 1
    render('#counter', count)
  }
  
  const decrement = () => {
    count = count - 1
    render('#counter', count)
  }
  
  return (
    <div class={styles.container}>
      <h2 class={styles.title}>Counter</h2>
      <div class={styles.controls}>
        <button class={styles.button} onClick={increment}>+</button>
        <div id="counter" class={styles.value}>{count}</div>
        <button class={styles.button} onClick={decrement}>-</button>
      </div>
    </div>
  )
}