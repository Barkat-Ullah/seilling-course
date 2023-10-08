import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";



const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
            <Services></Services>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;