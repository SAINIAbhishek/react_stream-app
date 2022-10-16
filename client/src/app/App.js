import "./App.css";
import { Router, Route } from "react-router-dom";
import StreamCreate from "../components/streams/StreamCreate";
import StreamEdit from "../components/streams/StreamEdit";
import StreamDelete from "../components/streams/StreamDelete";
import StreamList from "../components/streams/StreamList";
import StreamShow from "../components/streams/StreamShow";
import Header from "../components/Header";
import history from "../history";

function App() {
  return (
    <div className="App">
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
