import {Link} from 'react-router-dom';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Button} from './components/Button';

function App() {
  return (
    <div>
      <Header />
      <Button 
        extraText="da home"
        color="red">
          Texto principal
      </Button>
      <Link to="/list">List</Link>
      <Footer />
    </div>
  );
}

export default App;
