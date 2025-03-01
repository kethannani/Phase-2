import React from 'react'
import styled from 'styled-components'
const Maindiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(250, 234, 211);
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  width: fit-content;
`;
const Heartdiv = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: red;
  border-radius: 50%;
`;
const ImageDisplaydiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Detailsdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 5px;
`;
const DetailsBodydiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgb(142, 137, 137);
`;
const DetailsFooterdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 5px;
  color: rgb(45, 9, 78);
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
`;
const Button = styled.button`
  width: 80px;
  height: 40px;
  background-color: rgb(45, 9, 78);
  border-radius: 50px;
  border: none;
  color: white;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
`;
const Span = styled.span`
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
`;
const Image = styled.img`
  border-radius: 20px;
`;
const Card = ({url, name, description, price}) => {
  return (
    <Maindiv>
        <ImageDisplaydiv>
            <Heartdiv>&#10084;</Heartdiv>
            <Image src={url} alt="image1" />
        </ImageDisplaydiv>
        <Detailsdiv>
            <DetailsBodydiv>
                <Span>{name}</Span>
                by Nike
                <p>{description}</p>
            </DetailsBodydiv>
            <DetailsFooterdiv>
                <b>{price}</b>
                <Button>Buy</Button>
            </DetailsFooterdiv>
        </Detailsdiv>
    </Maindiv>
  )
}

export default Card
