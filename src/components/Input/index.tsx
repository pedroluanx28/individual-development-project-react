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

export function Input({ label, errorMessage, controlId, containerClassName, ...rest }: InputProps) {
	return (
		<Form.Group controlId={controlId} className={containerClassName}>
			{label && <Form.Label className="m-0">{label}</Form.Label>}
			<Form.Control {...rest} />
			{errorMessage && <span className="text-danger">{errorMessage}</span>}
		</Form.Group>
	);
}
