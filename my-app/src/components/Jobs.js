import React from "react";
import "../index.css";
import Navbar from "./Navbar";

const Jobs = () => {
  return (
    
    <div style={{ display:"flex" }}>
      <Navbar/>
      <section class="container px-4 mx-auto">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div>
            <div class="flex items-center gap-x-3">
              <h6 class="text-2xl font-bold text-gray-800 dark:text-white">
                Jobs
              </h6>
            </div>
          </div>
        </div>

          <div
            class="inline-flex overflow-hidden bg-white rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700 gap-x-3.5"
          >
            <div class="relative inline-block text-left">
              <div>
                <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  View All
                  <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  </svg>
                </button>
              </div>
            </div>

            <div class="relative inline-block text-left">
              <div>
                <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Job Type
                  <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>

              <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Full-Time</a>
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Part-Time</a>
                  <form method="POST" action="#" role="none">
                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                  </form>
                </div>
              </div>
            </div>

            <div class="relative inline-block text-left">
              <div>
                <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Job Location
                  <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>

              <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">On-Campus</a>
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Off-Campus</a>
                  <form method="POST" action="#" role="none">
                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="relative flex items-center mt-4 md:mt-0">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>

            <input
              type="text"
              placeholder="Search"
              class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

        <div class="flex flex-col mt-6">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div
                class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
              >
                <table
                  class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-leftrtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Company
                      </th>

                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-leftrtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Type
                      </th>

                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-leftrtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Location
                      </th>

                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-leftrtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Positions Available
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                  >
                    <tr>
                      <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 class="font-medium text-gray-800 dark:text-white">
                            Catalog
                          </h2>
                          <p
                            class="text-sm font-normal text-gray-600 dark:text-gray-400"
                          >
                            catalogapp.io
                          </p>
                        </div>
                      </td>
                      <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div
                          class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800"
                        >
                          Customer
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="text-gray-700 dark:text-gray-200">
                            Content curating app
                          </h4>
                          <p class="text-gray-500 dark:text-gray-400">
                            Brings all your news into one place
                          </p>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="text-gray-700 dark:text-gray-200">
                            5
                          </h4>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 class="font-medium text-gray-800 dark:text-white">
                            Circooles
                          </h2>
                          <p
                            class="text-sm font-normal text-gray-600 dark:text-gray-400"
                          >
                            getcirooles.com
                          </p>
                        </div>
                      </td>
                      <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div
                          class="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800"
                        >
                          Churned
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="text-gray-700 dark:text-gray-200">
                            Design software
                          </h4>
                          <p class="text-gray-500 dark:text-gray-400">
                            Super lightweight design app
                          </p>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="text-gray-700 dark:text-gray-200">
                            10
                          </h4>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 class="font-medium text-gray-800 dark:text-white">
                            Sisyphus
                          </h2>
                          <p
                            class="text-sm font-normal text-gray-600 dark:text-gray-400"
                          >
                            sisyphus.com
                          </p>
                        </div>
                      </td>
                      <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div
                          class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800"
                        >
                          Customer
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="text-gray-700 dark:text-gray-200">
                            Automation and workflow
                          </h4>
                          <p class="text-gray-500 dark:text-gray-400">
                            Time tracking, invoicing and expenses
                          </p>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="text-gray-700 dark:text-gray-200">
                            4
                          </h4>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 class="font-medium text-gray-800 dark:text-white">
                            Hourglass
                          </h2>
                          <p
                            class="text-sm font-normal text-gray-600 dark:text-gray-400"
                          >
                            hourglass.app
                          </p>
                        </div>
                      </td>
                      <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div
                          class="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800"
                        >
                          Churned
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="text-gray-700 dark:text-gray-200">
                            Productivity app
                          </h4>
                          <p class="text-gray-500 dark:text-gray-400">
                            Time management and productivity
                          </p>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="text-gray-700 dark:text-gray-200">
                            5
                          </h4>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 class="font-medium text-gray-800 dark:text-white">
                            Quotient
                          </h2>
                          <p
                            class="text-sm font-normal text-gray-600 dark:text-gray-400"
                          >
                            quotient.co
                          </p>
                        </div>
                      </td>
                      <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div
                          class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800"
                        >
                          Customer
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="text-gray-700 dark:text-gray-200">Sales CRM</h4>
                          <p class="text-gray-500 dark:text-gray-400">
                            Web-based sales doc management
                          </p>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="text-gray-700 dark:text-gray-200">2</h4>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
