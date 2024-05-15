import {
  cloneElement,
  createContext,
  JSXElementConstructor,
  LegacyRef,
  ReactElement,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useCloseClickOutside } from "../hooks/useCloseClickOutside";

type ModalContextType = {
  closeModal(): void;
  openName: string;
  openWindow(name: string): void;
};

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

const WindowBody = styled.div`
  overflow: auto;
`;

const ModalContext = createContext<ModalContextType | null>(null);

function Modal({ children }: { children: React.ReactNode }) {
  const [openName, setOpenName] = useState<string>("");
  const closeModal = () => setOpenName("");
  const openWindow = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ closeModal, openName, openWindow }}>
      {children}
    </ModalContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
 function useModal() {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("Modal is being using outside of modal provider");
  return context;
}

function Open({
  children,
  opens: opensWindowName,
}: {
  children: ReactElement<
    HTMLElement,
    string | JSXElementConstructor<HTMLElement>
  >;
  opens: string;
}) {
  const { openWindow } = useModal();

  const clone = cloneElement(children, {
    //@ts-expect-error it has this property
    onClick: () => {
      openWindow(opensWindowName);
    },
  });

  return clone;
}

function Window({
  children,
  name: windowName,
}: {
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  name: string;
}) {
  const { openName, closeModal } = useModal();
  const ref = useCloseClickOutside(closeModal) as
    | LegacyRef<HTMLDivElement>
    | undefined;

  if (openName != windowName) return;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={closeModal}>&times;</Button>
        <WindowBody>
          {cloneElement(children, {
            //@ts-expect-error it has this property
            closeModal,
          })}
        </WindowBody>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
