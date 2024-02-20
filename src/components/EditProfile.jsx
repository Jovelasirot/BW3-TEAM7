import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../redux/actions/actions";
const EditProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.content);
  const [formData, setFormData] = useState({
    email: user.email,
    name: user.name,
    bio: user.bio,
    image: user.image,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { userId, expId, token } = user;

    dispatch(editData(userId, expId, token, formData));
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label>Email:</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div> */}
        <div>
          <label>Img:</label>
          <input
            className="drop"
            src={formData.image}
            alt="drop"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
