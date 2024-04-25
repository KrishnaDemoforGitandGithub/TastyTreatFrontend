import treat from "./Images/tastyTreatIcon.jpg";
import FooterData from "./Footer";
import treaticon from "./Images/treat.jpg";
import Firstpage from "./Firstpage";
import Navbar from "./NavBar";
import Foodtypes from "./Foodtypes";
import Testimonials from "./Testimonials";
import Greeting from "./Greeting";

const Home = () => {
  return (
    <div>
      {/* -----------GREETING-------------- */}
      <Greeting />
      {/* ----------NAVBAR------------- */}
      <Navbar treat={treat} />

      {/* ------------First Page--------- */}
      <Firstpage />

      {/* ----------FoodTypes------------- */}
      <Foodtypes />
      {/* ------------searchFood------------ */}
      {/* <SearchFoodItem /> */}
      {/* -----------testimonials----------- */}
      <Testimonials />
      {/* ----------footer------------ */}
      <FooterData treaticon={treaticon} />
    </div>
  );
};

export default Home;
