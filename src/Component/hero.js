import React from "react";

export function Hero() {
  return (
    <div className=" w-full h-full  bg-gray-900 mx-auto ">
      <div className=" container lg:w-[1210px] ">
        <section className="   py-5       ">
          <div className="py-20    md:px-20 md:mt-10   md:grid-cols-2 grid gap-6   ">
            <div className="text-white">
              <h1 className="text-white   md:text-xl  md:justify-center md:mt-4 lg:text-5xl md:max-w-4xl font-serif ">
                Discover rare digital art and collectsell extraordinary NFTs
              </h1>
              <p className="  text-xs pt-2 md:text-md  	 text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti excepturi omnis neque adipisci sequi ullam unde in
                minus quis quos.
              </p>
              <div className="flex space-x-14 mt-3">
                {/* <p className="border-blue-900 border text-white    px-4 rounded-full ">
                Explore
              </p>
              <p className="border-blue-900 text-white p-3 border rounded-full">
                Create
              </p> */}
              </div>
            </div>
            <div className="max-w-md ">
              <img
                src="https://nft-marketplace-website.netlify.app/static/media/hero.565a8c0e.jpg"
                className=" w-65   rounded"
              />
            </div>
          </div>
        </section>

        <section className="container ">
          <div>
            <div className="   gap-4    flex text-white justify-between">
              {" "}
              <h1 className="text-2xl">Live Auction</h1>
              <p className="text-md underline underline-offset-8  decoration-blue-600">
                Explore more
              </p>
            </div>
            <div className="  py-8 grid lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-3    gap-4">
              <div class="max-w-sm h-md bg-gray-800  rounded-lg     dark:bg-gray-700 dark:border-gray-700">
                <a href="#">
                  <img
                    class="  p-4 rounded-lg bodder  "
                    src="https://nft-marketplace-website.netlify.app/static/media/img-01.08f9fcfa.jpg"
                    alt=""
                    className="rounded p-4"
                  />
                </a>
                <div class=" px-6 bg-gray-800    text-white">
                  <a href="#">
                    <h5 class="mb-2 text-md  tracking-tight text-white   ">
                      Travel Monkey Club
                    </h5>
                  </a>

                  <div class="flex items-center   space-x-4 ">
                    <img
                      class="w-14 h-14 rounded-full"
                      src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                      alt=""
                    />
                    <div className="flex justify-between space-x-10">
                      <div class="space-y-1 font-medium dark:text-white">
                        <p>
                          Jese Leos{" "}
                          <time
                            datetime="2014-08-16 19:00"
                            class="block text-sm text-gray-500 dark:text-gray-400"
                          >
                            Joined{" "}
                          </time>
                        </p>
                      </div>
                      <div className="text-xs ">
                        {" "}
                        <p>Current Bid</p>
                        <p>5.89 ETH</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between   ">
                    <a
                      href="#"
                      class="inline-flex  text-md items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Place Bid
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <p className="  text-md">View History</p>
                  </div>
                </div>
              </div>

              <div class="max-w-sm h-md bg-gray-800  rounded-lg     dark:bg-gray-700 dark:border-gray-700">
                <a href="#">
                  <img
                    class="  p-4 rounded-lg bodder  "
                    src="https://nft-marketplace-website.netlify.app/static/media/img-01.08f9fcfa.jpg"
                    alt=""
                    className="rounded p-4"
                  />
                </a>
                <div class=" px-6 bg-gray-800    text-white">
                  <a href="#">
                    <h5 class="mb-2 text-md  tracking-tight text-white   ">
                      Travel Monkey Club
                    </h5>
                  </a>

                  <div class="flex items-center   space-x-4 ">
                    <img
                      class="w-14 h-14 rounded-full"
                      src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                      alt=""
                    />
                    <div className="flex justify-between space-x-10">
                      <div class="space-y-1 font-medium dark:text-white">
                        <p>
                          Jese Leos{" "}
                          <time
                            datetime="2014-08-16 19:00"
                            class="block text-sm text-gray-500 dark:text-gray-400"
                          >
                            Joined{" "}
                          </time>
                        </p>
                      </div>
                      <div className="text-xs ">
                        {" "}
                        <p>Current Bid</p>
                        <p>5.89 ETH</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between   ">
                    <a
                      href="#"
                      class="inline-flex  text-md items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Place Bid
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <p className="  text-md">View History</p>
                  </div>
                </div>
              </div>

              <div class="max-w-sm h-md bg-gray-800  rounded-lg     dark:bg-gray-700 dark:border-gray-700">
                <a href="#">
                  <img
                    class="  p-4 rounded-lg bodder  "
                    src="https://nft-marketplace-website.netlify.app/static/media/img-01.08f9fcfa.jpg"
                    alt=""
                    className="rounded p-4"
                  />
                </a>
                <div class=" px-6 bg-gray-800    text-white">
                  <a href="#">
                    <h5 class="mb-2 text-md  tracking-tight text-white   ">
                      Travel Monkey Club
                    </h5>
                  </a>

                  <div class="flex items-center   space-x-4 ">
                    <img
                      class="w-14 h-14 rounded-full"
                      src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                      alt=""
                    />
                    <div className="flex justify-between space-x-10">
                      <div class="space-y-1 font-medium dark:text-white">
                        <p>
                          Jese Leos{" "}
                          <time
                            datetime="2014-08-16 19:00"
                            class="block text-sm text-gray-500 dark:text-gray-400"
                          >
                            Joined{" "}
                          </time>
                        </p>
                      </div>
                      <div className="text-xs ">
                        {" "}
                        <p>Current Bid</p>
                        <p>5.89 ETH</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between   ">
                    <a
                      href="#"
                      class="inline-flex  text-md items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Place Bid
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <p className="  text-md">View History</p>
                  </div>
                </div>
              </div>

              <div class="max-w-sm h-md bg-gray-800  rounded-lg     dark:bg-gray-700 dark:border-gray-700">
                <a href="#">
                  <img
                    class="  p-4 rounded-lg bodder  "
                    src="https://nft-marketplace-website.netlify.app/static/media/img-01.08f9fcfa.jpg"
                    alt=""
                    className="rounded p-4"
                  />
                </a>
                <div class=" px-6 bg-gray-800    text-white">
                  <a href="#">
                    <h5 class="mb-2 text-md  tracking-tight text-white   ">
                      Travel Monkey Club
                    </h5>
                  </a>

                  <div class="flex items-center h-full   space-x-4 ">
                    <img
                      class="w-14 h-14 rounded-full"
                      src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                      alt=""
                    />
                    <div className="flex justify-between space-x-10">
                      <div class="space-y-1 font-medium dark:text-white">
                        <p>
                          Jese Leos{" "}
                          <time
                            datetime="2014-08-16 19:00"
                            class="block text-sm text-gray-500 dark:text-gray-400"
                          >
                            Joined{" "}
                          </time>
                        </p>
                      </div>
                      <div className="text-xs ">
                        {" "}
                        <p>Current Bid</p>
                        <p>5.89 ETH</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between   ">
                    <a
                      href="#"
                      class="inline-flex  text-md items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Place Bid
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <p className="  text-md">View History</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-14 mx-auto    mt-24">
          <div>
            <h1 className="text-white text-2xl font-bold">Top Seller</h1>
            <div className="lg:grid-cols-6 text-4xl  md:grid-cols-4 grid-cols-2 grid">
              <div class="flex mt-14  text-6xl  items-center h-full   space-x-4 ">
                <img
                  class="w-14 h-14 rounded-full"
                  src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                  alt=""
                />
                <div className="flex justify-between text-2xl space-x-10">
                  <p className="text-white">
                    Jese Leos{" "}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined{" "}
                    </time>
                  </p>
                </div>
              </div>

              <div class="flex mt-14   items-center h-full   space-x-4 ">
                <img
                  class="w-14 h-14 rounded-full"
                  src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                  alt=""
                />
                <div className="flex justify-between text-2xl space-x-10">
                  <p className="text-white">
                    Jese Leos{" "}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined{" "}
                    </time>
                  </p>
                </div>
              </div>

              <div class="flex mt-14   items-center h-full   space-x-4 ">
                <img
                  class="w-14 h-14 rounded-full"
                  src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                  alt=""
                />
                <div className="flex justify-between text-2xl space-x-10">
                  <p className="text-white">
                    Jese Leos{" "}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined{" "}
                    </time>
                  </p>
                </div>
              </div>

              <div class="flex mt-14   items-center h-full   space-x-4 ">
                <img
                  class="w-14 h-14 rounded-full"
                  src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                  alt=""
                />
                <div className="flex justify-between text-2xl space-x-10">
                  <p className="text-white">
                    Jese Leos{" "}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined{" "}
                    </time>
                  </p>
                </div>
              </div>

              <div class="flex mt-14   items-center h-full   space-x-4 ">
                <img
                  class="w-14 h-14 rounded-full"
                  src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                  alt=""
                />
                <div className="flex justify-between text-2xl space-x-10">
                  <p className="text-white">
                    Jese Leos{" "}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined{" "}
                    </time>
                  </p>
                </div>
              </div>

              <div class="flex mt-14   items-center h-full   space-x-4 ">
                <img
                  class="w-14 h-14 rounded-full"
                  src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                  alt=""
                />
                <div className="flex justify-between text-2xl space-x-10">
                  <p className="text-white">
                    Jese Leos{" "}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined{" "}
                    </time>
                  </p>
                </div>
              </div>

              <div class="flex mt-14   items-center h-full   space-x-4 ">
                <img
                  class="w-14 h-14 rounded-full"
                  src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                  alt=""
                />
                <div className="flex justify-between text-2xl space-x-10">
                  <p className="text-white">
                    Jese Leos{" "}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined{" "}
                    </time>
                  </p>
                </div>
              </div>

              <div class="flex mt-14   items-center h-full   space-x-4 ">
                <img
                  class="w-14 h-14 rounded-full"
                  src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                  alt=""
                />
                <div className="flex justify-between text-2xl space-x-10">
                  <p className="text-white">
                    Jese Leos{" "}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined{" "}
                    </time>
                  </p>
                </div>
              </div>

              <div class="flex mt-14   items-center h-full   space-x-4 ">
                <img
                  class="w-14 h-14 rounded-full"
                  src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                  alt=""
                />
                <div className="flex justify-between text-2xl space-x-10">
                  <p className="text-white">
                    Jese Leos{" "}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined{" "}
                    </time>
                  </p>
                </div>
              </div>

              <div class="flex mt-14   items-center h-full   space-x-4 ">
                <img
                  class="w-14 h-14 rounded-full"
                  src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                  alt=""
                />
                <div className="flex justify-between text-2xl space-x-10">
                  <p className="text-white">
                    Jese Leos{" "}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined{" "}
                    </time>
                  </p>
                </div>
              </div>

              <div class="flex mt-14   items-center h-full   space-x-4 ">
                <img
                  class="w-14 h-14 rounded-full"
                  src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                  alt=""
                />
                <div className="flex justify-between text-2xl space-x-10">
                  <p className="text-white">
                    Jese Leos{" "}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined{" "}
                    </time>
                  </p>
                </div>
              </div>

              <div class="flex mt-14   items-center h-full   space-x-4 ">
                <img
                  class="w-14 h-14 rounded-full"
                  src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                  alt=""
                />
                <div className="flex justify-between text-2xl space-x-10">
                  <p className="text-white">
                    Jese Leos{" "}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined{" "}
                    </time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        <footer className="bg-black">
          <footer class=" mt-40 lg:px-20   ">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-8  py-10 px-6 lg:grid-cols-5"> 
              <div>
                
                <ul class="text-gray-300 dark:text-gray-400">
                <li class="mb-2 text-blue-400  text-4xl   font-semibold font-serif uppercase dark:text-gray-400">
                  {" "}
                  NFTs
                </li>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate, quod repellat! Quis quos dolorum tenetur fuga?
                    Aspernatur rerum quae amet.
                  </p>
                </ul>
              </div>
              <div>
                
                <ul class="text-gray-300 dark:text-gray-400">
                <li class="mb-2 text-sm font-serif font-semibold text-white uppercase dark:text-gray-400">
                  Help center
                </li>
                  <li class=" ">
                    <a href="#" class="hover:underline">
                      Discord Server
                    </a>
                  </li>
                  <li class=" ">
                    <a href="#" class="hover:underline">
                      Twitter
                    </a>
                  </li>
                  <li class=" ">
                    <a href="#" class="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li class=" ">
                    <a href="#" class="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
              
                <ul class="text-gray-300 dark:text-gray-400">
                <li class="mb-2 text-sm font-serif font-semibold text-white uppercase dark:text-gray-400">
                  Legal
                </li>
                  <li class=" ">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li class=" ">
                    <a href="#" class="hover:underline">
                      Licensing
                    </a>
                  </li>
                  <li class=" ">
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                
                <ul class="text-gray-300 dark:text-gray-400">
                <li class="mb-2 font-serif text-sm font-semibold text-white uppercase dark:text-gray-400">
                  Download
                </li>
                  <li class=" ">
                    <a href="#" class="hover:underline">
                      iOS
                    </a>
                  </li>
                  <li class=" ">
                    <a href="#" class="hover:underline">
                      Android
                    </a>
                  </li>
                  <li class=" ">
                    <a href="#" class="hover:underline">
                      Windows
                    </a>
                  </li>
                  <li class=" ">
                    <a href="#" class="hover:underline">
                      MacOS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                 
                <ul class="text-gray-300 dark:text-gray-400">
                <li class=" text-md font-serif font-sa font-semibold text-white uppercase dark:text-gray-400">
                Newsletter
                </li>
                  <li class=" ">
                     <input type='email' className="bg-gray-400 py-2   rounded-full px-4" placeholder="Email"/>
                  </li>
                 
                </ul>
              </div>
            </div>
          



          </footer>
        </footer>
     
    </div>
  );
}
