import CropsTable from './components/pages/CropsTable'
import Home from './components/pages/Home'
import PlantsTable from './components/pages/PlantsTable'
import TomRequestTable from './components/pages/TomRequestTable'
import Navbar from './components/ui/Navbar'
import Legal from './components/pages/Legal'
import { useState } from 'react'

export default function App() {
  const [page, setPage] = useState('home')
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      <Navbar page={page} setPage={setPage} navOpen={navOpen} setNavOpen={setNavOpen} />
      <main className={`flex-1 p-4 xl:p-8 transition-all duration-300 ${navOpen ? 'xl:ml-[320px]' : 'ml-0'}`}>
        <button onClick={() => setNavOpen(o => !o)} className={`fixed top-4 z-50 text-4xl text-[#a8a8b0] hover:text-white transition-all duration-300 ${navOpen ? 'left-4 xl:left-[336px]' : 'left-4'}`}>{navOpen ? '←' : '☰'}</button>
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'crops' && <CropsTable />}
        {page === 'plants' && <PlantsTable />}
        {page === 'tom' && <TomRequestTable />}
        {page === 'legal' && <Legal />}
      </main>
    </div>
  )
}