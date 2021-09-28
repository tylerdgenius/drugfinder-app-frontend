import UploadFilter from "./UploadFilter";
import "./Uploads.css";
import UploadsList from "./UploadsList";
import UploadsForm from "./UploadsForm";

const UploadsView = () => {
  return (
    <div>
      <h3>Uploads</h3>
      <UploadFilter />
      <UploadsList />
      {/* <UploadsForm /> */}
    </div>
  );
};

export default UploadsView;
