import React, { Component } from 'react'
import CoinMenu from '../containers/CoinMenu'
// import SnapMenu from '../components/nav/SnapMenu'
import './NaviBox.css'

export default class NaviBox extends Component {
	render() {
		return <form className='NaviBox-form'>
			<CoinMenu className='NaviBox-element'/>
			{/*<SnapMenu className='NaviBox-element'/>*/}
		</form>;
	}
}