function App() {
  const myStyle = {
    color: "blue",
    fontSize: "2.2rem",
    backgroundColor: "gold", // lowerCameCase
    textAlign: "center",
  }; // js object
  return (
    <>
      {/* style 속성은 객체로 주어야함 */}
      <div style={myStyle}>Lorem ipsum dolor.</div>
      <hr />
      <div
        style={{
          color: "red",
          backgroundColor: "yellow",
          fontSize: "2.2rem",
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor.
      </div>
    </>
  );
}

export default App;
