'use client'

import { useFormStatus } from "react-dom"
import { Button } from "../Button";
import { Spinner } from "../Spinner";
import { ArrowFoward } from "../icons/ArrowFoward";
import { ChildrenProps } from "@/app/types/childrenType";


export const SubmitButton = ({children}: ChildrenProps) =>{
    const {pending} = useFormStatus();

    return( 
        <Button aria-disable={pending} type="subimit">
            {pending ? <Spinner/> : <>{children}<ArrowFoward/></>}
        </Button>
    )
}