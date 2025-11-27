import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App} from './App.tsx'

const div = document.getElementById('root') as HTMLElement
const root = createRoot(div)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
