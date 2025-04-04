import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [editingField, setEditingField] = useState(null);
  const [profilePic, setProfilePic] = useState(localStorage.getItem("profilePic") || "");

  useEffect(() => {

    // localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhZHVzZXIxMzBAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDI3NzQyNzAsImV4cCI6MTc0Mjc3Nzg3MH0.ZXNMnX2C2xBhru2bBxSwZ_4MLhkyg1duiklBL4wqvUI");  // Replace with an actual token
    // console.log("Test token set:", localStorage.getItem("token"));
    // const token = localStorage.getItem("token");
      // Set token only if it's not already in localStorage
  if (!localStorage.getItem("token")) {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhZHVzZXIxMzBAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDI3NzQyNzAsImV4cCI6MTc0Mjc3Nzg3MH0.ZXNMnX2C2xBhru2bBxSwZ_4MLhkyg1duiklBL4wqvUI"
    ); // Replace with actual token
    console.log("Test token set:", localStorage.getItem("token"));
  }
  const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("http://localhost:5000/api/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        setFormData({ name: res.data.name, email: res.data.email });
      })
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateUserProfile = async (field) => {
    if (!formData[field].trim()) return;

    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await axios.put(
        "http://localhost:5000/api/users/update",
        { [field]: formData[field] },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUser(response.data);
      setEditingField(null);
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
        localStorage.setItem("profilePic", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <label htmlFor="profilePicInput" className="profile-pic-label">
          <img src={profilePic || "/default-avatar.png"} alt="Profile" className="profile-pic" />
          <input id="profilePicInput" type="file" accept="image/*" onChange={handleImageChange} hidden />
        </label>

        <div className="user-info">
          {["name", "email"].map((field) => (
            <div key={field} className="input-group">
              <p>{field === "name" ? "User Name" : "Email"}</p>
              {editingField === field ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="input-field"
                />
              ) : (
                <input type="text" value={user?.[field] || "N/A"} className="input-field" readOnly />
              )}
              {editingField === field ? (
                <button onClick={() => updateUserProfile(field)} className="save-button">Save</button>
              ) : (
                <button onClick={() => setEditingField(field)} className="edit-button">Edit</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;



// import React, { useState, useEffect } from "react";
// import "../CSS/UserProfile.css"; // Import CSS file

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [newUsername, setNewUsername] = useState("");
//   const [newEmail, setNewEmail] = useState("");
//   const [editingUsername, setEditingUsername] = useState(false);
//   const [editingEmail, setEditingEmail] = useState(false);

//   const [profilePic, setProfilePic] = useState(localStorage.getItem("profilePic") || "");

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     fetch("http://localhost:5000/api/user/profile", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setUser(data);
//         setNewUsername(data.name);
//         setNewEmail(data.email);
//       })
//       .catch((err) => console.error("Error fetching user data:", err));
//   }, []);

//   const updateUserProfile = (updatedData) => {
//     const token = localStorage.getItem("token");

//     fetch("http://localhost:5000/api/user/update", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(updatedData),
//     })
//       .then((res) => res.json())
//       .then((updatedUser) => {
//         setUser(updatedUser);
//         setEditingUsername(false);
//         setEditingEmail(false);
//       })
//       .catch((err) => console.error("Error updating profile:", err));
//   };

//   const handleUsernameChange = () => {
//     if (newUsername.trim() !== "") {
//       updateUserProfile({ name: newUsername });
//       setUser((prevUser) => ({ ...prevUser, name: newUsername })); // Update state immediately
//     }
//   };

//   const handleEmailChange = () => {
//     if (newEmail.trim() !== "") {
//       updateUserProfile({ email: newEmail });
//       setUser((prevUser) => ({ ...prevUser, email: newEmail })); // Update state immediately
//     }
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setProfilePic(e.target.result);
//         localStorage.setItem("profilePic", e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         {/* Profile Picture */}
//         <label htmlFor="profilePicInput" className="profile-pic-label">
//           <img src={profilePic || "/default-avatar.png"} alt="Profile" className="profile-pic" />
//           <input id="profilePicInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
//         </label>

//         {/* User Info */}
//         <div className="user-info">
//           <p>User Name</p>
//           {editingUsername ? (
//             <input
//               type="text"
//               value={newUsername}
//               onChange={(e) => setNewUsername(e.target.value)}
//               className="input-field"
//             />
//           ) : (
//             <input
//               type="text"
//               value={user?.name || "John Doe"}
//               className="input-field"
//               readOnly
//             />
//           )}
//           {editingUsername ? (
//             <button onClick={handleUsernameChange} className="save-button">
//               Save
//             </button>
//           ) : (
//             <button onClick={() => setEditingUsername(true)} className="edit-button">
//               Edit
//             </button>
//           )}

//           <p>Email</p>
//           {editingEmail ? (
//             <input
//               type="email"
//               value={newEmail}
//               onChange={(e) => setNewEmail(e.target.value)}
//               className="input-field"
//             />
//           ) : (
//             <input
//               type="email"
//               value={user?.email || "johndoe@example.com"}
//               className="input-field"
//               readOnly
//             />
//           )}
//           {editingEmail ? (
//             <button onClick={handleEmailChange} className="save-button">
//               Save
//             </button>
//           ) : (
//             <button onClick={() => setEditingEmail(true)} className="edit-button">
//               Edit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
