/* eslint-disable react/prop-types */
import { CORE_CONCEPTS } from './data';
import Header from './Components/Header';
import CoreConcept from './Components/CoreConcepts';
function App() {
  return (
    <div>
      <Header />
      <main>
      <section id="core-concepts">
      <h2>Core Concepts</h2>
      <h2>Time to get started!</h2>
      <ul>
        <CoreConcept {...CORE_CONCEPTS[0]}/>
        <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
        <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
        <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
      </ul>
        
        </section>
      </main>
    </div>
  );
}

export default App;
