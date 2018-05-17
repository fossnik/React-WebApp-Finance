import React, { Component } from 'react'
import CoinIndex from './views/CoinIndex'
import SnapshotIndex from './views/SnapshotIndex'
import SnapshotDetail from './views/SnapshotDetail'
import CoinMenu from './navigation/Menu-coins'
import { connect } from 'react-redux'

class Table extends Component {
	render() {
		if (this.props.activeCoin && this.props.activeSnapshot)
			return <div>
				<CoinMenu/>
				<SnapshotDetail/>
			</div>;

		if (this.props.activeCoin)
			return <div>
				<CoinMenu/>
				<SnapshotIndex/>
			</div>;

		return <CoinIndex/>;
	}
}

function mapStateToProps(state) {
	return {
		coins: state.coins,
		activeCoin: state.activeCoin,
		activeSnapshot: state.activeSnapshot,
	}
}

export default connect(mapStateToProps)(Table)