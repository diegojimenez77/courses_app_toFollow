import React from 'react';
import styles from './Header.module.css';
import { HeaderProps } from './Header.types';
// eslint-disable-next-line no-duplicate-imports
import { useState } from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

export const Header: React.FC<HeaderProps> = (props) => {
	const [userName, setUserName] = useState('Anonym');
	const [isAuthorized, setIsAuthorized] = useState(props.auth);

	const handleButtonClick = () => {
		if (!isAuthorized) {
			setIsAuthorized(true);
			setUserName(props.name);
		}
	};

	return (
		<div className={styles.header}>
			<Logo />
			<div className={styles.login}>
				<span>{userName}</span>
				<Button
					onClick={handleButtonClick}
					buttonText={isAuthorized ? 'Logout' : 'Login'}
				></Button>
			</div>
		</div>
	);
};

/*
***CHANGING STATE IN CLASS COMPONENTS***

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }

    handleClick = () => {
        this.setState((state) => {
            return {count: state.count + 1}
        });
    }
    
    render(){
        return <button onClick={this.handleClick}>You clicked {this.state.count}</button>
    }
}
*/
