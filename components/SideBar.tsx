import { useState } from 'react';
function SideBar() {
  const [isOpen,setIsOpen] = useState(true);
  const handleSidebar = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <div className={`bg-[#EE5513] ${isOpen ? 'w-[300px]': 'w-[50px]'}  h-screen`}>
      <p onClick={handleSidebar}>Click</p>
    </div>
  );
}

export default SideBar;
