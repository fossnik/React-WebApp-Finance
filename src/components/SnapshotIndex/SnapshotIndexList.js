import React from 'react'
import PropTypes from 'prop-types'
import '../../common/Table.css'

const CoinMenuList = (props) => {
	const { result } = props;

	return (
		<div className="Table-container">
			<table className="Table">
				<thead className="Table-head">
				<tr>
					<th>Coins</th>
				</tr>
				</thead>
				<tbody className="Table-body">
				{result.map(snapshot => (
					<tr key={snapshot.ID}>
						<td>
							<span>
								<a href={snapshot.ID}>{snapshot.dateCreated}</a>
							</span>
						</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	)
};

CoinMenuList.propTypes = {
	result: PropTypes.array.isRequired,
};

export default CoinMenuList