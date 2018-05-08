import React from 'react'
import PropTypes from 'prop-types'

const SnapMenu = (props) => {
	const {snapId, resultSecond} = props;

	if (resultSecond)
		return <select defaultValue={snapId|""} name="snapId">
			{
				resultSecond.snaps.map((snap, i) => {
					return <option key={i} value={snap.ID}>{snap.dateCreated}</option>;
				})
			}
		</select>;
	else
		return <div/>
};

SnapMenu.propTypes = {
	snapId: PropTypes.string,
	resultSecond: PropTypes.object,
};

export default SnapMenu