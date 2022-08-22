import './App.css';
import "@rainbow-me/rainbowkit/styles.css";
import Profile from './Profile';
import AppProviders from './AppProviders';


function App() {
  return (
    <AppProviders>
      <Profile />
    </AppProviders>
  );
}

export default App;
