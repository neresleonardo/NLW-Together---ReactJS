import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';
import { NotFound } from './pages/NotFound';

import { AuthContextProvider } from './contexts/AuthContext'


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route component={NotFound} />
        </Switch>


      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;