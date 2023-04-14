import React from "react";
import { Card } from "react-bootstrap";

export default function Home ({ booklist }) {
    return (
        <div>
            { booklist.map(book => (
                <Card className="my-2">
                    <Card.Title>
                        {book.title}
                    </Card.Title>
                    <p>Is it free? {book.paid ? "No" : "Yes"}</p>
                </Card>
            ))}
        </div>
    )
}