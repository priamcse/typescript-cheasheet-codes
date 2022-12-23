import List from "./components/generics/List";
import HtmlButton from "./components/html/HtmlButton";

function App() {
  return (
    <div className="App">
      <List
        items={["Batman", "Superman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <HtmlButton
        variant="primary"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Button
      </HtmlButton>
    </div>
  );
}

export default App;
