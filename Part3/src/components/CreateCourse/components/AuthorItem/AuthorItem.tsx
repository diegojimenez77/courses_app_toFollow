import React from 'react';
import Button from 'src/common/Button/Button';
import { Author } from '../../CreateCourse.types';

interface Props {
	author: Author;
	buttonText: string;
	onClick: ((newAuthor: Author) => void) | undefined;
}

export const AuthorItem = ({ author, buttonText, onClick }: Props) => {
	const handleClick = (author: Author) => {
		onClick && onClick({ name: author.name, id: author.id });
	};

	return (
		<div>
			<p>{author.name}</p>
			<Button
				onClick={() => handleClick(author)}
				buttonText={buttonText}
			></Button>
		</div>
	);
};
