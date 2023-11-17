import React from 'react';
// import { Author } from 'src/components/CreateCourse/CreateCourse.types';
// import styles from './Button.module.css';

function Button({
	onClick,
	buttonText,
}: {
	onClick: (() => void) | undefined;
	buttonText: string;
}) {
	return (
		<button
			//className={styles.button}
			style={{ height: 'fit-content', fontSize: 'x-small' }}
			onClick={() => {
				onClick && onClick();
			}}
		>
			{buttonText}
		</button>
	);
}

export default Button;
