import {Col, Container, Row} from "react-bootstrap";
import {CardFileList} from "../components/Features/CardFileList";
import {CardSearchFile} from "../components/Features/CardSearchFile";

export const ListFile = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <CardSearchFile/>
        </Col>
        <Col sm={4}>
          <CardFileList/>
        </Col>
      </Row>
    </Container>
  )
}