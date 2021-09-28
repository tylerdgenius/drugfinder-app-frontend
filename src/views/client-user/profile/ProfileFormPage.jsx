import { useState } from "react";
import FileUpload from "../../assets/user/cloud-computing.svg";

const ProfileForm = (props) => {
  const user = {
    firstname: "",
    lastname: "",
    emailAddress: "",
    id: 1,
  };

  const [fileName, setFileName] = useState("");

  const clickHandler = () => {
    const fileSelect = document.getElementById("fileSelect");
    fileSelect.click();
  };

  const changeHandler = (e) => {
    if (e.target.files.length > 1) {
      setFileName("You can only upload one avatar");
    } else {
      let user = e.target.files;
      setFileName(user[0].name);
      console.log(fileName);
    }

    // setFileName(e.target.files.name);
  };

  return (
    <div className="profile_view_form">
      <form>
        <div className="profile_image">
          <input
            onChange={changeHandler}
            type="file"
            name="avatar"
            required
            id="fileSelect"
          />
          <div>
            <a
              onClick={clickHandler}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={FileUpload}
                style={{ height: "100px", width: "100%", objectFit: "contain" }}
              />
              <p>Click to upload</p>
            </a>
          </div>
          {fileName && (
            <p
              style={{
                marginLeft: "50px",
                marginRight: "50px",
                textAlign: "center",
              }}
            >
              You have selected{" "}
              <span style={{ color: "blue" }}>{fileName}</span> for upload
            </p>
          )}
        </div>
        <div className="profile_form_form">
          <input type="text" name="firstname" placeholder="Firstname" />
          <input type="text" name="lastname" placeholder="Lastname" />
          <input type="email" name="firstname" placeholder="Email Address" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <input type="hidden" name="id" placeholder={user.id} />
          <button type="submit">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
