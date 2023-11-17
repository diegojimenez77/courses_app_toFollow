import React from 'react';
import styles from './Courses.module.css';
import { CourseCard } from './components/CourseCard';
import Button from '../../common/Button/Button';
import { Course } from './components/CourseCard.types';
import { Author } from '../CreateCourse/CreateCourse.types';

interface Props {
	setPageNumber: React.Dispatch<React.SetStateAction<number>>;
	courses: Course[];
	authors: Author[];
}

export function Courses({ setPageNumber, courses, authors }: Props) {
	return (
		<section>
			<div className={styles.searchBar}>
				<input type='search' placeholder='Enter course name or id...'></input>
				<button>Search</button>
				<Button
					onClick={() => {
						setPageNumber(1);
					}}
					buttonText={'Add new course'}
				></Button>
			</div>
			{courses.map((course) => {
				return (
					<CourseCard
						key={course.id}
						title={course.title}
						authorsId={course.authors}
						authors={authors}
						duration={course.duration}
						creationDate={course.creationDate}
						description={course.description}
					></CourseCard>
				);
			})}
		</section>
	);
}

// export default Courses;
