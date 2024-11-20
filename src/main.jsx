import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AppCounter} from './AppCounter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCounter value={0} />
  </StrictMode>,
)
