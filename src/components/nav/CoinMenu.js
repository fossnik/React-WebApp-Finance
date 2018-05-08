import React from 'react'
import PropTypes from 'prop-types'

const CoinMenu = (props) => {
	const {coin, resultFirst} = props;

	if (resultFirst.coins)
		return <select defaultValue={coin} name="coin">
			{
				resultFirst.coins.map((coinObj, i) => {
					return <option key={i} value={coinObj.symbol_safe}>{coinObj.name}</option>;
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