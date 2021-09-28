import UploadFilter from "./UploadFilter";
import "./Uploads.css";
import UploadsList from "./UploadsList";
import UploadsForm from "./UploadsForm";
import UploadNew from "./views/UploadNew";

const UploadsView = () => {
  return (
    <div>
      <h3>Uploads</h3>
      <UploadNew />
      <UploadFilter />
      <UploadsList />

      {/* <UploadsForm /> */}
    </div>
  );
};

export default UploadsView;
