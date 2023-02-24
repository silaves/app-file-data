import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import {ContentFiles} from "./views/ContentFiles";
import {ListFile} from "./views/ListFile";
import {ErrorMessage} from "./components/Modal/ErrorMessage";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <ErrorMessage/>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/content-files" />} />
          <Route path="/content-files" element={<ContentFiles/>}/>
          <Route path="/search-files" element={<ListFile/>}/>
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
