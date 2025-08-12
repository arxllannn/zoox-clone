'use client'
export default function Footer() {
  return (
    <footer className="bg-black text-white p-6 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Zoox Clone. Built for educational purposes.</p>
    </footer>
  )
}
