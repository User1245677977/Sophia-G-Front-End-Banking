import react from 'react';
import { hashrouter, Route } from 'react-router-dom';
import navBar from './navbar';
import home from './home';
import createaccount from './createaccount';
import login from './login';
import deposit from './deposit';
import withdraw from './withdraw';
import balance from './balance';
import alldata from './alldata';
import UserContext from './usercontext';
import { myFunction } from './mymodule.js';

myFunction();

function Spa() {

  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{ users: [{ name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100 }] }}>
        <div className="container" style={{ padding: '20px' }}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={alldata} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Spa />);