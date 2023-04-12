import { useOutletContext, useParams } from "react-router-dom";

export function NewBook () {
    const { id } = useParams()
    const obj = useOutletContext()
    return <h1>Book {id}</h1>
    
}