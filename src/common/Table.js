import React, { Component } from 'react'
import CoinIndex from '../components/tables/CoinIndex'
// import SnapshotIndex from '../components/tables/SnapshotIndex'
// import SnapshotDetail from '../components/tables/SnapshotDetail'
import { connect } from 'react-redux'

class Table extends Component {
	render() {

		// if (resultThird)
		// 	return <SnapshotDetail
		// 		result={resultThird}
		// 	/>;

		if (this.props.activeCoin)
			return <SnapshotIndex/>;

		if (this.props.coins)
			return <CoinIndex/>;

		return <div>Loading...</div>
	}
}

function mapStateToProps(state) {
	return {
		coins: state.coins
	}
}

export default connect(mapStateToProps)(Table)