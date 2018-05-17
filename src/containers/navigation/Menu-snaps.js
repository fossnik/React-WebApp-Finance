import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectSnapshot } from "../../actions/index"

class MenuSnaps extends Component {
	constructor(props) {
		super(props);

		this.onSnapChange = this.onSnapChange.bind(this);
	}

	onSnapChange(event) {
		this.props.selectSnapshot(event.target.value)
	}

	render() {
		if (this.props.snapshots)
			return <select
				value={this.props.activeSnapshot || ''}
				onChange={this.onSnapChange}
				className='NaviBox-element'
			>
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
	return bindActionCreators({selectSnapshot}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuSnaps)