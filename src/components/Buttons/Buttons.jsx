import React from "react";
import styles from "./Buttons.module.css";

const Button = (props) => {
	const { btnText, onClickHandler } = props;
	return (
		<div className={styles.wrapper}>
			<button onClick={onClickHandler}>{btnText}</button>
		</div>
	);
};

export default Button;