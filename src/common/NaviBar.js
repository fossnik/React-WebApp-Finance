import React, { Component } from 'react'
import CoinMenu from '../components/nav/CoinMenu'
import SnapMenu from '../components/nav/SnapMenu'
import './NaviBar.css'

export default class NaviBar extends Component {
	render() {
		const {
			coin,
			snapId,
			resultFirst,
			resultSecond,
		} = this.props.state;

		if (resultFirst)
			return <form className='NaviBar-form'>
				<CoinMenu className='NaviBar-element' coin={coin} resultFirst={resultFirst}/>
				<SnapMenu className='NaviBar-element' snapId={snapId} resultSecond={resultSecond}/>
			</form>;
		else
			return <div/>
	}
}