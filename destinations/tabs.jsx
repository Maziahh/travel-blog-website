import React, {useEffect, useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function UncontrolledExample() {
  const [activeKey, setActiveKey] = useState('Asia');

  useEffect(() => {
    setActiveKey('Asia');

  },[]);
  return (
    <Tabs
      defaultActiveKey={activeKey}
      id="uncontrolled-tab-example"
      className="mb-3"
      style={{ fontSize: '1.5rem', padding: '50px',width:"1500px",backgroundColor: '#f8f9fa' }}
    >
      <Tab eventKey="Asia" title="Asia"style={{color:'black'}}>
        <div className="d-flex justify-content-around"style={{}} >
        <Card style={{ width: '18rem',margin: '10px' }}>
          <Card.Img variant="top" src="/logo.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem',margin: '10px' }}>
          <Card.Img variant="top" src="/logo.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
        
      </Tab>
      <Tab eventKey="Europe" title="Europe">
        Tab content for Profile
        <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem',margin: '10px' }}>
          <Card.Img variant="top" src="/logo.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem',margin: '10px' }}>
          <Card.Img variant="top" src="/logo.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
      </Tab>
      <Tab eventKey="Australia" title="Australia">
        Tab content for Profile
        <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem',margin: '10px' }}>
          <Card.Img variant="top" src="/logo.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem',margin: '10px' }}>
          <Card.Img variant="top" src="/logo.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
      </Tab>
      <Tab eventKey="North America" title="North America">
        Tab content for Profile
        <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem',margin: '10px' }}>
          <Card.Img variant="top" src="/logo.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem',margin: '10px' }}>
          <Card.Img variant="top" src="/logo.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
      </Tab>
      <Tab eventKey="South America" title="South America">
        Tab content for Profile
        <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem',margin: '10px' }}>
          <Card.Img variant="top" src="/logo.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem',margin: '10px' }}>
          <Card.Img variant="top" src="/logo.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
      </Tab>
      <Tab eventKey="Africa" title="Africa">
        Tab content for Profile
        <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem',margin: '10px' }}>
          <Card.Img variant="top" src="/logo.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem',margin: '10px' }}>
          <Card.Img variant="top" src="/logo.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;