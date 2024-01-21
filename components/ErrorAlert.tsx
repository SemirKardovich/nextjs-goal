import { Alert } from 'flowbite-react'
import React from 'react'

function ErrorAlert() {
    return (
        <Alert color="failure" >
            <span className="text-lg">Error alert!</span> Something went wrong , please try again!
        </Alert>
    )
}

export default ErrorAlert