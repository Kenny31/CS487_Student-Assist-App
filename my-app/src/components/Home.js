import React from "react";
import Navbar from "./Navbar";
import Profile_Pic from "../images/Profile_Pic.jpeg";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div
        style={{ margin: "auto" }}
        class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
      >
        <img
          class="object-cover object-center w-full h-full"
          src={Profile_Pic}
          alt="avatar"
        />

        <div class="flex items-center px-6 py-3 bg-gray-900">
          <svg
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <h1 class="mx-3 text-lg font-semibold text-white">User Detail</h1>
        </div>

        <div class="px-6 py-4">
          <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
            Arpit Singhal
          </h1>

          <p class="py-2 text-gray-700 dark:text-gray-400">
            Masters of Computer Science
          </p>

          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              aria-label="suitcase icon"
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 11H10V13H14V11Z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
              />
            </svg>

            <h1 class="px-2 text-sm">Department of Computer Science</h1>
          </div>
          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <h1 class="px-2 text-sm">+1 (123) 456-7891</h1>
          </div>
          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            <h1 class="px-2 text-sm">GPA: 4</h1>
          </div>
          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              aria-label="email icon"
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
              />
            </svg>

            <h1 class="px-2 text-sm">asinghal4@hawk.iit.edu</h1>
          </div>
        </div>
      </div>
      <div style={{ display: "banner"}}>
        <div style={{ marginRight: "65px", marginTop: "40px" }} class="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <span class="text-lg font-bold text-black-600 dark:text-black-400">GPA per Subject</span>
          <div class="mx-auto w-3/5 overflow-hidden">
            <canvas
              data-te-chart="bar"
              data-te-dataset-label="Traffic"
              data-te-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
              data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]">
            </canvas>
          </div>
        </div>

        <div style={{ marginRight: "65px", marginTop: "10px"}}>
        <span class="text-lg font-bold text-black-600 dark:text-black-400">Applied Jobs Status</span>
          <table class="table-auto w-full bg-white shadow rounded">
            <thead class="border-b border-gray-100">
              <tr>
                <th class="pl-4 py-4">
                  <a class="text-s text-gray-500" href="#">
                    <p>Position Name</p>
                  </a>
                </th>
                <th>
                  <a class="text-s text-gray-500" href="#">
                    <p>Status</p>
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-s bg-blue-50 border-b border-gray-100">
                <td class="pl-4 py-4 bg-blue-100">
                  International Center Support Desk
                </td>
                <td class="pl-4">In Review</td>
              </tr>
              <tr class="text-s border-b border-gray-100">
                <td class="pl-4 py-4 bg-blue-50">
                  Graduate Assistant Program
                </td>
                <td class="pl-4">Pending</td>
              </tr>
              <tr class="text-s bg-blue-50 border-b border-gray-100">
                <td class="pl-4 py-4 bg-blue-100">SAP Product Planning</td>
                <td class="pl-4">Rejected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
