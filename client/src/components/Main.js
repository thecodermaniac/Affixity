import React from "react";
import css from "./index.css"


function Main() {
    return (
        <div>
        <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden">
        </div>
        <div className="relative  mt-20 sm:mt-0 min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent p-6 sm:p-24 sm:pb-0 rounded-3xl shadow-xl">
          <div className="flex-col flex  self-center mr-20 mb-20 lg:p-14 sm:max-w-4xl xl:max-w-md  z-10">
            <div className="self-start hidden lg:flex flex-col  text-gray-300">
              <h1 className="my-3 font-semibold text-5xl">Welcome back</h1>
              <p className="pr-3 text-xl opacity-75">Sign In to continue</p>
            </div>
          </div>
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
              <div className="mb-7">
                <h3 className="font-semibold text-4xl text-purple-800"><strong>Sign In</strong> </h3>
              </div>
              <div className="space-y-6">
                <div className>
                  <input className=" w-full text-sm  px-4 py-3 bg-white border  border-gray-700 text-gray-900 rounded-lg focus:outline-none focus:border-purple-400" type placeholder="Email" />
                </div>
                <div className="relative" x-data="{ show: true }">
                  <input placeholder="Password" {type={show ? 'password' : 'text'}} className="text-sm text-gray-700 px-4 py-3 rounded-lg w-full bg-white border border-gray-700 focus:outline-none focus:border-purple-400" />
                  <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">
                    <svg onClick="show = !show" :class="{'hidden': !show, 'block':show }" className="h-4 text-gray-700" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                      </path>
                    </svg>
                    <svg onClick="show = !show" :class="{'block': !show, 'hidden':show }" className="h-4 text-gray-700" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                      <path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm ml-auto">
                    <a href="#" className="text-purple-700 hover:text-purple-600">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                    Sign in
                  </button>
                </div>
                <div className="flex items-center justify-center space-x-2 my-5">
                  <span className="h-px w-16 bg-gray-700" />
                  <span className="text-gray-400 font-normal">or</span>
                  <span className="h-px w-16 bg-gray-700" />
                </div>
                <div className="flex justify-center gap-5 w-full ">
                  <button type="submit" className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-700 hover:border-gray-900 hover:bg-gray-900 text-sm  text-gray-700 hover:text-white p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-200">
                    <svg className="w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" />
                      <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z" />
                      <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" />
                      <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" />
                    </svg>
                    <span>Google</span>
                  </button>
                  <button type="submit" className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-700 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-700 hover:text-white  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-200 px-">
                    <svg className="w-4 mr-2" viewBox="0 0 100 100" style={{enableBackground: 'new 0 0 100 100'}} xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                      <g id="Layer_1" />
                      <g id="Layer_2">
                        <path d="M50 2.5c-58.892 1.725-64.898 84.363-7.46 95h14.92c57.451-10.647 51.419-93.281-7.46-95z" style={{fill: '#1877f2'}} />
                        <path d="M57.46 64.104h11.125l2.117-13.814H57.46v-8.965c0-3.779 1.85-7.463 7.781-7.463h6.021V22.101c-12.894-2.323-28.385-1.616-28.722 17.66V50.29H30.417v13.814H42.54V97.5h14.92V64.104z" style={{fill: '#f1f1f1'}} />
                      </g>
                    </svg>
                    <span>Facebook</span>
                  </button>
                </div>
              </div>
              <div className="text-sm mt-4 flex items-center justify-center">
                <p className="text-gray-500">Don't have an account? <a href="#" className="text-sm text-purple-700 hover:text-purple-600">Sign Up</a></p>
              </div>
              <div className="mt-7 text-center text-gray-400 text-xs">
                <span>
                  Copyright © 2022
                  <a href="https://github.com/rakshitgondwal/Affixity" rel target="_blank" title="Codepen aji" className="text-violet-500 hover:text-violet-600 ">AFFIXITY</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

}

export default Main;