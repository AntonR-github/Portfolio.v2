import About from "../../AboutArea/About/About";
import Footer from "../../HomeArea/Footer/Footer";
import Header from "../../HomeArea/Header/Header";
import Nav from "../../HomeArea/Nav/Nav";
import Portfolio from "../../PortfolioArea/Portfolio/Portfolio";


function Layout(): JSX.Element {
    return (
        <div className="Layout">

			<Header />
            <Nav />
            <About />
            <Portfolio />
            <Footer />
            
            
            
            
        </div>
    );
}

export default Layout;
