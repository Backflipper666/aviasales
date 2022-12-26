import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from './../../redux-related/actions'
import styles from './Tabs.module.scss'

const Tabs = ({ selectCheapest, selectFastest }) => {
  return (
    <div className={styles.wrapper}>
      <button
        onClick={selectCheapest}
        type="button"
        className={`${styles.button} ${styles.button_active} ${styles.left}`}
      >
        самый дешевый
      </button>
      <button onClick={selectFastest} type="button" className={styles.button}>
        самый быстрый
      </button>
      <button type="button" className={`${styles.button} ${styles.right}`}>
        оптимальный
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedTab: state.selectedTab,
  }
}

const mapDispatchToProps = (dispatch) => {
  const { selectCheapest, selectFastest } = bindActionCreators(actions, dispatch)
  return {
    selectCheapest,
    selectFastest,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
