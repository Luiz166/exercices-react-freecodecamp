//pt1
// const Page = () => {
//     return (
//         <div>
//             <h1>Reasons to learn React</h1>
//             <ol>
//                 <li>Pick up e-girls</li>
//                 <li>Get a job</li>
//                 <li>Look's cool as fuck</li>
//             </ol>
//         </div>
//     )
// }

// ReactDOM.render(Page(), document.getElementById("container"));

//part 2
// const Page = () => {
//     return (
//         <div>
//             <header>
//                 <nav>
//                     <img src="https://alternative.me/media/256/react-native-icon-pb99lshx8fagxe0r-c.png"/>
//                 </nav>
//             </header>
//             <h1>Reasons to learn React</h1>
//             <ol>
//                 <li>Pick up e-girls</li>
//                 <li>Get a job</li>
//                 <li>Look's cool as fuck</li>
//             </ol>
//             <footer>
//                 <span>&copy; 2023 Klyuyev development. All rights reserved</span>
//             </footer>
//         </div>
//     )
// }

// ReactDOM.render(<Page/>, document.getElementById("container"));

//part3
// const Header = () => {
//         return(

//             <header>
//                 <nav>
//                     <img src="https://alternative.me/media/256/react-native-icon-pb99lshx8fagxe0r-c.png"/>
//                 </nav>
//             </header>
//         )
// }

// const Page = () => {
//     return (
//         <div>
//             <Header/>
//             <h1>Reasons to learn React</h1>
//             <ol>
//                 <li>Pick up e-girls</li>
//                 <li>Get a job</li>
//                 <li>Look's cool as fuck</li>
//             </ol>
//             <footer>
//                 <span>&copy; 2023 Klyuyev development. All rights reserved</span>
//             </footer>
//         </div>
//     )
// }

// ReactDOM.render(<Page/>, document.getElementById("container"));

//part4
const Header = () => {
    return (

        <header>
            <nav className="navPage">
                <img id="logo" src="https://alternative.me/media/256/react-native-icon-pb99lshx8fagxe0r-c.png" />
                <ul className="navItems">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

const MainContent = () => {
    return (
        <div className="main">
            <h1>Reasons to learn React</h1>
            <ol className="mainContent">
                <li>Is very good</li>
                <li>Get a job</li>
                <li>Look's cool as fuck</li>
            </ol>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="footer">
            <small>&copy; 2023 Klyuyev development. All rights reserved</small>
        </footer>
    )
}

const Page = () => {
    return (
        <div className="container">
            <Header />
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("container"));