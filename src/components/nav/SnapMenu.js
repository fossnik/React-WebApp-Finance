import React from 'react'
import PropTypes from 'prop-types'

const SnapMenu = (props) => {
	const {snapId, resultSecond} = props;

	if (resultSecond)
		return <select name="snapId">
			{
				resultSecond.snaps.map((snap) => {
					if (snap.ID === snapId)
						return <option selected value={snap.ID}>{snap.dateCreated}</option>;
					else
						return <option value={snap.ID}>{snap.dateCreated}</option>;
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