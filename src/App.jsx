/* eslint-disable indent */
import axios from 'axios'
import { useEffect } from 'react'

import Filters from './components/Filters/Filters'
import Tabs from './components/Tabs/Tabs'
import FlightList from './components/FlightList/FlightList'
import styles from './App.module.scss'
import plane from './assets/plane.svg'
import Button from './components/Button/Button'

function App() {
  const getId = async () => {
    const searchId = '7aa5b9f54e3d80fa313724cd75045f5d'
    const response = await axios.get('https://aviasales-test-api.kata.academy/tickets', {
      params: {
        searchId: searchId,
      },
    })
    console.log('halyk: ', response)
    response.then((res) => {
      console.log(res)
    })
  }

  useEffect(() => {
    getId()
  }, [])
  return (
    <div className="App">
      <header className={styles.header}>
        <img src={plane} className={styles.plane} />
      </header>

      <div className={styles.content}>
        <Filters />
        <main className={styles.main}>
          <Tabs />
          <FlightList />
          <Button />
        </main>
      </div>
    </div>
  )
}

export default App
