'use client'
import { ThumbsUp } from "../icons/ThumbsUp"
import { IconButton } from "../iconsButton"
import { Spinner } from "../Spinner"
import { useFormStatus } from "react-dom"

export const ThumbsUpButton = () => {
    const { pending} = useFormStatus()
    return (
        <IconButton disable={pending? "true" : undefined}>
            {pending? <Spinner/>: <ThumbsUp /> }
        </IconButton>
    )
}