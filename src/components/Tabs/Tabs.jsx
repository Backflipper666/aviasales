import styles from './Tabs.module.scss'

const Tabs = () => {
  return (
    <div className={styles.wrapper}>
      <button type="button" className={`${styles.button} ${styles.button_active} ${styles.left}`}>
        самый дешевый
      </button>
      <button type="button" className={styles.button}>
        самый быстрый
      </button>
      <button type="button" className={`${styles.button} ${styles.right}`}>
        оптимальный
      </button>
    </div>
  )
}

export default Tabs
