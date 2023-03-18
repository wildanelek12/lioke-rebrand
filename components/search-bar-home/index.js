import React from 'react'

export default function SearchBoxHero() {
    return (
        <div className='w-1/3 h-fit mt-8'>
            <div class=" flex  w-full">
                <div class="flex border-2 w-full rounded-full">
                    <button class="flex items-center justify-center px-4 border-r bg-white rounded-l-full">
                        <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                            </path>
                        </svg>
                    </button>
                    <input type="text" class="px-4 w-full py-4  rounded-r-full border-transparent focus:outline-0" placeholder="Search..." />
                </div>
            </div>
        </div>
    )
}
