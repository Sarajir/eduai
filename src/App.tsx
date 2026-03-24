import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Program } from './pages/Program'
import { Generator } from './pages/Generator'
import { Log } from './pages/Log'
import { Safety } from './pages/Safety'
import { CalibrationLab } from './pages/CalibrationLab'
import { PerspectiveLab } from './pages/PerspectiveLab'
import { Community } from './pages/Community'
import { SupportHub } from './pages/SupportHub'

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
          <Route path="/calibration" element={<CalibrationLab />} />
          <Route path="/perspective" element={<PerspectiveLab />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/support" element={<SupportHub />} />
          <Route path="/community" element={<Community />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
