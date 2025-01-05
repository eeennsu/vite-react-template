import { useRouteError } from 'react-router-dom'

export const BubbleError = () => {
    const error = useRouteError()
    console.log('BubbleError', error)

    if (error) throw error
    return null
}
