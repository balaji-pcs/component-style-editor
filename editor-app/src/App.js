import { Provider } from 'react-redux';
import './App.css';
import LeftSection from './App/containers/LeftSection';
import MainSection from './App/containers/MainSection';
import RightSection from './App/containers/RightSection';
import Container from './App/customModules/components/Container';
import Dropdown from './App/customModules/components/Dropdown';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
     <Container width='100vw' height='100vh' border='none' >
       <LeftSection/>
       <MainSection/>
       <RightSection/>
     </Container>
    </Provider>
  );
}

export default App;
