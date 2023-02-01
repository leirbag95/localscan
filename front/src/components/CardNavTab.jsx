import { useState } from "react"
import { ethers } from "ethers";
import { Tabs, Badge, Button } from 'flowbite-react';

function CardNavTab(props) {

    return (
        <div class="bg-white border border-gray-200 rounded-lg shadow">

            <Tabs.Group
                aria-label="Default tabs"
                style="underline"
            >
                <Tabs.Item
                    active={true}
                    title="Overview"
                >
                    <div>
                        <div>
                            <div class="grid grid-cols-3 gap-4 place-items-start my-3">
                                <div class="text-sm">Block Height:</div>
                                <div class="text-sm font-bold">{props.block.number}</div>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div class="grid grid-cols-3 gap-4 place-items-start my-3">
                                <div class="text-sm">Status:</div>
                                <div class="text-sm font-bold"><Badge size="sm" color="success">
                                    Finalized
                                </Badge></div>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div class="grid grid-cols-3 gap-4 place-items-start my-3">
                                <div class="text-sm">Timestamp:</div>
                                <div class="text-sm">1 day 5 hrs ago (Jan-30)</div>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div class="grid grid-cols-3 gap-4 place-items-start my-3">
                                <div class="text-sm">Transactions:</div>
                                <div class="text-sm flex justify-content"> 
                                <span><a href="#" class="text-sky-900 bg-sky-300 px-1 py-1 rounded outline outline-offset-1 outline-sky-300">{props.block.transactions?.length} transactions</a> in this block </span>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div class="grid grid-cols-3 gap-4 place-items-start my-3">
                                <div class="text-sm">Size:</div>
                                <div class="text-sm">bytes</div>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div class="grid grid-cols-3 gap-4 place-items-start my-3">
                                <div class="text-sm">Gas Used:</div>
                                <div class="text-sm"></div>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div class="grid grid-cols-3 gap-4 place-items-start my-3">
                                <div class="text-sm">Hash:</div>
                                <div class="text-sm">{props.block.hash}</div>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div class="grid grid-cols-3 gap-4 place-items-start my-3">
                                <div class="text-sm">Parent Hash:</div>
                                <div class="text-sm">{props.block.parentHash}</div>
                            </div>
                        </div>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Comments">
                    Dashboard content
                </Tabs.Item>
            </Tabs.Group>
        </div>
    )
}

export default CardNavTab;