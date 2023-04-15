import { useState } from 'react'

export default function Slider ( {images, title} ) {
    const [currentImage, setCurrentImage] = useState(0)

    return (
        <section className='flex relative'>
             <div className='absolute inset-y-0 left-0 grid place-content-center'>
                <button className='p-1 mx-4 border rounded-full border-2 border-gray-400 bg-gray-600 bg-opacity-0 hover:bg-opacity-50' onClick={() => {
                    currentImage === 0 ? setCurrentImage(images.length-1) : setCurrentImage(currentImage-1)
                }}>
                    <svg className='fill-gray-400' xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 96 960 960" width="2rem"><path d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z"/></svg>
                </button>
            </div>
            <img src={images[currentImage]} alt={title} className='w-fit inline-block object-cover' />
            <div className='absolute inset-y-0 right-0 grid place-content-center'>
                <button className='p-1 mx-4 border rounded-full border-2 border-gray-400 bg-gray-600 bg-opacity-0 hover:bg-opacity-50' onClick={() => {
                    currentImage === images.length-1 ? setCurrentImage(0) : setCurrentImage(currentImage+1)
                }}>
                    <svg className='fill-gray-400' xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 96 960 960" width="2rem"><path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z"/></svg>
                </button>
            </div>
        </section>
    )
}