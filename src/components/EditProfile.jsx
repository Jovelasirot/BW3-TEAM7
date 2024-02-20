import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../redux/actions/actions";

// const EditProfile = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user.content);
//   const [formData, setFormData] = useState({
//     email: user.email,
//     name: user.name,
//     bio: user.bio,
//     image: user.image,
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.image]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { userId, expId, token } = user;

//     dispatch(editData(userId, expId, token, formData));
//   };

//   return (
//     <div>
//       <h2>Edit Profile</h2>
//       <form onSubmit={handleSubmit}>
//         {/* <div>
//           <label>Email:</label>
//           <input
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Name:</label>
//           <input
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//         </div> */}
//         {/* <div>
//           <label>Img:</label>
//           <input
//             className="drop"
//             src={formData.image}
//             alt="drop"
//             name="image"
//             value={formData.image}
//             onChange={handleInputChange}
//           />
//         </div> */}
//         <input
//           type="file"
//           accept="image/*"
//           name="image"
//           onChange={handleInputChange}
//         />
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default EditProfile;

const jovelToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzYWEzMzI0ZjYwNTAwMTkzN2Q0YmEiLCJpYXQiOjE3MDgzNzA0ODMsImV4cCI6MTcwOTU4MDA4M30.jqoAheaxMJoqyttRxskMe0OT7NdOmGfNE_i-sfS_sZo";

function EditProfile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Seleziona un file da caricare.");
      return;
    }

    const formData = new FormData();
    formData.append("profile", selectedFile);

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/65d30da224f605001937d44b/picture",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${jovelToken}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        alert("File caricato con successo.");
      } else {
        alert("Si è verificato un errore durante il caricamento del file.");
      }
    } catch (error) {
      console.error("Si è verificato un errore:", error);
      alert("Si è verificato un errore durante il caricamento del file.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Carica file</button>
      </form>
    </div>
  );
}

export default EditProfile;
