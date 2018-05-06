import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CoinIndex from '../components/tables/CoinIndex'
import SnapshotIndex from '../components/tables/SnapshotIndex'
import SnapshotDetail from '../components/tables/SnapshotDetail'

export default class Table extends Component {
	render() {
		const {
			coinSelectHandler,
			snapshotSelectHandler,
			resultFirst,
			resultSecond,
			resultThird,
		} = this.props;

		if (resultThird)
			return <SnapshotDetail
				result={resultThird}
			/>;

		else if (resultSecond)
			return <SnapshotIndex
				result={resultSecond}
				action={snapshotSelectHandler}
			/>;

		else if (resultFirst)
			return <CoinIndex
				result={resultFirst}
				action={coinSelectHandler}
			/>;

		else
			return <div>Loading...</div>
	}
}

Table.propTypes = {
	coinSelectHandler: PropTypes.func.isRequired,
	snapshotSelectHandler: PropTypes.func.isRequired,
	resultFirst: PropTypes.object,
	resultSecond: PropTypes.object,
	resultThird: PropTypes.object,
};