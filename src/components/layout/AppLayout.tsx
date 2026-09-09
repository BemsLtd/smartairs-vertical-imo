import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-page text-text-dark font-sans overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
