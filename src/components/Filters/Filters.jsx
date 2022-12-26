import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from './../../redux-related/actions'
import styles from './Filters.module.scss'

const Filters = ({ selectAll, selectZero, selectOne, selectTwo, selectThree }) => {
  return (
    <fieldset className={styles.fieldset}>
      <h5 className={styles.header}>количество пересадок</h5>
      <div className={styles.wrapper}>
        <input type="checkbox" id="all" name="all" className={styles.checkbox} onChange={selectAll} />
        <label htmlFor="all" className={styles.label}>
          Все
        </label>
      </div>
      <div className={styles.wrapper}>
        <input type="checkbox" id="without" name="without" className={styles.checkbox} onChange={selectZero} />
        <label htmlFor="without" className={styles.label}>
          Без пересадок
        </label>
      </div>
      <div className={styles.wrapper}>
        <input type="checkbox" id="one" name="one" className={styles.checkbox} onChange={selectOne} />
        <label htmlFor="one" className={styles.label}>
          1 пересадка
        </label>
      </div>
      <div className={styles.wrapper}>
        <input type="checkbox" id="two" name="two" className={styles.checkbox} onChange={selectTwo} />
        <label htmlFor="two" className={styles.label}>
          2 пересадки
        </label>
      </div>
      <div className={styles.wrapper}>
        <input type="checkbox" id="three" name="three" className={styles.checkbox} onChange={selectThree} />
        <label htmlFor="three" className={styles.label}>
          3 пересадки
        </label>
      </div>
    </fieldset>
  )
}

const mapStateToProps = (state) => {
  return {
    selectFilter: state.selectFilter,
    selectedCheckboxes: state.selectedCheckboxes,
  }
}

const mapDispatchToProps = (dispatch) => {
  const { selectAll, selectZero, selectOne, selectTwo, selectThree } = bindActionCreators(actions, dispatch)
  return {
    selectAll,
    selectZero,
    selectOne,
    selectTwo,
    selectThree,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
