import checkSvg from "../assets/Checkmark.svg";
export const Subscription = () => {
  return (
    <div className="p-5 flex flex-col gap-3">
      <h3 className="font-semibold text-4xl">
        Share your unfiltered thoughts. Get paid.
      </h3>
      <p>
        Spense is an open platform for individuals to share their unfiltered
        thoughts. Discuss the topics you love, and get paid for doing{" "}
        <span className="italic">just</span> that
      </p>
      <div className="flex flex-col gap-2 font-medium">
        <p className="flex gap-2">
          <img src={checkSvg} alt="" />
          Receive 99% off the earnings.
        </p>
        <p className="flex gap-2">
          <img src={checkSvg} alt="" />
          Get paid via Debit Card, ACH, or PayPal
        </p>
        <p className="flex gap-2">
          <img src={checkSvg} alt="" />
          Withdraw your earnings anytime.
        </p>
      </div>
      <div className="flex w-full gap-3">
        <input
          type="text"
          className="bg-white rounded-md border border-gray-400 ps-5"
          placeholder="john@example.com"
        />
        <div className="bg-black text-white p-4 font-medium rounded-md">
          Get Started
        </div>
      </div>
    </div>
  );
};
