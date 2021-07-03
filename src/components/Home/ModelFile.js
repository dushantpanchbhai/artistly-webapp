import React, { useEffect, useState } from "react";
import ModelSingle from "./ModelSingle.js";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
//import models from '../database/Models'

function ModelFile() {
  const [{ model }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        dispatch({
          type: "UPDATE_MODELS",
          items: snapshot.docs.map((doc) => ({
            id: doc.id,
            model: doc.data(),
          })),
        });
      });
  }, [dispatch]);

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 760);
  }, [isDesktop]);

  return (
    <>
      {isDesktop ? (
        <div className="row row-cols-1 row-cols-md-3 g-4" id="container_all">
          {model
            .slice(0)
            .reverse()
            .slice(0, 6)
            .map((item) => {
              return (
                <ModelSingle
                  key={item.id}
                  id={item.id}
                  title={item.model.title}
                  images={item.model.imageUrl}
                ></ModelSingle>
              );
            })}
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4" id="container_all">
          {model
            .slice(0)
            .reverse()
            .slice(0, 3)
            .map((item) => {
              return (
                <ModelSingle
                  key={item.id}
                  id={item.id}
                  title={item.model.title}
                  images={item.model.imageUrl}
                ></ModelSingle>
              );
            })}
        </div>
      )}
    </>
  );
}

export default ModelFile;
