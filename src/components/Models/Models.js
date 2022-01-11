import React, {useEffect} from "react";
import "./Models.css";
import ModelSingle from "./ModelSingle";
import Footer from "../Footer";
import { db } from "../../firebase";

import { useStateValue } from "../../StateProvider";

function Models() {

  const [{model,user}, dispatch] = useStateValue();
  
  useEffect(() => {
    db.collection("posts").orderBy("timestamp").onSnapshot((snapshot) => {
      dispatch({
        type: "UPDATE_MODELS",
        items: snapshot.docs.map((doc) => ({
          id: doc.id,
          model: doc.data(),
        })),
      });
    });
  }, [dispatch]);

  return (
    <div className="models">
      <div className="models_container">
        <div className="models_title">
          <h2>Models</h2>
        </div>
        
        {user? (" "):(
          <div>You need to login for downloading models.</div>
        )}
        <div className="models_content">
          {model.slice(0).reverse().map((item) => {
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
      </div>

      <Footer />
    </div>
  );
}

export default Models;
