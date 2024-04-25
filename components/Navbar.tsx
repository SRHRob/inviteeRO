// Navbar.tsx
const Navbar = () => {
    return (
      <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
        <div className="text-xl">
          <a href="/">Logo</a>
        </div>
        <div className="text-lg">
          <a href="/previzualizare" className="mr-4">Test1</a>
          <a href="/test2" className="mr-4">Test2</a>
          <a href="/test3">Test3</a>
        </div>
        <div>
          <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">
            Intra in cont
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Creare cont
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  