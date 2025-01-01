import React, { FC } from 'react'

interface Props {
    errorMessage: string
}

const ErrorPage: FC<Props> = ({ errorMessage }) => {
    return (
        <main>
            <h1>Error occurred</h1>
            <h1>{errorMessage}</h1>
        </main>
    )
}

export default ErrorPage
