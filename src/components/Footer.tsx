export const Footer = () => {
  return (
    <div className="bg-black text-white px-5 py-8 text-md">
      <p className="font-semibold text-lg">spense.</p>
      <p className="text-gray-300">
        Spense is an open platform for individuals to share their unfiltered
        thoughts. Discuss the topics you love, and get paid for doing{" "}
        <span>just</span> that.
      </p>
      <div className="flex flex-wrap">
        <div className="w-2/4 py-3">
          <p className="font-semibold text-lg">Company</p>
          <ul className="text-gray-300">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="w-2/4 py-3">
          <p className="font-semibold text-lg">Opportunities</p>
          <ul className="text-gray-300">
            <li>
              <a href="#">jobs</a>
            </li>
          </ul>
        </div>
        <div className="w-2/4 py-3">
          <p className="font-semibold text-lg">SiteMap</p>
          <ul className="text-gray-300">
            <li>
              <a href="#">Homepage</a>
            </li>
          </ul>
        </div>
        <div className="w-2/4 py-3">
          <p className="font-semibold text-lg">Resources</p>
          <ul className="text-gray-300">
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Faq</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
