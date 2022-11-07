import React from "react";
import { FlashMessage2 } from "./FlashMessages2.Styled";
import { useFlashMessageStore2 } from "./useFlashMessageStore2";

const FlashMessages2 = () => {
  const { flashMessages, flashDuration } = useFlashMessageStore2();
  return (
    flashMessages &&
    flashMessages.map((msg, i) => (
      <FlashMessage2 flashDuration={flashDuration} key={i}>
        <div>{msg}</div>
      </FlashMessage2>
    ))
  );
};

export default FlashMessages2;
