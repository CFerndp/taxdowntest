import { Dispatch, SetStateAction } from "react";

export const onTextChange =
  (setter: Dispatch<SetStateAction<string>>) => (value: string) => {
    setter(value);
  };

export const onCheckChange =
  (prevValue: boolean, setter: Dispatch<SetStateAction<boolean>>) => () => {
    setter(!prevValue);
  };
