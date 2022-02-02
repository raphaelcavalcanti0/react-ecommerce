import Announcement from "../Announcement/Announcement";
import Category from "../Categories/Category";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <>
            <Announcement />
            <Navbar />
            <Slider />
            <Category />
            <Products />
            <Footer />
        </>
    );
};

export default Home;
