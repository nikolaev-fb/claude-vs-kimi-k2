import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-full md:w-64 bg-gray-100 md:min-h-screen p-6 border-b md:border-b-0 md:border-r border-gray-200 flex-shrink-0">
      <h2 className="text-2xl font-bold mb-4 md:mb-8 text-gray-800">My Blog</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium block">
              Home
            </Link>
          </li>
          {/* We could add static links or fetch posts here if needed,
              but keeping it simple as requested */}
          <li>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium block">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-10">
        <h3 className="text-sm uppercase text-gray-500 font-bold tracking-wider mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Next.js</span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">React</span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Tailwind</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
