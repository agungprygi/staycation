export default function Footer() {
  return (
    <footer className="container mx-auto md:px-40 px-4 font-poppins mt-12">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <a className="text-2xl font-medium text-primary">
            Stay<span className="text-gray-900">cation.</span>
          </a>
          <p className="text-gray-400 font-light">
          We kaboom your beauty holiday <br/> instantly and memorable.
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-2xl font-semibold mb-6">For Beginners</h4>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#">
                <p className="text-gray-400 font-light">
                  New Account
                </p>
              </a>
            </li>
            <li className="mb-2">
              <a href="#">
                <p className="text-gray-400 font-light">
                  Start Booking a Room
                </p>
              </a>
            </li>
            <li className="mb-2">
              <a href="#">
                <p className="text-gray-400 font-light">
                  Use Payments
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="text-2xl font-semibold mb-6">Explore Us</h4>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#">
                <p className="text-gray-400 font-light">
                  Our Careers
                </p>
              </a>
            </li>
            <li className="mb-2">
              <a href="#">
                <p className="text-gray-400 font-light">
                  Privacy & Policy
                </p>
              </a>
            </li>
            <li className="mb-2">
              <a href="#">
                <p className="text-gray-400 font-light">
                  Terms & Conditions
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="text-2xl font-semibold mb-6">Connect With Us</h4>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#">
                <p className="text-gray-400 font-light">
                  support@staycation.com
                </p>
              </a>
            </li>
            <li className="mb-2">
              <a href="#">
                <p className="text-gray-400 font-light">
                  021-2208-1996
                </p>
              </a>
            </li>
            <li className="mb-2">
              <a href="#">
                <p className="text-gray-400 font-light">
                  Staycation, Kemang, Jakarta
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center my-12">
        <p className="text-gray-400 font-light">
          {new Date().getFullYear()} Staycation, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
