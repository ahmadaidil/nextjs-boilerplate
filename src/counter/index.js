import { connect } from 'react-redux'

import counterPage from './counter.page'
import * as counter from './counter.action'

const mapStateToProps = (state) => ({
  count: state.counter.count
})

const mapDispatchToProps = (dispatch) => ({
  incrementCount: () => dispatch(counter.incCount()),
  decrementCount: () => dispatch(counter.decCount())
})

export default connect(mapStateToProps, mapDispatchToProps)(counterPage)
