export default function Footer() {
  return (
    <footer className="z-1 bg-gray-900 text-gray-300 py-6 mt-auto text-center border-t border-gray-700">
      <p className="z-1 text-sm">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Dilshan</span>. All rights reserved.
      </p>
    </footer>
  )
}
