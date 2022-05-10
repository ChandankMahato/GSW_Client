import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from './containers/404';
import Footer from './components/Footer';
toast.configure();

function App() {
 
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={PageNotFound}/>
          </Switch>
        </Router>
        <ToastContainer 
          autoClose= {5000}
          hideProgressBar= {false}
          closeOnClick= {true}
          pauseOnHover= {true}
          draggable= {true}
          progress= {undefined}
          />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
