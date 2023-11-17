import React from 'react';
import styles from './CourseCard.module.css';
import Button from 'src/common/Button/Button';
import { CourseCardProps } from './CourseCard.types';
import { getCourseDuration } from 'src/helpers/getCourseDuration';

export const CourseCard: React.FC<CourseCardProps> = (props) => {
	const authorsNames = () => {
		return props.authorsId.map((authorId) => {
			for (let i = 0; i < props.authors.length; i++) {
				if (authorId === props.authors[i].id) {
					return props.authors[i].name;
				}
			}
		});
	};

	return (
		<section className={styles.courseCard}>
			<div className={styles.leftSide}>
				<h2>{props.title}</h2>
				<p>{props.description}</p>
			</div>
			<div className={styles.rightSide}>
				<h3>
					<b>Authors: </b>
					{authorsNames().join(', ')}
				</h3>
				<h3>
					<b>Duration: </b>
					{getCourseDuration(props.duration)}
				</h3>
				<h3>
					<b>Created: </b>
					{props.creationDate}
				</h3>
				<Button onClick={undefined} buttonText='Show course'></Button>
			</div>
		</section>
	);
};
