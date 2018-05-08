import React from 'react'
import PropTypes from 'prop-types'

const CoinMenu = (props) => {
	const {coin, resultFirst} = props;

	if (resultFirst)
		return <select defaultValue={coin} name="coin">
			{
				resultFirst.names.map((coinName, i) => {
					return <option key={i} value={coinName}>{coinName}</option>;
				})
			}
		</select>;
	else
		return <div/>
};

CoinMenu.propTypes = {
	coin: PropTypes.string,
	resultFirst: PropTypes.object,
};

export default CoinMenu