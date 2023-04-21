import {useState} from 'react'

export default function NavBar () {
  const [openNavbar, setOpenNavbar] = useState(false)
  const [btnStates, setBtnStates] = useState({home: 1, about: 0, exp: 0, tech: 0, project: 0, contact: 0})
  const [styles] = useState(['block py-2 pr-4 pl-3 rounded md:border-0 md:p-0 link-nav simple-text',
    'block py-2 pr-4 pl-3 text-white rounded md:p-0 underline underline-offset-8 decoration-2 active-link simple-text'
  ])

  return (
    <>
      <div className="sticky top-0 border-b-2 border-[#bd93f9] z-10">
        <nav className="bg-[#282a36] border-gray-200 py-2.5 dark:bg-[#282a36] md:px-10 px-5">
          <div className="flex flex-wrap w-full">
            <a href="#" className="flex items-center">
                <img src="/logo.svg" alt="LexCode" className="pl-3 h-8" />
            </a>
            <button className="inline-flex justify-items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-[#50fa7b] ml-auto" 
              onClick={() => setOpenNavbar(!openNavbar)}>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className={openNavbar ? "flex w-full md:block md:w-auto ml-auto" : "hidden w-full md:block md:w-auto ml-auto"} >
              <ul className="flex flex-col p-4 mt-4 bg-gray-[#44475a] rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-[#282a36] md:dark:bg-[#282a36] dark:border-[#282a36]">
                <li>
                  <a href="#Home" name='home' className={styles[btnStates.home]} onClick={() => {
                    setBtnStates({home: 1, about: 0, exp: 0, tech: 0, project: 0, contact: 0})
                    setOpenNavbar(false)
                  }}>Home</a>
                </li>
                <li>
                  <a href="#About" name='about' className={styles[btnStates.about]} onClick={() => {
                    setBtnStates({home: 0, about: 1, exp: 0, tech: 0, project: 0, contact: 0})
                    setOpenNavbar(false)
                  }}>About Me</a>
                </li>
                <li>
                  <a href="#Experience" name='exp' className={styles[btnStates.exp]} onClick={() => {
                    setBtnStates({home: 0, about: 0, exp: 1, tech: 0, project: 0, contact: 0})
                    setOpenNavbar(false)
                  }}>Experience</a>
                </li>
                <li>
                  <a href="#Technologies" name='tech' className={styles[btnStates.tech]} onClick={() => {
                    setBtnStates({home: 0, about: 0, exp: 0, tech: 1, project: 0, contact: 0})
                    setOpenNavbar(false)
                  }}>Technologies</a>
                </li>
                <li>
                  <a href="#Projects" name='project' className={styles[btnStates.project]} onClick={() => {
                    setBtnStates({home: 0, about: 0, exp: 0, tech: 0, project: 1, contact: 0})
                    setOpenNavbar(false)
                  }}>Projects</a>
                </li>
                <li>
                  <a href="#Contact" name='contact' className={styles[btnStates.contact]} onClick={() => {
                    setBtnStates({home: 0, about: 0, exp: 0, tech: 0, project: 0, contact: 1})
                    setOpenNavbar(false)
                  }}>Contact</a>
                </li>
              </ul>
            </div>

            <button className='simple-text text-[#f8f8f2] hover:text-[#50fa7b] text-[1.1rem] ml-4' onClick={() => location.href = './es'}>ES</button>
          </div>
        </nav>
      </div>
    </>
  )
}