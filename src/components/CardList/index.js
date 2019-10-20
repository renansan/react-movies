import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardList = props => {
  const { list } = props;
  return (
    <CardListContainer>
      {list && list.map((movie, idx) => (
        <CardItem key={`movie-item-${movie.imdbID}-${idx}`}>
          <Card>
            <Figure>
              <img src={movie.Poster} alt=""/>
            </Figure>
            <Title>{movie.Title}</Title>
            <Metadata>
              <b>Year:</b> {movie.Year}
            </Metadata>
            <Description></Description>
            <Button to={`/movie/${movie.imdbID}`}>See details</Button>
          </Card>
        </CardItem>
      ))}
    </CardListContainer>
  )
}

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`
const CardItem = styled.div`
  padding: 15px;
  max-width: 100%;

  @media screen and (min-width: 576px) {
    max-width: 50%;
  }
  @media screen and (min-width: 768px) {
    max-width: 25%;
  }
  @media screen and (min-width: 1200px) {
    max-width: 20%;
  }
`
const Card = styled.article`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2);
  padding: 15px;
  width: 100%;
`
const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
`
const Figure = styled.figure`
  margin: -15px;
  margin-bottom: 15px;

  & > img {
    width: 100%;
    /* height: 260px;
    object-fit: cover; */
  }
`
const Metadata = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`
const Description = styled.div`
  margin-bottom: 15px;
`
const Button = styled(Link)`
  background-color: #ededed;
  border-radius: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
  display: inline-block;
  height: 30px;
  line-height: 20px;
  padding: 5px 30px;
  transition: .3s;

  &:hover {
  background-color: #dedede;
  transition: .3s;
}
`

export default CardList;
