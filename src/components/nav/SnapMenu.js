import React from 'react'
import PropTypes from 'prop-types'

const SnapMenu = (props) => {
	const {snapId, resultSecond} = props;

	if (resultSecond)
		return <select name="snapId">
			{
				resultSecond.snaps.map((snap, i) => {
					if (snap.ID.toString() === snapId)
						return <option key={i} selected value={snap.ID}>{snap.dateCreated}</option>;
					else
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