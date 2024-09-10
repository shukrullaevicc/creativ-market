import { useLocation } from 'react-router-dom';

import RouteController from './routes'
import Header from './components/header/header';
import Container from './components/container/container';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {
        pathname !== '/' && pathname !== '/not-found' && <Container><Header /></Container>
      }
      <RouteController />
    </>
  )
}

export default App