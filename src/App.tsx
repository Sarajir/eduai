import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Program } from './pages/Program'
import { Generator } from './pages/Generator'
import { Log } from './pages/Log'
import { Safety } from './pages/Safety'
import { HostingGuide } from './pages/HostingGuide'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={routerBasename || undefined}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/log" element={<Log />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/publish" element={<HostingGuide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
