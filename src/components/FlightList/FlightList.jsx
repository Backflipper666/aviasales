import FlightCard from '../FlightCard/FlightCard'
import { useGetTicketsQuery } from '../../rtk-related/ticketsSlice'

import styles from './FlightList.module.scss'

const FlightList = () => {
  const response = useGetTicketsQuery()
  console.log(response)
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
