import React from "react";
import Button from "../Button";

const MenuItem = ({ content }) => (
	<li className="menu__item">
		<Button buttonStyles="menu__link" type="button">
			{content}
		</Button>
	</li>
);

export default MenuItem;
