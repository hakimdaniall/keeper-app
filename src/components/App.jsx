import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"
import ValorantAgent from "./ValorantAgent";
import agents from "../agents";

function App() {
    return (
        <div>
            <Header />
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

            <div className="agent-list">
                {agents.map((agentData) =>
                    <ValorantAgent
                        name={agentData.name}
                        image={agentData.image}
                    />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default App;