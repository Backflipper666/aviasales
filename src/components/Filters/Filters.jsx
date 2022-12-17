import styles from './Filters.module.scss'

const Filters = () => {
  return (
    <fieldset className={styles.fieldset}>
      <h5 className={styles.header}>количество пересадок</h5>
      <div className={styles.wrapper}>
        <input type="checkbox" id="all" name="all" className={styles.checkbox} />
        <label htmlFor="all" className={styles.label}>
          Все
        </label>
      </div>
      <div className={styles.wrapper}>
        <input type="checkbox" id="without" name="without" className={styles.checkbox} />
        <label htmlFor="without" className={styles.label}>
          Без пересадок
        </label>
      </div>
      <div className={styles.wrapper}>
        <input type="checkbox" id="one" name="one" className={styles.checkbox} />
        <label htmlFor="one" className={styles.label}>
          1 пересадка
        </label>
      </div>
      <div className={styles.wrapper}>
        <input type="checkbox" id="two" name="two" className={styles.checkbox} />
        <label htmlFor="two" className={styles.label}>
          2 пересадки
        </label>
      </div>
      <div className={styles.wrapper}>
        <input type="checkbox" id="three" name="three" className={styles.checkbox} />
        <label htmlFor="three" className={styles.label}>
          3 пересадки
        </label>
      </div>
    </fieldset>
  )
}

export default Filters
