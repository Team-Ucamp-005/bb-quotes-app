import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

import { Row, Col, Badge, Card } from 'react-bootstrap';
import './styles.css'

const Detail = () => {
  const { movieId } = useParams();
  const [movieState, setMovieState] = useState({})
  const getMovie = async (id) => {
    const url = `https://ghibliapi.herokuapp.com/films/${id}`
    const res = await axios.get(url)
    console.log('movie', res)
    setMovieState(res.data)
  }
  useEffect(() => {
    getMovie(movieId)
  }, [])


  return (
    <>
      <Row className="justify-content-center" >
        <Col lg={12}>
          <div className="movie__hero">
            <img width="100%" alt={`${movieState.title}-img`} src={movieState.movie_banner} className="movier__hero-image" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="movie__info mt-3" >
            <Card.Title className=" d-inline-flex">
              <h1 className="movie__info-title">
                {movieState.title}
                <Badge style={{ marginLeft: '1rem' }} bg={
                  movieState.rt_score > 90
                    ? 'success' : 'warning'}>
                  {movieState.rt_score}
                </Badge>
              </h1>
            </Card.Title>
          </Card>
          <div className="movie__info">
            <div className="movie__info-director ">
              <h3>Director: <span>{movieState.director}</span> </h3>
              <h4>Duracion: <span>{movieState.running_time}</span></h4>
            </div>
            <p className="movie__info-description" style={{ fontSize: '1.5rem' }}>
              {movieState.description}
            </p>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Detail