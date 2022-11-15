import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="container">
          <div className="row">
            {props.photos.map(function (photo, index) {
              if (index < 6) {
                return (
                  <div className="col" key={index}>
                    <a
                      href={photo.src.original}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={photo.src.landscape}
                        alt={photo.alt}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
