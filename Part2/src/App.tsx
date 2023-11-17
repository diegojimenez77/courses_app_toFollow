import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { mockedCoursesList, mockedAuthorsList } from './constants';
import { Course } from './components/Courses/components/CourseCard.types';

function App() {
	const [pageNumber, setPageNumber] = useState(1);
	const [courses, setCourses] = useState<Course[]>(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);

	useEffect(() => {
		console.log('Authors:', authors);
		//console.log('Courses:', courses);
	}, [authors, courses]);

	return (
		<>
			<Header auth={false} name={'Dave'}></Header>
			{pageNumber === 0 && (
				<Courses
					setPageNumber={setPageNumber}
					courses={courses}
					authors={authors}
				/>
			)}
			{pageNumber === 1 && (
				<CreateCourse
					setCourses={setCourses}
					setPageNumber={setPageNumber}
					setAuthors={setAuthors}
					authors={authors}
				/>
			)}
		</>
	);
}

export default App;
