import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient(process.env.NEXT_PUBLIC_VITE_SUPABASE_URL, process.env.NEXT_PUBLIC_VITE_SUPABASE_ANON_KEY);

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <div>
      <div className="container py-5">

        <div className="row justify-content-center">
          <div className="col-lg-6">

            <h1 className="text-center m-0 mb-3">Country List</h1>

            <ul className="list-group">
              {countries.map((country) => (
                <li className="list-group-item" key={country.name}>{country.name} {country.emoji}</li>
              ))}
            </ul>

            <p className="text-center mt-2 text-muted">TODO: Connect to database</p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;