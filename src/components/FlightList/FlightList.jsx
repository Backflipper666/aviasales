import FlightCard from '../FlightCard/FlightCard'

import styles from './FlightList.module.scss'

const FlightList = () => {
  return (
    <ul className={styles.FlightList}>
      <li>
        <FlightCard />
      </li>
      <li>
        <FlightCard />
      </li>
      <li>
        <FlightCard />
      </li>
      <li>
        <FlightCard />
      </li>
      <li>
        <FlightCard />
      </li>
    </ul>
  )
}

export default FlightList
