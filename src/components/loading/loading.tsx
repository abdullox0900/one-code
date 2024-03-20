import { Spinner } from "@nextui-org/react"

export default function Loading() {
    return (
        <div className='flex justify-center items-center text-center'>
            <Spinner size='lg' />
        </div>
    )
}