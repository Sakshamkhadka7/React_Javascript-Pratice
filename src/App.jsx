import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

import Container from "./components/Container";
import Paragraph from "./components/Paragraph";
import Control from "./components/Control";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
     const privacy= useSelector(store => store.privacy);

  return (
    <center>
      <Container>
        <div className="px-4 py-5 my-5 text-center">
          <Header />

          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyMessage/>: <Paragraph/>}
            <Control />
          </div>
        </div>
      </Container>
    </center>
  );
}

export default App;
