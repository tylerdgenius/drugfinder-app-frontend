import { FaSearch } from "react-icons/fa";

const UploadFilter = (props) => {
  return (
    <div className="upload_search_bar">
      <form>
        <input type="text" />
        <button><FaSearch /></button>
      </form>
    </div>
  );
};

export default UploadFilter;
