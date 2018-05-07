import React, { Component } from 'react'
import CoinMenu from '../components/nav/CoinMenu'
import SnapMenu from '../components/nav/SnapMenu'
import './NaviBox.css'

export default class NaviBox extends Component {
	render() {
		const {
			coin,
			snapId,
			resultFirst,
			resultSecond,
		} = this.props.state;

		if (resultFirst && resultSecond)
			return <form className='NaviBox-form'>
				<CoinMenu className='NaviBox-element' coin={coin} resultFirst={resultFirst}/>
				<SnapMenu className='NaviBox-element' snapId={snapId} resultSecond={resultSecond}/>
			</form>;
		else
			return <div/>
	}
}