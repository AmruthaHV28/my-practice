import { Project } from "./components/Project"
import { Portfolio } from "./pages/Portfolio.page"
import {Router,Routes,Route} from 'react-router-dom'

export const App:React.FC<{}>=()=>{
  return<>
  <Routes >
    <Route path='/' element={<Portfolio/>}/>
  <Route path='/Project' element={<Project/>}/>
    </Routes>  
 </>
}