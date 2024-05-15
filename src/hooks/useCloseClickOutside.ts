import { useEffect, useRef } from "react";

export const useCloseClickOutside = (handler: () => void, isCapturing: boolean = true) => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handleCloseModal = (e: MouseEvent) => {
      if (ref.current! && !ref?.current!.contains(e.target as HTMLElement)) {
        handler();
      }
    };

    document.addEventListener("click", handleCloseModal, isCapturing);

    return () => {
      document.removeEventListener("click", handleCloseModal, isCapturing);
    };
  }, [handler, isCapturing]);

  return ref;
};
