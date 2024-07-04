import * as React from "react";
const Footer = () => {
  return (
    <footer className="container mx-auto mt-5 rounded-lg bg-white px-4 py-3 md:my-8 md:bg-white md:px-8 md:shadow-lg">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-10 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div>
            <a href={"/"} className="text-teal-600">
              <img
                src={"/logo.png"}
                className={"h-20"}
                alt={"Rotaract Galgotias Logo"}
              />
            </a>

            <p className="mt-4 max-w-sm text-gray-500">
              Innovation ahead
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="https://www.facebook.com/RotaractGEI"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/rotaract_galgotias?utm_source=https://rotaractgalgotias.org&utm_medium=referral"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/rotaractGEI"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/channel/UCGiz1m_2XBQksNhgGhzJ4BA?sub_confirmation=1"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Youtube</span>

                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    className="h-6 w-6"
                    >
                      <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"/></svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/rotaract-club-of-galgotias-educational-institutions/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">LinkedIn</span>

                  <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    className="h-6 w-6">
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
                </a>
              </li>
              
              <li>
                <a
                  href="https://www.threads.net/@rotaract_galgotias"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">LinkedIn</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    className="h-6 w-6">
                      <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 14.660156 A 1.50015 1.50015 0 1 0 9 14.660156 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 25 A 1.50015 1.50015 0 1 0 42 25 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 24.162109 12.001953 C 20.643109 12.025953 17.931609 13.217922 16.099609 15.544922 C 14.485609 17.597922 13.652047 20.439719 13.623047 24.011719 C 13.651047 27.562719 14.484609 30.403078 16.099609 32.455078 C 17.930609 34.782078 20.643641 35.974047 24.181641 35.998047 C 27.309641 35.977047 29.520609 35.150266 31.349609 33.322266 C 33.779609 30.894266 33.703391 27.848562 32.900391 25.976562 C 32.320391 24.624562 31.223609 23.5305 29.724609 22.8125 C 29.689609 22.7945 29.653187 22.778719 29.617188 22.761719 C 29.353188 19.381719 27.403266 17.438969 24.197266 17.417969 C 22.253266 17.417969 20.632812 18.253484 19.632812 19.771484 C 19.520813 19.941484 19.565375 20.170109 19.734375 20.287109 L 21.402344 21.431641 C 21.485344 21.488641 21.587547 21.509234 21.685547 21.490234 C 21.783547 21.471234 21.872734 21.412125 21.927734 21.328125 C 22.531734 20.413125 23.495609 20.222656 24.224609 20.222656 C 25.110609 20.227656 25.768641 20.473125 26.181641 20.953125 C 26.404641 21.212125 26.575359 21.550891 26.693359 21.962891 C 25.936359 21.871891 25.131063 21.850437 24.289062 21.898438 C 21.183063 22.077437 19.185266 23.917516 19.322266 26.478516 C 19.391266 27.784516 20.041344 28.909531 21.152344 29.644531 C 22.070344 30.249531 23.249609 30.549469 24.474609 30.480469 C 26.095609 30.391469 27.370625 29.767953 28.265625 28.626953 C 28.838625 27.897953 29.225359 27.002344 29.443359 25.902344 C 29.865359 26.243344 30.175141 26.642703 30.369141 27.095703 C 30.824141 28.153703 30.848016 29.896172 29.416016 31.326172 C 28.122016 32.619172 26.552781 33.180266 24.175781 33.197266 C 21.533781 33.177266 19.543766 32.339031 18.259766 30.707031 C 17.040766 29.157031 16.409719 26.900906 16.386719 24.003906 C 16.409719 21.100906 17.040766 18.842969 18.259766 17.292969 C 19.543766 15.660969 21.533922 14.821734 24.169922 14.802734 C 26.834922 14.822734 28.862266 15.666547 30.197266 17.310547 C 30.850266 18.114547 31.350594 19.132844 31.683594 20.339844 C 31.738594 20.537844 31.944578 20.654516 32.142578 20.603516 L 34.097656 20.082031 C 34.194656 20.057031 34.276172 19.99225 34.326172 19.90625 C 34.375172 19.81825 34.387328 19.716141 34.361328 19.619141 C 33.930328 18.034141 33.246172 16.658344 32.326172 15.527344 C 30.444172 13.212344 27.705109 12.025953 24.162109 12.001953 z M 7.4765625 18.882812 A 1.50015 1.50015 0 0 0 6 20.404297 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 32.787109 A 1.50015 1.50015 0 1 0 39 32.787109 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 20.404297 A 1.50015 1.50015 0 0 0 7.4765625 18.882812 z M 25.123047 24.673828 C 25.720047 24.673828 26.289312 24.720453 26.820312 24.814453 C 26.536313 27.228453 25.404266 27.623594 24.322266 27.683594 C 23.580266 27.712594 22.892469 27.527203 22.480469 27.158203 C 22.229469 26.933203 22.093172 26.653172 22.076172 26.326172 C 22.038172 25.605172 22.639359 24.798359 24.443359 24.693359 C 24.673359 24.680359 24.900047 24.673828 25.123047 24.673828 z"/></svg>
                </a>
              </li>

            </ul>
          </div>

          <div className="justify-content-between grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-medium text-gray-900">About</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="https://www.rotary.org/en/get-involved/rotaract-clubs"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Rotaract
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.rotary.org/en"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Rotary
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.rotaractdistrict3011.org/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Rotarct District 3011
                  </a>
                </li>

                <li>
                  <a
                    href={"/team/past"}
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Club History
                  </a>
                </li>

                <li>
                  <a
                    href={"/events"}
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Our Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Team</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href={"/team"}
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Team Page
                  </a>
                </li>

                <li>
                  <a
                    href={"/team#council"}
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Board Council
                  </a>
                </li>

                <li>
                  <a
                    href={"/team#directors"}
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Board of Directors
                  </a>
                </li>

                <li>
                  <a
                    href={"/team#coordinators"}
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Coordinators
                  </a>
                </li>

                <li>
                  <a
                    href={"/team/past"}
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Past Teams
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Documents</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Newsletters
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Reports
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Club Aggrements
                  </a>
                </li>

                <li>
                  <a
                    href="/documents/media-kit"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Media Kit
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Press Release
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">
          Since 2010, Rotaract Club of Galgotias Educational Institutions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
