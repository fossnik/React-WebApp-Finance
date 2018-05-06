import React, { Component } from 'react'
import CoinMenu from './nav/CoinMenu'
import SnapMenu from './nav/SnapMenu'

export default class NaviBar extends Component {
	render() {
		const {
			coin,
			snapId,
			resultFirst,
			resultSecond,
		} = this.props.state;

		return <form action="#" method="post">
					<CoinMenu coin={coin} resultFirst={resultFirst}/>
					<SnapMenu snapId={snapId} resultSecond={resultSecond}/>
		</form>
	}
}