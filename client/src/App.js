import logo from './logo.svg';
import './App.css';
import TopNavbar from './Shared/Layout/TopNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Shared/Layout/Dashboard';

function App() {
  return (
    <div>
        <TopNavbar></TopNavbar>
        <Dashboard></Dashboard>
    </div>
  );
}

export default App;
