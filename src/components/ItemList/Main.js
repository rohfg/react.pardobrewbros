import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
  const [beer, setBeer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = fetch(
      "https://run.mocky.io/v3/d0257806-fea3-4da1-972c-d41324a1c597"
    );
    fetchData
      .then((getData) => {
        if (getData.status === 200) {
          return getData.json();
        } else {
          return "error";
        }
      })
      .then((getDataJson) => {
        setBeer(getDataJson);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <Switch>
        <Route path="/" exact>
          {loading ? <p>loading</p> : <ItemListContainer beer={beer} />}
        </Route>
        <Route path="/beer/:id" exact>
          {loading ? <p>loading</p> : <ItemDetailContainer beer={beer} />}
        </Route>
        {}
      </Switch>
    </div>
  );
};

export default Main;