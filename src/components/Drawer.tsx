import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

type DrawerProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Drawer({
  title = "",
  description = "",
  children,
  isOpen,
  setIsOpen,
}: DrawerProps) {
  return (
    <Dialog
      unmount={false}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed z-50 top-0  overflow-y-auto  right-0"
    >
      <div className="flex  h-screen  w-full ">
        <Dialog.Overlay className="z-40 fixed inset-0 bg-black bg-opacity-30 " />
        <div
          className={`z-50 flex flex-col  bg-abSlate-dark w-full
          max-w-sm px-9 py-7 overflow-hidden text-left items-end gap-3
          shadow-xl`}
        >
          <button onClick={() => setIsOpen(!isOpen)}>
            <XMarkIcon width={24} />
          </button>
          <div>
            <Dialog.Title className="font-bold text-2xl md:text-4xl text-blue-400">
              {title}
            </Dialog.Title>
            <Dialog.Description>{description}</Dialog.Description>
            {children}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
