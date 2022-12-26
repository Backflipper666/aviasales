/* eslint-disable indent */

import Filters from './components/Filters/Filters'
import Tabs from './components/Tabs/Tabs'
import FlightList from './components/FlightList/FlightList'
import styles from './App.module.scss'
import plane from './assets/plane.svg'
import Button from './components/Button/Button'

function App() {
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
