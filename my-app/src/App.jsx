import Aboutus from "./Aboutus";
import Greeting from "./Greeting";
import { Welcome } from "./Welcome";

export default function App() {
  const fname = "Sulaim";
  return (
    <div>
      <h1>Welcome to learning react</h1>
      <h4>Happy to learn react</h4>
      <Greeting name={fname} age="23"/>
      <Welcome />
      <Aboutus />
    </div>
  )
}