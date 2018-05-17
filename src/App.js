import React, { Component } from 'react'
import Table from './components/Table'
import NaviBox from './components/NaviBox'

export default class App extends Component {
	render() {
		return <div>
			<NaviBox/>
			<Table/>
		</div>
	}
}