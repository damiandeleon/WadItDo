import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Wrapper from "./Components/Wrapper";
import Main from "./Pages/Main";


function App() {
  return (
    <Router>
   <div>
     <Wrapper>
      {/* in here, you're going to put in the routes for each page */}
      <Route exact path="/" component={Main} />
     </Wrapper>
   </div>
    </Router>

  );
}

export default App;
