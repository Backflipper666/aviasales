import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from './../../redux-related/actions'
import styles from './Filters.module.scss'

const Filters = ({
  selectAll,
  selectZero,
  selectOne,
  selectTwo,
  selectThree,
  allSelected,
  zeroSelected,
  oneSelected,
  twoSelected,
  threeSelected,
}) => {
  return (
    <fieldset className={styles.fieldset}>
      <h5 className={styles.header}>количество пересадок</h5>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="all"
          name="all"
          className={styles.checkbox}
          onChange={() => {
            selectAll()
            if (allSelected) {
              console.log(allSelected)
              console.log('yess!')
            }
          }}
          checked={allSelected}
        />
        <label htmlFor="all" className={styles.label}>
          Все
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="without"
          name="without"
          className={styles.checkbox}
          onChange={selectZero}
          checked={zeroSelected && allSelected}
        />
        <label htmlFor="without" className={styles.label}>
          Без пересадок
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="one"
          name="one"
          className={styles.checkbox}
          onChange={selectOne}
          checked={oneSelected && allSelected}
        />
        <label htmlFor="one" className={styles.label}>
          1 пересадка
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="two"
          name="two"
          className={styles.checkbox}
          onChange={selectTwo}
          checked={twoSelected && allSelected}
        />
        <label htmlFor="two" className={styles.label}>
          2 пересадки
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="three"
          name="three"
          className={styles.checkbox}
          onChange={selectThree}
          checked={threeSelected && allSelected}
        />
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
    allSelected: state.allSelected,
    zeroSelected: state.zeroSelected,
    oneSelected: state.oneSelected,
    twoSelected: state.twoSelected,
    threeSelected: state.threeSelected,
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
