import './App.css'
import { CustomCursor } from './components/CustomCursor'
import { ClickSpark } from './components/ClickSpark'

function App() {
    return (
        <div className="min-h-dvh bg-black w-full">
            <div className="text-primary">Murat Demirkiran</div>
            <CustomCursor />
            <ClickSpark />
        </div>
    )
}

export default App
