import {Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {SimpleTable} from "../Table/SimpleTable";
import {showMessage} from "../../store/services/errorMessageSlice";
import {useLazyGetListOfFilesQuery} from "../../store/services/getFileDataApiSlice";
import {useEffect} from "react";

export const CardFileList = () => {
  const dispatch = useDispatch();
  const [getAllFiles, geAllFilesResult] = useLazyGetListOfFilesQuery();

  useEffect(() => {
    getAllFiles();
  }, []);

  useEffect(() => {
    if (geAllFilesResult.isError) {
      dispatch(showMessage({
        title: "OOPS!",
        msg: "Ocurrio un problema"
      }));
    }
  }, [geAllFilesResult.isError]);

  const convertToJsonFormat = (array) => {
    const jsonData = [];
    let idx = 1;

    for (const item of array) {
      jsonData.push({
        idx: idx,
        fileName: item
      });
      idx++;
    }

    return jsonData;
  }

  return (
    <Card style={{marginTop:20}}>
      <Card.Header>Archivos disponibles</Card.Header>
      <Card.Body>
        <SimpleTable
          data={convertToJsonFormat(geAllFilesResult.data?.files || [])}
          headers={["#", "File name"]}
          loading={geAllFilesResult.isLoading}
        />
      </Card.Body>
    </Card>
  )
}