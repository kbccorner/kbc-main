import { Route,BrowserRouter,Redirect } from "react-router-dom";
import Layout from "./components/layout";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Help from "./pages/help/helpcenter";

function App() {
  return (
    <div className="App"  >
      <Layout>
   
      <Route path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/help" >
          <Help />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
