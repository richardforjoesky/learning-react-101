import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';


const reactDescriptions = ['Declarative', 'Component-Based', 'Learn Once, Write Anywhere'];

function genRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length)];
  return (<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build! Component
    </p>
  </header>)
}

function CoreConcept(props) {

  return <li>
    <img src={props.image} alt={props.title} />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </li>
}
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
