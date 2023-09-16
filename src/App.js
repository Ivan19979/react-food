import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";
import { RandomRecipe } from "./pages/RandomRecipe";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <HashRouter basename="/react-food">
        <Header />
        <main className="container content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contact} />
            <Route path="/category/:name" component={Category} />
            <Route path="/meal/:id" component={Recipe} />
            <Route path="/meal" component={RandomRecipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
