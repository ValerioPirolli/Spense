import facebookPng from "../assets/Facebook Logo.png";
import dribblePng from "../assets/Dribbble Logo.png";
import youtubePng from "../assets/Youtube Logo.png";
import phoneMockMobile from "../assets/Phone Mockup (Mobile).png";

export const EscrowApp = () => {
  return (
    <div className="p-6 flex flex-col gap-8">
      <div className="flex w-full gap-4">
        <div className="w-1/3">
          <img src={facebookPng} alt="facebookPng" />
        </div>
        <div className="w-1/3">
          <img src={dribblePng} alt="dribblePng" />
        </div>
        <div className="w-1/3">
          <img src={youtubePng} alt="youtubePng" />
        </div>
      </div>
      <div className="cream rounded-lg">
        <div className="p-10 flex flex-col gap-4">
          <h3 className="font-semibold text-4xl">
            Secure your money with Escrow.
          </h3>
          <p>
            Spense uses Escrow ro secure all payments. We believe Escrow offers
            the highest level of security fir your payments, si you never need
            to worry about scams
          </p>
          <a href="#" className="underline font-medium">
            Learn more about Escrow
          </a>
        </div>
        <img
          src={phoneMockMobile}
          alt="phoneMockMobile"
          className="w-full -mt-16"
        />
      </div>
    </div>
  );
};
