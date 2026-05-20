import CropsTable from './components/pages/CropsTable'
import Home from './components/pages/Home'
import PlantsTable from './components/pages/PlantsTable'
import TomRequestTable from './components/pages/TomRequestTable'
import Navbar from './components/ui/Navbar'
import Legal from './components/pages/Legal'
import { useState } from 'react'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="flex min-h-screen">
      <Navbar page={page} setPage={setPage} />
      <main className="flex-1 p-8">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'crops' && <CropsTable />}
        {page === 'plants' && <PlantsTable />}
        {page === 'tom' && <TomRequestTable />}
        {page === 'legal' && <Legal />}
      </main>
    </div>
  )
}