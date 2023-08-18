import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inputform from './components/InputForm';
import Page2 from './components/Page2';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inputform />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
