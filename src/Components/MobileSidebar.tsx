import React, { FC, useState } from "react";
import { IoMdMenu } from "react-icons/io";

const MobileSidebar: FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <IoMdMenu
        className="text-5xl mx-4 my-4 md:hidden fixed "
        onClick={handleShow}
      />
      {show && (
        <div className="absolute w-3/4 h-screen md:hidden bg-blue-400"></div>
      )}
    </>
  );
};

export default MobileSidebar;
