import React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Input } from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { AuthorItem } from './components/AuthorItem/AuthorItem';
import { Author } from './CreateCourse.types';
import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { getTodaysDate } from 'src/helpers/getTodaysDate';
import { Course } from '../Courses/components/CourseCard.types';
import styles from './CreateCourse.module.css';

interface Props {
	setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
	setPageNumber: React.Dispatch<React.SetStateAction<number>>;
	setAuthors: React.Dispatch<React.SetStateAction<Author[]>>;
	authors: Author[];
}
const forbiddenSymbols = /[@#$%^&]/;

export const CreateCourse = ({
	setCourses,
	setPageNumber,
	setAuthors,
	authors,
}: Props) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [courseAuthors, setCourseAuthors] = useState<Author[]>([]);
	const [courseAuthorsIds, setCourseAuthorsIds] = useState<string[]>([]);
	const [innerAuthors, setInnerAuthors] = useState<Author[]>(authors); //for the authors displayed list
	const [newAuthorName, setNewAuthorName] = useState('');
	const [duration, setDuration] = useState('');
	const [durationMinutes, setDurationMinutes] = useState(0);

	const handleTitleChange = (value: string) => {
		if (!forbiddenSymbols.test(value) && value.length > 1) {
			setTitle(value);
		}
	};

	const handleDescriptionChange = (value: string) => {
		if (value.length > 1) setDescription(value);
	};

	const handleNewAuthor = (newAuthorName: string) => {
		if (newAuthorName.length < 2) {
			return;
		}
		const id = uuid();
		setAuthors((prev) => [...prev, { name: newAuthorName, id: id }]);
		setInnerAuthors((prev) => [...prev, { name: newAuthorName, id: id }]);
		setNewAuthorName('');
	};

	const addCourseAuthor = (newAuthor: Author) => {
		setCourseAuthors((prev) => [...prev, newAuthor]);
		setCourseAuthorsIds((prev) => [...prev, newAuthor.id]);
		console.log(newAuthor);
		setInnerAuthors((prev) => {
			return prev.filter((author) => {
				return author.id !== newAuthor.id;
			});
		});
	};

	const deleteCourseAuthor = (deleteAuthor: Author) => {
		setCourseAuthors((prev) => {
			return prev.filter((author) => {
				return author.id !== deleteAuthor.id;
			});
		});
		setCourseAuthorsIds((prev) => {
			return prev.filter((authorId) => {
				return authorId !== deleteAuthor.id;
			});
		});
		setInnerAuthors((prev) => [...prev, deleteAuthor]);
	};

	const handleDuration = (durationValue: string) => {
		const inputDuration = +durationValue;
		if (inputDuration < 1) {
			setDuration('');
			return;
		}
		setDurationMinutes(inputDuration);
		const resultDuration = getCourseDuration(inputDuration);
		setDuration(resultDuration);
	};

	const handleCreateCourse = () => {
		if (!title || !description || !duration || !courseAuthors) {
			alert('Please, fill in all fields');
			return;
		}
		const newCourse: Course = {
			id: uuid(),
			title: title,
			description: description,
			creationDate: getTodaysDate(),
			duration: durationMinutes,
			authors: courseAuthorsIds,
		};
		setCourses((prev) => [...prev, newCourse]);
		//setAuthors((prev) => [...prev, {id: newCourse.authors, name:}]);
		setPageNumber(0);
		console.log(newCourse);
	};

	return (
		<section className={styles.createcourse}>
			<div className={styles.title}>
				<Input
					labelText={'Title'}
					placeholderText={'Enter the title...'}
					inputType='text'
					onChange={handleTitleChange}
				/>
				<Button
					onClick={handleCreateCourse}
					buttonText={'Create course'}
				></Button>
			</div>
			<div className={styles.description}>
				<label>
					Description
					<textarea
						minLength={2}
						cols={50}
						rows={5}
						placeholder={'Enter description'}
						onChange={(e) => {
							handleDescriptionChange(e.target.value);
						}}
					></textarea>
				</label>
			</div>
			<div className={styles.durationAuthor}>
				<div className={styles.durationSide}>
					<>
						<p>
							<b>Add author</b>
						</p>
						<Input
							labelText={'Author name'}
							placeholderText={'Enter author name'}
							value={newAuthorName}
							inputType={'text'}
							onChange={setNewAuthorName}
						></Input>
						<Button
							onClick={() => handleNewAuthor(newAuthorName)}
							buttonText={'Create author'}
						></Button>
					</>
					<>
						<p>
							<b>Duration</b>
						</p>
						<Input
							labelText={'Duration'}
							placeholderText={'Enter duration in minutes'}
							inputType={'number'}
							onChange={handleDuration}
						></Input>
						<p>{`Duration: ${duration}`}</p>
					</>
				</div>
				<div className={styles.authorSide}>
					<>
						<p>
							<b>Authors</b>
						</p>
						{innerAuthors.map((author) => {
							return (
								<AuthorItem
									author={author}
									buttonText='Add author'
									onClick={addCourseAuthor}
								></AuthorItem>
							);
						})}
					</>
					<>
						<p>
							<b>Course authors</b>
						</p>
						{courseAuthors.map((author) => {
							return (
								<AuthorItem
									author={author}
									buttonText='Delete author'
									onClick={deleteCourseAuthor}
								></AuthorItem>
							);
						})}
					</>
				</div>
			</div>
		</section>
	);
};
