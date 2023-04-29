import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import CN1 from "../images/CN1.jpg";
import Software_Engineering from "../images/Software_Engineering.jpg";
import SOP from "../images/SOP.jpg";

const Mycourses = () => {
  return (
    <div style={{display:"flex"}}>
      <Navbar/>
      <div
        style={{ margin: "auto" }}
        class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
      >
        <img
          class="object-cover object-center w-full h-full"
          src={CN1}
          alt="avatar"
        />

        <div class="flex items-center px-6 py-3 bg-gray-900">
            <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          <h1 class="mx-3 text-lg font-semibold text-white">Course Detail</h1>
        </div>

        <div class="px-6 py-4">
          <NavLink to="/CN1" class="text-lg font-bold dark:text-white">
            Computer Network 1: Fundamentals
          </NavLink>

          <p class="py-2 text-gray-700 dark:text-gray-400">
            Edward Chlebus
          </p>
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

            <h1 class="px-2 text-sm">Grades: 31/35</h1>
          </div>
          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg class="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
            <NavLink to="/collab" class="px-2 text-sm text-gray-700">Connect with Professor</NavLink>
          </div>
          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg class="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
            <NavLink to="/collab" class="px-2 text-sm text-gray-700">Connect with TA</NavLink>
          </div>
        </div>
      </div>
      <div
        style={{ margin: "auto" }}
        class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
      >
        <img
          class="object-cover object-center w-full h-full"
          src={SOP}
          alt="avatar"
        />

        <div class="flex items-center px-6 py-3 bg-gray-900">
            <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>

          <h1 class="mx-3 text-lg font-semibold text-white">Course Detail</h1>
        </div>

        <div class="px-6 py-4">
          <NavLink to="/sop" class="text-lg font-bold dark:text-white">
            Science of Programming
          </NavLink>

          <p class="py-2 text-gray-700 dark:text-gray-400">
            James Sasaki
          </p>

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

            <h1 class="px-2 text-sm">Grades: 40/50</h1>
          </div>
          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg class="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
            <NavLink to="/collab" class="px-2 text-sm text-gray-700">Connect with Professor</NavLink>
          </div>
          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg class="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
            <NavLink to="/collab" class="px-2 text-sm text-gray-700">Connect with TA</NavLink>
          </div>
        </div>
      </div>
      <div
        style={{ margin: "auto" }}
        class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
      >
        <img
          class="object-cover object-center w-full h-full"
          src={Software_Engineering}
          alt="avatar"
        />

        <div class="flex items-center px-6 py-3 bg-gray-900">
            <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>

          <h1 class="mx-3 text-lg font-semibold text-white">Course Detail</h1>
        </div>

        <div class="px-6 py-4">
          <NavLink to="/se" class="text-lg font-bold dark:text-white">
            Software Engineering 1
          </NavLink>

          <p class="py-2 text-gray-700 dark:text-gray-400">
            Dennis Hood
          </p>

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

            <h1 class="px-2 text-sm">Grades: 38/41</h1>
          </div>
          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg class="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
            <NavLink to="/collab" class="px-2 text-sm text-gray-700">Connect with Professor</NavLink>
          </div>
          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg class="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
            <NavLink to="/collab" class="px-2 text-sm text-gray-700">Connect with TA</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mycourses