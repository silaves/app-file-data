import {Card, Col, Container, Row} from "react-bootstrap";

import {DataFileTable} from "../components/Features/DataFileTable";

export const ContentFiles = () => {

  return (
    <Container>
      <Row>
        <Col>
          <Card style={{marginTop:20}}>
            <Card.Header>Contenido de los archivos CSV</Card.Header>
            <Card.Body>
              <DataFileTable/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}