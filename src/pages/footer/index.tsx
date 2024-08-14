import FacebookIcon from "../../assets/logo/Facebook_Logo_2023.png";
import TelegranIcon from "../../assets/logo/telegram.webp";
import BrowserIcon from "../../assets/logo/browser.png";
import PhoneIcon from "../../assets/logo/Phone_icon.png";
const FooterPath = () => {
  return (
    <div className="bg-containerBackgroundColor flex flex-col md:flex-row md:justify-around gap-4 py-4">
      <div className="md:basis-1/2">
        <p>My Movie</p>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab
          deserunt dignissimos corporis, molestiae cumque tempore magni sapiente
          enim facere voluptate ipsa hic sunt? Laborum ea assumenda dolore
          aliquid fugiat.
        </p>
      </div>
      <div className="flex flex-col justify-start">
        <p>Contact Us</p>
        <div className="flex items-center gap-3 mt-3 cursor-pointer">
          <img
            src={FacebookIcon}
            alt=""
            className="size-8 ring-1 rounded-full"
          />
          <p>FacebookName</p>
        </div>
        <div className="flex items-center gap-3 mt-2 cursor-pointer">
          <img
            src={TelegranIcon}
            alt=""
            className="size-8 ring-1 rounded-full"
          />
          <p>@telegram_name</p>
        </div>
        <div className="flex items-center gap-3 mt-2 cursor-pointer">
          <img
            src={BrowserIcon}
            alt=""
            className="size-8 ring-1 rounded-full "
          />
          <p>www.mymovie@test.com.kh</p>
        </div>
        <div className="flex items-center gap-3 mt-2 cursor-pointer">
          <img src={PhoneIcon} alt="" className="size-8 ring-1 rounded-full" />
          <p>(+855) 123456789</p>
        </div>
      </div>
    </div>
  );
};

export default FooterPath;
