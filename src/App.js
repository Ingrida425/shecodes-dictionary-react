import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">There will be the Dictionary 📚</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          {" "}
          This project was coded by <strong>Ingrida Kostiuk</strong> and is{" "}
          <a
            href="https://github.com/Ingrida425/shecodes-dictionary-react.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://rococo-meringue-330f7c.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
