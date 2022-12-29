import { Link } from 'react-router-dom';

const TopNavigation = () => {
  return (
    <header className="bg-white h-16 items-center relative shadow w-full z-10 md:h-20">
      <div className="flex flex-center flex-col h-full justify-center mx-auto px-3 relative">
        <div className="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex left-0 relative w-3/4">
            <div className="flex group h-full items-center relative">
              <img src="/img/kayaklogo.png" alt="KAYAKLOGO" />
            </div>
          </div>
          <div className="flex items-center justify-end ml-5 p-1 relative w-full sm:mr-0 sm:right-auto">
            <div>
              <div className="text-[#212a30] h-full flex font-normal tracking-[0.0330769em]">
                <Link
                  to="/business"
                  aria-label="Go to Business"
                  className="text-[#192024] font-semibold inline-block h-[62px] ml-4 hover:underline text-sm"
                >
                  <div className="h-full flex justify-center items-center">
                    <span className="cursor-pointer">Business</span>
                  </div>
                </Link>
                <div className="flex items-center ml-4">
                  <Link
                    to="/trips"
                    aria-label="To to Trips"
                    className="text-[#192024] font-semibold h-[62px] flex text-sm items-center relative hover:underline"
                  >
                    <span className="cursor-pointer">Trips</span>
                  </Link>
                  <div className=" border-l-[#647582] ml-[14px] pl-[10px] mr-[-4px] border-l-[1px] border-solid">
                    <button className="flex p-1 border-none rounded cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                        className="w-5 h-5"
                        role="img"
                      >
                        <path d="M170.85 39.13a44.51 44.51 0 00-30-13.54c-20-.87-33.45 11.23-40.8 20.58c-7.35-9.35-20.8-21.46-40.8-20.58a44.51 44.51 0 00-30.1 13.54a43.61 43.61 0 00-12.48 30.5c0 17.9 10.15 38.08 30.17 60c15.91 17.4 30 30.84 43 41.11a16.31 16.31 0 0020.23 0c13.06-10.27 27.14-23.72 43.05-41.12c20-21.9 30.17-42.08 30.17-60a43.61 43.61 0 00-12.44-30.49z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <span>
                    <div className="flex items-center h-full ml-4">
                      <div className="lg:invisible cursor-pointer align-middle w-4">
                        <span className="cursor-pointer">
                          <span className=" align-middle h-auth w-auto">
                            <svg
                              className=" fill-[#192024] w-6 h-6 pt-[3px] pr-[5px] overflow-hidden"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 200 200"
                            >
                              <path d="M100 20c-44.183 0-80 35.817-80 80s35.817 80 80 80s80-35.817 80-80s-35.817-80-80-80zm0 15c56.025 0 85.793 66.777 48.312 108.431c-30.872-11.58-65.745-11.582-96.624 0C14.211 101.784 43.965 35 100 35zM76 97.151v-24.2c0-32.042 48-31.996 48 0v24.201c0 32.041-48 31.995-48-.001z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                      <div className="h-full flex justify-center items-center cursor-pointer">
                        <span className="text-[#192024]">
                          <button className="bg-white flex text-sm py-[7px] px-[15px] whitespace-normal overflow-visible h-auto font-semibold border border-current rounded cursor-pointer">
                            <svg
                              className="fill-[#192024] w-6 h-6 pt-[3px] pr-[5px] overflow-hidden"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 200 200"
                            >
                              <path d="M100 20c-44.183 0-80 35.817-80 80s35.817 80 80 80s80-35.817 80-80s-35.817-80-80-80zm0 15c56.025 0 85.793 66.777 48.312 108.431c-30.872-11.58-65.745-11.582-96.624 0C14.211 101.784 43.965 35 100 35zM76 97.151v-24.2c0-32.042 48-31.996 48 0v24.201c0 32.041-48 31.995-48-.001z"></path>
                            </svg>
                            <span className="pt-[3px]">Sign in</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
