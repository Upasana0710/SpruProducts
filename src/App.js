import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Home from '../src/pages/Home';
import TopBar from '../src/components/TopBar';
import Navbar from '../src/components/Navbar';
import All from '../src/components/All';
import { lightTheme } from "./utils/Theme";

const Spru = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: ${({ theme }) => theme.bgLight};
  overflow-x: hidden;
  overflow-y: hidden;
  height: 150vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <BrowserRouter>
            <Spru>
              <Container>
                <TopBar />
                <All />
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
    </ThemeProvider>
  );
}

export default App;
