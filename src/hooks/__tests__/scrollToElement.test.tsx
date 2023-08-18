import { renderHook } from "@testing-library/react";
import useUi from "../useUi";
import { vi } from "vitest";
import { MutableRefObject } from "react";

describe("Given a useUi - scrollToElement function", () => {
  describe("When it is called", () => {
    test("It should scroll to an element with smooth behaviour", () => {
      const elementRef = {
        current: { scrollIntoView: vi.fn() },
      } as unknown as MutableRefObject<HTMLElement>;

      const {
        result: {
          current: { scrolltoElement },
        },
      } = renderHook(() => useUi());

      scrolltoElement(elementRef);

      expect(elementRef.current.scrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
      });
    });
  });
});
