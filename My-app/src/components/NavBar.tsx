import { ImCart } from "react-icons/Im";

export const NavBar = () => {
  return (
    <div>
            {/* <!-- Main navigation container --> */}
<nav
  className="relative flex w-full flex-nowrap items-center justify-between bg-[#232F3E] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700  lg:flex-wrap lg:justify-start lg:py-4"
  data-te-navbar-ref>
  <div className="flex w-full flex-wrap items-center justify-between px-3">
  
 
    <div className="ml-2">
      <a className="text-xl text-neutral-800 dark:text-neutral-200" href="#"
        > <img src="https://ktobly-global-cdn.ams3.cdn.digitaloceanspaces.com/uploads/tajrobtak/originals/06efefee-ea5b-4243-9361-8358d77501d1.png" className="w-32 " alt="Flowbite Logo" />
        </a>
      
    </div>
    <a href="#" className="hover:text-gray-100">

    <span className="font-medium dark:text-white ml-2"
          >
          Deliver to<br></br>
          Saudi Arabia</span >
          </a>
    <form>
    <div className="flex ml-10 w-96">
        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white ">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-white dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-black dark:border-gray-600" type="button">All 
         <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>
        <div className="relative w-full ">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:border-blue-500 " placeholder="Search Mockups, Logos, Design Templates..." required/>
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-300 dark:hover:bg-amber-100 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
    {/* <!-- Icon dropdown --> */}
    <div className="relative ml-4" data-te-dropdown-ref>
      <a
        className="mr-4 flex items-center text-gray-500 transition duration-200 hover:text-gray-700 hover:ease-in-out focus:text-gray-700 motion-reduce:transition-none"
        href="#"
        id="navbarDropdown"
        role="button"
        data-te-dropdown-toggle-ref
        aria-expanded="false">
        <span
          className="relative inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
          <span
            className="inline-block h-[11px] w-4 content-[''] [background-position:-36px_-26px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
        </span>
        <span className="w-2 pl-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </a>
      <ul
        className="absolute left-0 right-auto z-[1000] float-left m-0 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby="navbarDropdown"
        data-te-dropdown-menu-ref>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
            href="#"
            data-te-dropdown-item-ref>
            <span
              className="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
              <span
                className="inline-block h-[11px] w-4 content-[''] [background-position:-36px_-26px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
            </span>
            <span className="mr-4">English</span>
            <span
              className="inline-block fill-green-600 dark:fill-gray-200 [&>svg]:h-3.5 [&>svg]:w-3.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                <path
                  d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </span>
          </a>
        </li>
        <li><hr className="my-2" /></li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
            href="#"
            data-te-dropdown-item-ref>
            <span
              className="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
              <span
                className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-72px_-572px_!important]"></span>
            </span>
            Polski</a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
            href="#"
            data-te-dropdown-item-ref>
            <span
              className="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
              <span
                className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:0px_-1196px_!important]"></span>
            </span>
            中文</a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
            href="#"
            data-te-dropdown-item-ref>
            <span
              className="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
              <span
                className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-36px_-910px_!important]"></span>
            </span>
            日本語</a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
            href="#"
            data-te-dropdown-item-ref>
            <span
              className="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
              <span
                className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:0px_-1430px_!important]"></span>
            </span>
            Deutsch</a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
            href="#"
            data-te-dropdown-item-ref>
            <span
              className="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
              <span
                className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:0px_-1976px_!important]"></span>
            </span>
            Français</a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
            href="#"
            data-te-dropdown-item-ref>
            <span
              className="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
              <span
                className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-0px_-1742px_!important]"></span>
            </span>
            Español</a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
            href="#"
            data-te-dropdown-item-ref>
            <span
              className="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
              <span
                className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-72px_-884px_!important]"></span>
            </span>
            Русский</a >
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
            href="#"
            data-te-dropdown-item-ref>
            <span
              className="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
              <span
                className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-72px_-702px_!important]"></span>
            </span>
            Português</a>
        </li>
      </ul>
    </div>

    {/* <!-- Dropdown --> */}
    <div className="relative ml-2" data-te-dropdown-ref>
      <h1> Hello {localStorage.getItem('username')}</h1>
      <a
        className="flex items-center px-6 pb-2 pt-2.5 text-white transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-white dark:hover:text-neutral-400 dark:focus:text-white lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-white"
        href="#"
        type="button"
        id="dropdownMenuButton2"
        data-te-dropdown-toggle-ref
        aria-expanded="false">
        Accounts & Lists
        <span className="ml-2 w-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </a>
      <ul
        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButton2"
        data-te-dropdown-menu-ref>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
            >Action</a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
            >Another action</a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
            >Something else here</a>
        </li>
      </ul>
    </div>
    <a href="#" className="hover:text-gray-100">
    <span className="font-medium dark:text-neutral-200 ml-2"
          >
          Returns&<br></br>
          Orders</span >
          </a>
    <a href="/cart" className="hover:text-gray-100">
    <p>{localStorage.getItem('productCount')}</p>
    <span 
          >
           <ImCart className="w-10 text-white "/>
           </span >
      
           </a>
  </div>
</nav>



    </div>
  )
}
