import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
// import bookCover from "../assets/book-cover.webp"
// import styles from "./BookDetailsPage.module.css"
export default function BookDetailsPage({ bookList }) {
    let { bookId } = useParams()
    bookId = parseInt(bookId)
    const book = bookList.find(b => b.id === bookId)

    useEffect(() => {
        document.title = book.title
        document.title = book ? book.title : "Unavailable at this time"
    }, [book])

    if(!book) return "Unavailable at this time"

    return (
        <Row>
            <Col md="3">
                {/* <img src={bookCover} className={styles.bookImage}/> */}
            </Col>
            <Col>
                <h4>{ book.title }</h4>ß
            </Col>
        </Row>
    )
}