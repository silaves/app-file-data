import {useLazyGetAllFilesDataQuery} from "../../store/services/getFileDataApiSlice";
import {useEffect} from "react";
import {hideMessage, showMessage} from "../../store/services/errorMessageSlice";
import {useDispatch} from "react-redux";
import {SimpleTable} from "../Table/SimpleTable";

export const DataFileTable = () => {
  const dispatch = useDispatch();
  const headers = ["Filename", "Text", "Number", "Hex"];
  const [getContentFile, getContentFileResult] = useLazyGetAllFilesDataQuery();

  useEffect(() => {
    getContentFile();
  }, []);

  useEffect(() => {
    if (getContentFileResult.isError) {
      dispatch(showMessage({
        title: "OOPS!",
        msg: "Ocurrio un problema"
      }));
    }
  }, [getContentFileResult.isError]);

  const convertToJsonFormat = (array) => {
    const jsonData = [];

    for (const item of array) {
      for (const line of item.lines) {
        let jsonObject = {};
        jsonObject["file"] = item.file;

        for (const key in line) {
          jsonObject[key] = line[key];
        }
        jsonData.push(jsonObject);
      }
    }

    return jsonData;
  }

  return (
    <SimpleTable
      data={convertToJsonFormat(getContentFileResult.data || [])}
      headers={headers}
      loading={getContentFileResult.isLoading}
    >
    </SimpleTable>
  )
}