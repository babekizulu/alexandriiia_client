//libs
import {createRoot} from 'react-dom/client'
//components
import App from './App'
//context
import { NarrativesProvider } from './components/context/narratives'

const root = createRoot(document.getElementById('root'))
root.render(
  <NarrativesProvider>
    <App />
  </NarrativesProvider>
)
