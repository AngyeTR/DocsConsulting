import { Routes, Route, Navigate } from "react-router-dom";
import { useDataStore } from "./Store/dataStore";
import Layout from './pages/Layout';
import HomePage from './pages/HomePage/HomePage';
import PlanView from "./pages/PlanView/PlanView";
import './App.css'

function App() {

  const plan = useDataStore(state => state.plan)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/view"  element={ plan ? <PlanView/> : <Navigate replace to="/" /> } />
      </Routes>   
    </Layout>
  )
}

export default App
