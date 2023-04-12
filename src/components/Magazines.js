import { useOutletContext, useParams } from "react-router-dom"

export function Magazines() {
    const { id } = useParams()
    // const obj = useOutletContext()
    return (
     <h1> Magazines {id} </h1> 
   
    )
}