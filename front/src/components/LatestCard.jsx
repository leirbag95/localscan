import React from 'react'
import HorizontalCard from './HorizontalCard'

function LatestCard(props) {
    return (
        <div class="block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow">
            <div class="text-black font-bold mb-2">
                Latest {props.name}
            </div>
            <hr />
            <div class="my-2 grid gap-2">
            <HorizontalCard icon={props.icon}></HorizontalCard>
            <HorizontalCard icon={props.icon}></HorizontalCard>
            </div>
        </div>
    )
}

export default LatestCard