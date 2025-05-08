import Login from "./components/Login"
import { BrowserRouter, Route, Router } from "react-router"

function App() {

  return (
    <BrowserRouter>
      <div className="h-screen bg-gray-500 text-4xl text-center">
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </div>
    </BrowserRouter>
  )
}

export default App
