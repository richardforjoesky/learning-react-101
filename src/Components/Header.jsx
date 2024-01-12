import reactImg from '../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Declarative', 'Component-Based', 'Learn Once, Write Anywhere'];

function genRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default function Header() {
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