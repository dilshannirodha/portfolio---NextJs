import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <nav className="container mx-auto flex gap-8 px-4">
        <Link href="/" className="hover:text-blue-400 transition-colors font-medium">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-400 transition-colors font-medium">
          About
        </Link>
        <Link href="/projects" className="hover:text-blue-400 transition-colors font-medium">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-blue-400 transition-colors font-medium">
          Contact
        </Link>
      </nav>
    </header>
  )
}
