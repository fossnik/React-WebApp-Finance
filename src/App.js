import React, { Component } from 'react'
import Table from './common/Table'
import NaviBox from './common/NaviBox'

export default class App extends Component {
	render() {
		return <div>
			<NaviBox/>
			<Table/>
		</div>
	}
}