import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Card, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';

const Movies = () => {

  const [movies, setMovies] = useState([])


  const getMovies = async () => {
    const url = 'https://ghibliapi.herokuapp.com/films'
    const resp = await axios.get(url)
    setMovies(resp.data)
    console.log(resp)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <h1>Movies</h1>
      <Row className="d-flex justify-content-center">
        {
          movies.map((movie, index) => {
            return (
              <Col key={index} lg={3} md={4} sm={6} xs={12} className="mt-3">
                <Card style={{ width: '18rem', minHeight: '18rem' }} >
                  <Card.Img variant="top" src={movie.image} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                      {movie.description.substring(0, 85)}...
                    </Card.Text>
                    <Link to={`/${movie.id}`} >
                      <Button variant="primary">Detalle</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default Movies