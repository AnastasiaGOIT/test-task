import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SearchPage } from "./components/SearchPage";
import HomePage from "./components/HomePage/HomePage";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<SearchPage />} />

        {/* <Route
            path="/favorites"
            element={
            <Favorite/>
            }
          />
        </Route> */}
      </Routes>

      {/* <Form /> */}
    </div>
  );
};
