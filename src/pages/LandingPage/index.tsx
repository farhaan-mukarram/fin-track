import Navbar from "../../components/Navbar";
import LandingPageSection from "../../components/LandingPage/LandingPageSection";
import LandingPageHeader from "../../components/LandingPage/LandingPageHeader";

import savingsImageUrl from "../../assets/savings_illustration.svg";
import paymentImageUrl from "../../assets/payments_illustration.svg";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <LandingPageHeader />

      <LandingPageSection
        imageUrl={savingsImageUrl}
        headingText="Lorem ipsum dolor sit."
        paragraphText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vero
        quas laudantium, tenetur dignissimos error reprehenderit ab
        voluptate esse porro!"
        marginTop="32"
      />

      <LandingPageSection
        imageUrl={paymentImageUrl}
        headingText="Lorem ipsum dolor sit."
        paragraphText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vero
        quas laudantium, tenetur dignissimos error reprehenderit ab
        voluptate esse porro!"
        marginTop="32"
        marginBottom="32"
        direction="row-reverse"
      />
    </>
  );
};

export default LandingPage;
