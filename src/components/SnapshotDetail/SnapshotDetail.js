import React from 'react'
import { API_URL } from '../../config'
import SnapshotIndexList from './SnapshotIndexList'

class SnapshotIndex extends React.Component {
	constructor() {
		super();

		this.state = {
			coin: "adausd",
			snapid: 1,
			result: {},
		}
	}

	componentDidMount() {
		fetch(`${API_URL}/${this.state.coin}/${this.state.snapid}`)
			.then((response) => response.json().then(json => {
				return response.ok ? json : Promise.reject(json);
			}))
			.then((response) => {
				this.setState({
					result: response,
				})
			})
			.catch(error => {
				console.log("Could not Load from API\n" + error);
			})
	}

	render() {
		return <SnapshotIndexList result={this.state.result}/>
	}
}

export default SnapshotIndex