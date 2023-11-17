export interface InputProps {
	labelText: string;
	placeholderText: string;
	value?: string;
	inputType: string;
	onChange: ((arg: any) => void) | undefined;
}
