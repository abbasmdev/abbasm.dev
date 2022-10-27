import { Dialog } from "@headlessui/react";

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
      className="fixed z-30 inset-0 overflow-y-auto"
    >
      <div className="flex w-3/4 h-screen">
        <Dialog.Overlay className="z-40 fixed inset-0 bg-black bg-opacity-30" />
        <div
          className={`z-50 flex flex-col justify-between bg-gray-500 w-full
                         max-w-sm p-6 overflow-hidden text-left align-middle
                         shadow-xl`}
        >
          <div>
            <Dialog.Title className="font-bold text-2xl md:text-4xl text-blue-400">
              {title}
            </Dialog.Title>
            <Dialog.Description>{description}</Dialog.Description>
            {children}
          </div>
          <div className="self-center mt-10">
            <Button onClick={() => setIsOpen(!isOpen)}>Close</Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
