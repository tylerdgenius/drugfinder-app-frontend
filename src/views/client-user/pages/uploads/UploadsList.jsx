const UploadsList = () => {
  const uploadList = [
    {
      id: 1,
      upload_name: "001.png",
      upload_date: new Date().toDateString(),
      upload_type: "pdf",
      upload_status: "Reviewed",
    },
    {
      id: 2,
      upload_name: "031.png",
      upload_date: new Date().toDateString(),
      upload_type: "jpg",
      upload_status: "Reviewed",
    },
    {
      id: 3,
      upload_name: "021.png",
      upload_date: new Date().toDateString(),
      upload_type: "png",
      upload_status: "Reviewed",
    },
  ];

  return (
    <>
      <div className="uploads_list">
        <div className="uploads_list_table">
          <table>
            <tr className="table_head">
              <th>Id</th>
              <th>Name</th>
              <th>File Type</th>
              <th>File Size</th>
              <th>Uploaded Date</th>
              <th>Upload Status</th>
              <th></th>
            </tr>
            {uploadList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.upload_name}</td>
                  <td>{item.upload_type}</td>
                  <td></td>
                  <td>{item.upload_date}</td>
                  <td>{item.upload_status}</td>
                  <td>
                    <div className="action_icons">
                      <p onClick={() => {}}>Edit</p>
                      <p onClick={() => {}}>Delete</p>
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <div className="upload_create_button">
        <button onClick={() => {}}>Create Upload</button>
      </div>
    </>
  );
};

export default UploadsList;
