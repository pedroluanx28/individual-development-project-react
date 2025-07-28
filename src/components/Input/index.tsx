import { BsPrefixProps } from "react-bootstrap/esm/helpers";

import { FormControlProps } from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

type InputProps = FormControlProps &
	BsPrefixProps<"input"> & {
		label?: string;
		errorMessage?: string;
		controlId?: string;
		containerClassName: string;
	};

export function Input({
	label,
	errorMessage,
	controlId,
	containerClassName,
	isInvalid,
	...rest
}: InputProps) {
	const isInputInvalid = isInvalid || Boolean(errorMessage);

	return (
		<Form.Group controlId={controlId} className={containerClassName}>
			{label && <Form.Label className="m-0">{label}</Form.Label>}
			<Form.Control {...rest} isInvalid={isInputInvalid} />
			{errorMessage && (
				<span className="text-danger" id={`${controlId}-error`}>
					{errorMessage}
				</span>
			)}
		</Form.Group>
	);
}
