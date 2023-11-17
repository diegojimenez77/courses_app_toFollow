import React from 'react';
import { InputProps } from './Input.types';
import styles from './Input.module.css';

export const Input: React.FC<InputProps> = ({
	labelText,
	placeholderText,
	value,
	inputType,
	onChange,
}) => {
	return (
		<div>
			<label className={styles.label}>
				{labelText}
				<input
					placeholder={placeholderText}
					value={value}
					type={inputType}
					onChange={(e) => onChange && onChange(e.target.value)} //props.onChange has undefined type
				></input>
			</label>
		</div>
	);
};
