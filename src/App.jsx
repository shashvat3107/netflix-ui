import { Routes, Route } from "react-router-dom";
import "./app.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Settings from "./pages/settings/Settings";
import Series from "./pages/series/Series";
import Movies from "./pages/movies/Movies";
import New from "./pages/new/New";
import MyList from "./pages/mylist/MyList";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/series" element={<Series />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/new" element={<New />} />
            <Route path="/mylist" element={<MyList />} />
        </Routes>
    );
};

export default App;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./app.scss";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Home from "./pages/home/Home";
// import Watch from "./pages/watch/Watch";

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/watch" element={<Watch />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;
