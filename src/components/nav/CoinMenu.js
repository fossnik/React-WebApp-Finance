import React from 'react'
import PropTypes from 'prop-types'

const CoinMenu = (props) => {
	const {coin, resultFirst} = props;

	if (resultFirst)
		return <select name="coin">
			{
				resultFirst.names.map((coinName) => {
					if (coinName === coin)
						return <option selected value={coinName}>{coinName}</option>;
					else
						return <option value={coinName}>{coinName}</option>;
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