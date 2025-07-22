import { IMaskMixin } from "react-imask";

import FormControl from "react-bootstrap/FormControl";

type Props = any;

export const MaskedInput = IMaskMixin(({ inputRef, ...props }: Props) => (
	<FormControl {...props} ref={inputRef} />
));
