import Image from "next/image"
import style from "./cardPost.module.css"

interface AvatarProps {
    name: string;
    imageSrc: string;
  }

export const Avatar=({name , imageSrc}: AvatarProps) =>{
    return(
       <ul className={style.avatar}>
        <li>
            <Image src={imageSrc} width={32} height={32} alt={`Avatar of ${name}`}/>
        </li>
        <li>
            @{name}
        </li>
       </ul>
    )
}