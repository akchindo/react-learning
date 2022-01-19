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

const navBar = (
    <nav>
      <h1>My Website</h1>
        <ul>
           <li>Pricing</li>
           <li>About</li>
           <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navBar, document.getElementById('root'))