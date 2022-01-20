// // ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById('root'))

// function MainContent() {
//     return(
//         <h1>I'm learning React!</h1>
//     )
// }

// // ReactDOM.render(<ul><li>I am Abdullai Chindo</li>
// //                     <li>aspiring frontend</li>
// // </ul>, document.getElementById('root'))

// ReactDOM.render(<div><MainContent /></div>, document.getElementById('root'))

// const head = document.createElement('h1')
// head.textContent = "usng vanilla js"
// head.className = 'header'
// const root = document.getElementById('root')
// root.appendChild(head)

// console.log(root)

// const navBar = (
//     <nav>
//       <h1>My Website</h1>
//         <ul>
//            <li>Pricing</li>
//            <li>About</li>
//            <li>Contact</li>
//         </ul>
//     </nav>
// )

// const page = (
//   <div>
//     <h1>My awesome website in React</h1>
//     <h3>Reasons I love React</h3>
//     <ol>
//       <li>It's composable</li>
//       <li>It's declarative</li>
//       <li>It's a hireable skill</li>
//       <li>It's actively maintained by skill people</li>
//     </ol>
//   </div>
// )

const page = (
  <div>
    <img src="./logo.svg" alt="logo" width="40px"/>
    <h1> Fun facts about React </h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke </li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)

function MyPage() {
  return (
    <div> 
      <Header />
      <ol>
       <li>React is fun to learn and understandable</li>
        <li>React has a very good and large community </li>
        <li>React is an employable skill</li>
        <li>IReact components helps in writing good codes</li>
        <li>ReactPowers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </div>
  )
}

function Header() {
  return (
    <header>
      <nav>
       <img src="./logo.svg" alt="logo" width="40px" />
       <h1>Why i love react</h1>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer> 
      <small>&copy; 20xx &lt;last name here &gt; development. All rights reserved.
      </small>
    </footer>
  )
}

ReactDOM.render(  <MyPage />, document.getElementById('root'))