import { Spinner } from 'flowbite-react'
import React from 'react'

function Loader() {
    return (
        <div className='flex flex-col items-center justify-center gap-2 size-full'>
            <h1>
                Getting ready, please wait ...
            </h1>
            <Spinner size="xl" />
        </div>
    )
}

export default Loader