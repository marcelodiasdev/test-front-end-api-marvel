import { BrowserRouter } from "react-router";
import { AppWrapper, Content } from "./layout/AppWrapper";
import Header from "./components/Header";
import ObjectiveLogo from "./assets/logo-objective.png";
import Avatar from "./assets/avatar.jpg";
import { AppRoutes } from "./routes";
import { CharactersProvider } from "./context/CharactersProvider";

function App() {
  return (
    <BrowserRouter>
      <CharactersProvider>
        <AppWrapper>
          <Content>
            <Header
              logoSrc={ObjectiveLogo}
              userName="Marcelo Dias"
              userDescription="Front-end Developer"
              userPhotoSrc={Avatar}
            />
            <AppRoutes />
          </Content>
        </AppWrapper>
      </CharactersProvider>
    </BrowserRouter>
  );
}

export default App;
