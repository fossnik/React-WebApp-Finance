import React, { Component } from 'react'
import Table from './containers/Table'
import NaviBox from './containers/navigation/NaviBox'

export default class App extends Component {
	render() {
		return <div>
			<NaviBox/>
			<Table/>
		</div>
	}
}