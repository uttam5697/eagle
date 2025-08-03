import { Toaster } from 'react-hot-toast'
import AppProvider from './provider'

function App() {

  return (
    <>
      <div>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
         <AppProvider />
      </div>
    </>
  )
}

export default App
