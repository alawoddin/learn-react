function App() {
  return (
    <div className="App">
      <Navber />
      <Header />
      <Footer />
      {/* <h1>hello developer</h1> */}
    </div>
  );
}

// const Navber = () => {
//   return (
//     <div>
//       <h1>this is for demo</h1>
//     </div>
//   )
// } 
function Navber() {
  return (
    <div>
      <h1>this is for demo</h1>
    </div>
  )
}

function Header() {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  )
}

const Footer = () => {
  return (
    <div>
      <h1> this is for footer</h1>
    </div>
  )
}

export default App;
