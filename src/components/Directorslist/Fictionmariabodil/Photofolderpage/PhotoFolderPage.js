import { useParams } from "react-router-dom";
import { localPhotoFolders } from "../Localphotofolders/localPhotoFolders";
import { useNavigate } from "react-router-dom";

import React from 'react'

export default function PhotoFolderPage() {
  const navigate = useNavigate();
  const { folderId } = useParams();
  const folder = localPhotoFolders.find((f) => f.id === folderId);

  if (!folder) {
    return <p>Mapje niet gevonden.</p>;
  };

  /// Bepaal de CSS-klasse op basis van de layout property
  const layoutClass = folder.layout ? `layout-${folder.layout}` : "";

  const handleClose = () => {
    navigate("/fictionmariabodil")
  };

  return (
    <section className={`photo-folder-page ${layoutClass}`}>
      <div className="logo-bbkk">
        <img src="/images/BBKK-pink.png" alt="tebbernekkel logo" />
      </div>
      <div className="times" onClick={handleClose}>
        <img src="/images/times-circle-regular-copy.svg" alt="times" />
      </div>
      
      <div className="row">
        {folder.images.map((imgPath, idx) => (
          <div className="column" key={idx}>
            <img src={imgPath} alt={`${folder.title} ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}
