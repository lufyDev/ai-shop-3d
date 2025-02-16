import { useSnapshot } from "valtio"
import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import state from "./store"

function App() {
  const snap = useSnapshot(state)
  return (
    <main 
      className='app transition-all ease-in' 
      style={{background: `linear-gradient(135deg, #FFFFFF 20%, ${snap.color} 100%)`}}>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
