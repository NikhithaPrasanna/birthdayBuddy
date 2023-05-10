import List from "./List";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data)
  return (  
  <main>
    <section className="container">  
  <h3>{people.length} Birthday's today</h3>
  <List people={people}/>
  <button type="button" onClick={()=>setPeople([])} className="btn btn-block">Clear All</button>
  </section>
  </main>
  )
};
export default App;
