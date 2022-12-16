import styles from './Filters.module.scss'

const Filters = () => {
  return (
    <fieldset className={styles.fieldset}>
      <h5 className={styles.header}>количество пересадок</h5>
      <div>
        <input type="checkbox" id="all" name="all" />
        <label htmlFor="all" className={styles.label}>
          Все
        </label>
      </div>
      <div>
        <input type="checkbox" id="without" name="without" />
        <label htmlFor="without" className={styles.label}>
          Без пересадок
        </label>
      </div>
      <div>
        <input type="checkbox" id="one" name="one" />
        <label htmlFor="one" className={styles.label}>
          1 пересадка
        </label>
      </div>
      <div>
        <input type="checkbox" id="two" name="two" />
        <label htmlFor="two" className={styles.label}>
          2 пересадки
        </label>
      </div>
      <div>
        <input type="checkbox" id="three" name="three" />
        <label htmlFor="three" className={styles.label}>
          3 пересадки
        </label>
      </div>
    </fieldset>
  )
}

export default Filters
