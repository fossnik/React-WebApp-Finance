import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectSnapshot, fetchSnapshotIndex } from "../actions"

class SnapMenu extends Component {
	constructor(props) {
		super(props);

		this.onSnapChange = this.onSnapChange.bind(this);
	}

	componentDidMount() {
		this.props.fetchSnapshotIndex(this.props.activeCoin)
	}

	onSnapChange(event) {
		this.props.selectSnapshot(event.target.value)
	}

	render() {
		if (this.props.snapshots)
			return <select value={this.props.activeSnapshot || ''} name="snapId" onChange={this.onSnapChange}>
				{
					this.props.snapshots.map(snapshot => {
						return <option key={snapshot[0]} value={snapshot[0]}>
							{snapshot[1]}
						</option>
					})
				}
			</select>;
		else
			return <div/>;
	}
}

function mapStateToProps(state) {
	return {
		activeCoin: state.activeCoin,
		snapshots: state.snapshots,
		activeSnapshot: state.activeSnapshot,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectSnapshot, fetchSnapshotIndex}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SnapMenu)