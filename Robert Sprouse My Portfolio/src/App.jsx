import { Outlet } from "react-router-dom";
import Header from "./components/UI/Header/Header.jsx";
import Nav from "./components/UI/Header/Navigation/Navigation.jsx";
import Footer from "./components/UI/Footer/Footer.jsx";

function App() {
     return (
          <>
               <Header>
                    <Nav />
               </Header>
               <Outlet />
               <Footer />
          </>
     );
}

export default App;
