import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../Table.css'
import { bindActionCreators } from 'redux'
import { selectCoin, selectSnapshot } from "../../actions";
import CoinMenu from '../navigation/Menu-coins'
import SnapMenu from '../navigation/Menu-snaps'

class SnapshotDetailHeader extends Component {
	constructor(props) {
		super(props);

		this.onClickNextSnap = this.onClickNextSnap.bind(this);
		this.onClickPrevSnap = this.onClickPrevSnap.bind(this);
	}

	onClickNextSnap() {
		this.props.selectSnapshot(this.props.adjacentSnaps.next)
	}

	onClickPrevSnap() {
		this.props.selectSnapshot(this.props.adjacentSnaps.prev)
	}

	render() {
		return <div className="Detail-coin">
			<div className='FullName'>{this.props.activeCoinFullName}</div>
			<div className='SnapShot'>
				<span className='left' onClick={this.onClickNextSnap}>previous</span>
					<div value={this.props.activeCoin.symbol_full}/>
				<span className='right' onClick={this.onClickPrevSnap}>next</span>
			</div>
			<CoinMenu/>
			<SnapMenu/>
		</div>
	}
}

function mapStateToProps(state) {
	return {
		activeCoin: state.activeCoin,
		activeSnapshot: state.activeSnapshot,
		adjacentSnaps: {
			next: state.snapshots.filter(snap => snap[0] === state.activeSnapshot+1).length !== 0 ? state.activeSnapshot+1 : null,
			prev: state.snapshots.filter(snap => snap[0] === state.activeSnapshot-1).length !== 0 ? state.activeSnapshot-1 : null
		},
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectCoin, selectSnapshot}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SnapshotDetailHeader)