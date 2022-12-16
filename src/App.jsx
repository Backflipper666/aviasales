import Filters from './components/Filters/Filters'
import Tabs from './components/Tabs/Tabs'
import FlightList from './components/FlightList/FlightList'
import styles from './App.module.scss'

function App() {
  return (
    <div className="App">
      <header></header>
      <div className={styles.content}>
        <Filters />
        <main>
          <Tabs />
          <FlightList />
        </main>
      </div>
    </div>
  )
}

export default App
