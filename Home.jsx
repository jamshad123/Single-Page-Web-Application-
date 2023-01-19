import React from 'react'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { newContext } from './App1';


function Home() {
  const {name}=useContext(newContext)
  console.log(name);
  
  return (
    <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center`,}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.ITCEn6vfskFD1hyrQGeG-gHaE8?pid=ImgDet&rs=1" />
      <Card.Body>
        <Card.Title>CRISTIANO RONALDO</Card.Title>
        <Card.Text>AL NASSR CLUB
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>

    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.6qu2Qs6BBBuCi81yUCJOewHaE8?pid=ImgDet&rs=1" />
      <Card.Body>
        <Card.Title>LIONEL MESSI</Card.Title>
        <Card.Text>
          PARIS SAINT GERMAN
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://corazonblancorm.files.wordpress.com/2013/12/karim-benzema-real-madrid-hd-wallpaper.jpg?w=1024" />
      <Card.Body>
        <Card.Title>
          KARIM BENZEMA
        </Card.Title>
        <Card.Text>
          REAL MADRID
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.KKUo-s2FqW8PsUB7RykwPgHaE3?pid=ImgDet&rs=1" />
      <Card.Body>
        <Card.Title>
          ERLING HAALAND
        </Card.Title>
        <Card.Text>
          MANCHESTER CITY
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.a0Gf6PltKJjZ0CYhxDiZwwHaE4?pid=ImgDet&rs=1" />
      <Card.Body>
        <Card.Title>
          MOHAMMED SALAH
        </Card.Title>
        <Card.Text>
          LIVERPOOL
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>

    
    
    </div>

    

    
    
    
  )
}

export default Home