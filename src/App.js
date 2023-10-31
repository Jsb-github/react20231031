
function App() {
  return (
    <div>
      <MyComponent1 />
        {/*<h1>Hello Component </h1>*/}
      <MyComponent2 />
        {/*<p> lorem ipsum </p>
            <ul>
              <li><li/>
              <li><li/>
              <li><li/>
        */}
    </div>
  );
}
function MyComponent1(){
    return <h1>Hello Componet</h1>
}

function MyComponent2(){
    return(
        <>
            {/*p>lorem5^ul>li*3>lorem1 */}
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
                <li>Lorem ipsum dolor.</li>
                <li>Magni, praesentium, recusandae.</li>
                <li>Asperiores, fuga, porro.</li>
            </ul>
        </>

    )
}

export default App;
