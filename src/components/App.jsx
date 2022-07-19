import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import ValorantAgent from "./ValorantAgent";
import Button from "./Button";
import Card from "./Card";
// mock data
import notes from "../notes"
import agents from "../agents";

var showValorantAgents = false;

function App() {
    const [Joke, setJoke] = React.useState("")

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data));
    }
    return (
        <div>
            <Header />
            <div className="wrapper">
                <div className="note-item">
                    {notes.map((noteItem) =>
                        <Note
                            key={noteItem.key}
                            id={noteItem.key}
                            title={noteItem.title}
                            content={noteItem.content}
                        />
                    )}
                </div>
                <h2>Want random more jokes?</h2>
                <div>
                    <Button callApi={fetchApi} />
                    {Joke && (
                        <Card
                            id={Joke.id}
                            category={Joke.category}
                            joke={Joke.joke}
                        />
                    )}
                </div>

                {/* <button onClick={showValorantAgents == true}>Show Valorant Agents</button> */}

                {showValorantAgents && (
                    <div className="agent-list">
                        {agents.map((agentData) =>
                            <ValorantAgent
                                name={agentData.name}
                                image={agentData.image}
                            />
                        )}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default App;