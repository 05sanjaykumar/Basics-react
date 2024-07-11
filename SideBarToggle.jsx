import { useState } from "react";
import { Menu,X } from "lucide-react"; // npm install lucide-react
function App() {
  const [isOpen,setOpen] = useState(false);

  const toggleSideBar = ()=>{
    setOpen(!isOpen);
  }


  return (
    <>
    <div className="relative min-h-screen">
      <div className="container">
    {!isOpen &&
    <button
        onClick={toggleSideBar}
        className="fixed top-4 left-4 z-20 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
         <Menu size={24}/>
      </button>}
      <div className={` fixed  top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <h2 className="text-2xl font-bold mb-5">Sidebar</h2>
        <X onClick={toggleSideBar} className="top-6 right-4 bg-red-800 absolute rounded-md p-1 hover:bg-red-600 hover:text-bold" size={24}/>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-blue-300">Home</a></li>
          <li className="mb-2"><a href="#" className="hover:text-blue-300">About</a></li>
          <li className="mb-2"><a href="#" className="hover:text-blue-300">Services</a></li>
          <li className="mb-2"><a href="#" className="hover:text-blue-300">Contact</a></li>
        </ul>
      </div>
      </div>

      <div className={`p-5 transition-all duration-300 ease-in-out ${isOpen ? 'ml-64' : 'ml-0'}`}>
        <h1 className={`text-2xl font-bold mb-4 ${!isOpen ? 'mx-10' : ''}`}>Main Content</h1>
        <p>This is where your main content would go. It will be visible even when the sidebar is open.</p>
      </div>
    </div>
    </>
  );
}

export default App;
