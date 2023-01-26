import React from 'react'
import BKLogo from '../assets/bk_logo.svg'

function HorizontalCard(props) {
    return (
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100">
            <img class="rounded h-14 ml-2" src={props.icon} alt="" />
            <div class="flex flex-col justify-between p-3 leading-normal">
                <span class="text-md font-bold tracking-tight text-gray-900">125405</span>
                <span class="mb-3 font-normal text-gray-700 text-xs">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</span>
            </div>
        </div>

    )
}

export default HorizontalCard