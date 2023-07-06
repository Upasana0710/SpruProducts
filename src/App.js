import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../src/pages/Home';
import TopBar from '../src/components/TopBar';

const Spru = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.bgLight};
  overflow-y: hidden;
  overflow-x: hidden;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Spru>
            <Container>
              <TopBar />
              <Routes>
                <Route
                  path="/"
                  exact
                  element= <Home/>
                />
              </Routes>
            </Container>
          </Spru>
      </BrowserRouter>
    </div>
  );
}

export default App;
