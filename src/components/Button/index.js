import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ buttonType, buttonStyles, children, handleBtnClick }) => {
	return (
		<button
			className={buttonStyles}
			type={buttonType}
			onClick={handleBtnClick}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	buttonType: PropTypes.string.isRequired,
	buttonStyles: PropTypes.string.isRequired,
	handleBtnClick: PropTypes.func
}

export default Button;
