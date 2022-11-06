import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import { Drawer } from "../../components";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="px-6 sticky  top-0 w-full bg-abNavy">
      <nav className="h-20 flex items-center  justify-between">
        <div className="text-abGreen hover:opacity-95 text-lg font-semibold">
          <Link href={"/"} passHref>
            Abbas Moharami
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setDrawerOpen(true)}>
            <Bars3Icon width={24} />
          </button>
          <Drawer isOpen={drawerOpen} setIsOpen={(val) => setDrawerOpen(val)}>
            <div className="flex flex-col gap-3 w-40">
              <a href="#about">About</a>
            </div>
          </Drawer>
        </div>

        <div className="hidden md:flex  gap-3 w-40 flex-1 items-center justify-end  ">
          <a href="#about">About</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
