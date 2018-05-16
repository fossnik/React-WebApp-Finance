import React, { Component } from 'react'
import CoinMenu from '../containers/CoinMenu'
import SnapMenu from '../containers/SnapMenu'
import './NaviBox.css'
import { connect } from 'react-redux'

class NaviBox extends Component {
	render() {
		if (this.props.activeCoin)
			return <form className='NaviBox-form'>
				<CoinMenu/>
				<SnapMenu/>
			</form>;

		else
			return <form className='NaviBox-form'>
				<CoinMenu/>
			</form>;
	}
}

function mapStateToProps(state) {
	return {
		activeCoin: state.activeCoin
	}
}

export default connect(mapStateToProps)(NaviBox)