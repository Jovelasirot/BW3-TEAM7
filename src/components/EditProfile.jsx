import React, { useState } from "react";

const jovelToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzYWEzMzI0ZjYwNTAwMTkzN2Q0YmEiLCJpYXQiOjE3MDgzNzA0ODMsImV4cCI6MTcwOTU4MDA4M30.jqoAheaxMJoqyttRxskMe0OT7NdOmGfNE_i-sfS_sZo";
const pasqualetoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzNGU4YzI0ZjYwNTAwMTkzN2Q0ODMiLCJpYXQiOjE3MDgzNDc3NDcsImV4cCI6MTcwOTU1NzM0N30.mthqNljgtCYQEBuKoZKcMpN6a22wDf15iDkgXjJsAoY";
const michelaToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTZjNzI0ZjYwNTAwMTkzN2Q0NmMiLCJpYXQiOjE3MDgzMzI3NDQsImV4cCI6MTcwOTU0MjM0NH0.iLEv5uw64zS02f1yE-pYpnFtV3SUF3TBPtkQgQrr8ik";
const robertaToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTE1YTI0ZjYwNTAwMTkzN2Q0NTAiLCJpYXQiOjE3MDgzMzEzNTQsImV4cCI6MTcwOTU0MDk1NH0.lLMwELubthCjSB0pm9ge5Sboz8l11VFsHgHTETuJSOs";
const filippoToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTI0MTI0ZjYwNTAwMTkzN2Q0NjAiLCJpYXQiOjE3MDgzMzE1ODUsImV4cCI6MTcwOTU0MTE4NX0.Th8sgbTW3CgZXXpWkdeUdUQLB-SZvMattf9ctCL5H8M";

const idJove = "65d30da224f605001937d44b";
const idFilippo = "65d3124124f605001937d460";
const idPasquale = "65d34e8c24f605001937d483";
const idMichela = "65d316c724f605001937d46c";
const idRoberta = "65d3115a24f605001937d450";

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
        `https://striveschool-api.herokuapp.com/api/profile/${idPasquale}/picture`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${pasqualetoken}`,
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
