import { useCallback } from "react";

const useUi = () => {
  const scrolltoElement = useCallback(
    (element: React.MutableRefObject<HTMLElement | null>): void => {
      element.current?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return { scrolltoElement };
};

export default useUi;
