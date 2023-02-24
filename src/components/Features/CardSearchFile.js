import {Button, Card, Container, Form, Stack} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {SimpleTable} from "../Table/SimpleTable";
import {showMessage} from "../../store/services/errorMessageSlice";
import {useLazyGetContentFileQuery} from "../../store/services/getFileDataApiSlice";

export const CardSearchFile = () => {
  const dispatch = useDispatch();
  const [filename, setFilename] = useState("");
  const [getContentFile, getContentFileResult] = useLazyGetContentFileQuery();
  const headers = ["Filename", "Text", "Number", "Hex"];

  useEffect(() => {
    if (getContentFileResult.isError) {
      let payload = {
        title: "OOPS!",
        msg: "Ocurrio un problema"
      };

      if (getContentFileResult.error.status === 404) {
        payload = {
          title: "Not Found",
          msg: "No se encontro el archivo o no se pudo leer el contenido"
        };
      }
      dispatch(showMessage(payload));
    }
  }, [getContentFileResult]);

  const handleFilenameChange = (event) => {
    setFilename(event.target.value);
  };

  const searchFile = () => {
    getContentFile(filename);
  }

  const clearSearch = () => {
    setFilename("");
  }

  const convertToJsonFormat = (objectData) => {
    const jsonData = [];

    if (!objectData?.lines) {
      return jsonData;
    }
    for (const line of objectData.lines) {
      let jsonObject = {};
      jsonObject["file"] = objectData.file;

      for (const key in line) {
        jsonObject[key] = line[key];
      }
      jsonData.push(jsonObject);
    }

    return jsonData;
  }

  return (
    <Card style={{marginTop:20}}>
      <Card.Header>Ver contenido de un archivo</Card.Header>
      <Card.Body>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            id="filename"
            value={filename}
            onChange={handleFilenameChange}
            className="me-auto"
            placeholder="Escriba el nombre del archivo..."
          />
          <Button variant="secondary" onClick={searchFile}>Buscar</Button>
          <div className="vr" />
          <Button variant="outline-success" onClick={clearSearch}>Limpiar</Button>
        </Stack>
      </Card.Body>
      <Container>
        <SimpleTable
          data={convertToJsonFormat(getContentFileResult.data || {})}
          headers={headers}
          loading={getContentFileResult.isLoading}
        />
      </Container>
    </Card>
  )
}