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
		return <select/>
};

SnapMenu.propTypes = {
	snapId: PropTypes.string.isRequired,
	resultSecond: PropTypes.object.isRequired,
};

export default SnapMenu