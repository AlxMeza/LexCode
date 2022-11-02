import {useState} from 'react'

export default function NavBar () {
  const name = '<LexCode />'
  const [styles] = useState(['block py-2 pr-4 pl-3 rounded md:border-0 md:p-0 link-nav',
    'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#bd93f9] md:p-0 dark:text-white underline underline-offset-8 decoration-2'
  ])
  const [btnStates, setBtnStates] = useState([1, 0, 0, 0, 0, 0])
  
  return (
    <>
      <div className="sticky top-0 border-b-2 border-[#bd93f9]">
        <nav className="bg-[#282a36] border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-[#282a36]">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{name}</span>
            </a>
            <button data-collapse-toggle="navbar" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-[#50fa7b]" aria-controls="navbar" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar">
              <ul className="flex flex-col p-4 mt-4 bg-gray-[#44475a] rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-[#282a36] md:dark:bg-[#282a36] dark:border-[#282a36]">
                <li>
                  <a href="#Home" id="0" className={styles[btnStates[0]]}>Home</a>
                </li>
                <li>
                  <a href="#About" id="1" className={styles[btnStates[1]]} onClick={() => setCount(count+1)}>About Me</a>
                </li>
                <li>
                  <a href="#Experience" id="2" className={styles[btnStates[2]]}>Experience</a>
                </li>
                <li>
                  <a href="#Technologies" id="3" className={styles[btnStates[3]]}>Technologies</a>
                </li>
                <li>
                  <a href="#Projects" id="4" className={styles[btnStates[4]]}>Projects</a>
                </li>
                <li>
                  <a href="#Contact" id="5" className={styles[btnStates[4]]}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}