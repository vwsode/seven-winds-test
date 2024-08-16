import React, { forwardRef } from "react";

import { Input } from "./TextField.style";
import { TextFieldProps } from "./TextField.types";

export const TextField = forwardRef(function TextField(
  props: TextFieldProps,
  ref: React.Ref<HTMLInputElement>
): JSX.Element {
  return <Input ref={ref} {...props} />;
});
