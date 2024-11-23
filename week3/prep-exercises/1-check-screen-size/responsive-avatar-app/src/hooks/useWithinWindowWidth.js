import useWindowSize from "./useWindowSize";
import { useDebugValue } from "react";

function useWithinWindowWidth(minWidth, maxWidth) {
  const { width } = useWindowSize();
  const isWithin = width && width >= minWidth && width <= maxWidth;

  useDebugValue(
    { minWidth, maxWidth, isWithin },
    ({ minWidth, maxWidth, isWithin }) =>
      `(min: ${minWidth}px, max: ${maxWidth}px) => ${isWithin}`
  );
  return isWithin;
}

export default useWithinWindowWidth;
