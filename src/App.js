import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

const App = () => {
  const [search, setSearch] = useState({
    ciudad: '',
    pais: ''
  });
  const [consult, setConsult] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);
  const {ciudad, pais} = search;

  useEffect(() => {
    const consultApi = async () => {
      const appId = "745c5237e0517490652bab27bfa6940d";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

      const response = await fetch(url);
      const res = await response.json();

      setResult(res);
      setConsult(false);
      if(res.cod === "404"){
        setError(true);
      } else {
        setError(false);
      }
    }
    if(consult){
      consultApi();
    }

  }, [consult, ciudad, pais]);

  let component;
  if(error){
    component = <Error message="No hay resultados" />
  } else {
    component = <Weather result={result} />
  }

  return (
    <Fragment>
      <Header
        title="Wather app"
      />
      <div className="container-form grey lighten-5">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
