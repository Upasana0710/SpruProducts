import { useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Home from '../src/pages/Home';
import Navbar from '../src/components/Navbar';
import { lightTheme } from "./utils/Theme";
import Footer from './components/Footer';
import Menu from '../src/components/Menu';
import TopBar from '../src/components/TopBar';

const Spru = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: ${({ theme }) => theme.bgLight};
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  position: relative;
`;

const FixContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 900;
`;

const TopBarContainer = styled.div`
  height: 50px;
  background: ${({ theme }) => theme.bgLight};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 800;
  transition: transform 0.3s ease-in-out;
  transform: translateY(${({ hidden }) => (hidden ? '-100%' : '0')});
`;

const Pages = styled.div`
  margin-top: 150px;
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      setHideTopBar(true);
    } else {
      setHideTopBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <BrowserRouter>
          <Spru>
            {menuOpen && <Menu menuOpen={menuOpen} />}
            <Container>
              <FixContainer>
                <TopBarContainer hidden={hideTopBar}>
                  <TopBar />
                  <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                </TopBarContainer>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              </FixContainer>
              <Pages>
                <Routes>
                  <Route path="/" exact element={<Home />} />
                </Routes>
              </Pages>
              <Footer />
            </Container>
          </Spru>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;