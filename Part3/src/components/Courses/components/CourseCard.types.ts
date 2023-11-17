import { Author } from 'src/components/CreateCourse/CreateCourse.types';

export interface CourseCardProps {
	key: string;
	title: string;
	authorsId: string[];
	authors: Author[];
	duration: number;
	creationDate: string;
	description: string;
}

export interface Course {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
}
