import React from 'react'

function HorizontalCard(props) {
    const toDate = (timeStamp) => {
        const date = new Date(timeStamp * 1000);
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ", " + date.toDateString();
    }
    return (
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100">
            <img class="rounded h-14 ml-2" src={props.icon} alt="" />
            {
                (props.type === 'bc') ?
                    (
                        <div class="flex flex-col justify-between p-3 leading-normal">
                            <a href="#" class="text-sm font-bold tracking-tight text-gray-900">{props.block.number}</a>
                            <span class="mb-3 font-normal text-gray-700 text-xs">Created at <span class="font-bold">{toDate(props.block.timestamp)}</span> with {props.block.transactions.length} tx</span>
                        </div>
                    ) :
                    (
                        <div class="flex flex-col justify-between p-3 leading-normal truncate ">
                            <a href="#" class="text-sm font-bold tracking-tight text-gray-900 truncate">Tx# {props.tx.hash}</a>
                            <span class="mb-3 font-normal text-gray-700 text-xs">Created at block <span class="font-bold">{props.tx.blockNumber}</span></span>
                        </div>
                    )
            }
        </div>

    )
}

export default HorizontalCard