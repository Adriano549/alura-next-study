'use client'
import { ThumbsUp } from "../icons/ThumbsUp"
import { IconButton } from "../iconsButton"
import { Spinner } from "../Spinner"
import { useFormStatus } from "react-dom"

export const ThumbsUpButton = () => {
    const { pending} = useFormStatus()
    return (
        <IconButton disable={pending}>
            {pending? <Spinner/>: <ThumbsUp /> }
        </IconButton>
    )
}