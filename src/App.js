import './App.css';
import Header from "./components/layouts/Header/Header";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import Footer from "./components/layouts/Footer/Footer";
import Main from "./components/layouts/Main/Main";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>

    );
}

export default App;
