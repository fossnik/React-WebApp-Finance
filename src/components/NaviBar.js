import React, { Component } from 'react'
import CoinMenu from './nav/CoinMenu'

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
		</form>
	}
}