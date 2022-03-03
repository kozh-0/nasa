import { Link } from "react-router-dom"

export default function NotFound() {

    return (
        <>
            <div>
                <h1>Page not Found</h1>
            </div>
            <Link className="back" to="/">Back</Link>
        </>
    )
}