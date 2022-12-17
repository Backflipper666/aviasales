import logo from '../../assets/s7.svg'

import styles from './FlightCard.module.scss'

const FlightCard = () => {
  return (
    <article className={styles.flight__wrapper}>
      <div className={styles.flight}>
        <header className={styles.flight__upper}>
          <strong className={styles.price}>13 400 P</strong>
          <img src={logo} className={styles.logo} />
        </header>
        <div className={styles.schedule}>
          <div>
            <p className={styles.description}>Mow - HKT</p>
            <p className={styles.description_bottom}>10:45 - 08:00</p>
            <p className={styles.description}>Mow - HKT</p>
            <p className={styles.description_bottom}>11:20 - 00:50</p>
          </div>
          <div>
            <p className={styles.description}>В пути</p>
            <p className={styles.description_bottom}>21ч 15м</p>
            <p className={styles.description}>В пути</p>
            <p className={styles.description_bottom}>13ч 30м</p>
          </div>
          <div>
            <p className={`${styles.description}`}>2 пересадки</p>
            <p className={styles.description_bottom}>HKB, JNB</p>
            <p className={styles.description}>1 пересадка</p>
            <p className={styles.description_bottom}>HKT</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default FlightCard
