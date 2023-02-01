import React from 'react'
import HorizontalCard from './HorizontalCard'

function LatestCard(props) {
    return (
        <div class="p-5 bg-white border border-gray-200 rounded-lg shadow">
            <div class="text-black font-bold mb-2">
                Latest {props.name}
            </div>
            <hr />
            <div class="my-2 grid gap-2">
                {
                    (props.type === "bc") ?
                        (
                            props.blocks.map((block) => (
                                <HorizontalCard icon={props.icon} block={block} type="bc"></HorizontalCard>
                            ))
                        ) : (
                            props.transactions.map((tx) => (
                                <HorizontalCard icon={props.icon} tx={tx} type="tx" ></HorizontalCard>
                            ))
                        )
                }
            </div>
        </div>
    )
}

export default LatestCard