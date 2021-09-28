const UploadsForm = (props) => {
  return (
    <div>
      <form>
        <input type="file" name="fileupload" />
        <label for="fileupload">Choose File</label>
        <button>Upload</button>
      </form>
    </div>
  );
};

export default UploadsForm;
