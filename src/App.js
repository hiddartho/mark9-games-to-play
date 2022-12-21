import "./styles.css";
import React, { useState } from "react";

const gameLibrary = {
  OpenWorld: [
    {
      name: "Grand Theft Auto 5",
      metascore: "96",
      description:
        "Grand Theft Auto V evolves nearly every mechanic that was in the previous Grand Theft Auto games.There are many unique features in the game; one being that when the players are playing as one of three protagonists in the game, the other two are living their independent daily lives, and the player may be surprised by what they find the characters doing when they switch back into them"
    },
    {
      name: "Mafia 3",
      metascore: "63",
      description:
        "Mafia III is an action-adventure game set in an open world environment and played from a third-person perspective, in which the player assume control of Lincoln Clay, a Vietnam War veteran on a quest to seek revenge for his adopted family, who are murdered by local mobs."
    },
    {
      name: "Assassin's Creed Valhalla",
      metascore: "87",
      description:
        "Assassin's Creed Valhalla is an Role-playing video game structured around several main story arcs and numerous optional side-missions, called `World Events`. The player takes on the role of Eivor Varinsdottir, a Viking raider, as they lead their fellow Vikings against the Anglo-Saxon kingdoms"
    }
  ],

  FPS: [
    {
      name: "Valorant",
      metascore: "95",
      description:
        "Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it"
    },
    {
      name: "Call of Duty : Vanguard",
      metascore: "78",
      description:
        "Call of Duty: Vanguard is a 2021 first-person shooter game developed by Sledgehammer Games,in which players will experience influential battles of World War II as they fight for victory across the Eastern and Western Fronts of Europe, the Pacific, and North Africa."
    },
    {
      name: "Tom Clancy's Rainbow Six Siege",
      metascore: "80",
      description:
        "Rainbow Six Siege is a high-precision, tactical shooter that prioritises careful planning teamwork and finely tuned tactical play"
    }
  ],
  RPG: [
    {
      name: "The Witcher:Wild Hunt",
      metascore: "96",
      description:
        "The Witcher Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher. Geralt walks, runs, rolls and dodges, and (for the first time in the series) jumps, climbs and swims."
    },
    {
      name: "Elden Ring",
      metascore: "91",
      description:
        "Elden Ring sees you play as an initially meaningless character in a world of monsters and demigods, all struggling for control over the Lands Between. It's your job to explore the world, grow in strength, and fight or ally with those you meet to bring about a new order by collecting the Great Runes"
    },
    {
      name: "CyberPunk",
      metascore: "90",
      description:
        "Cyberpunk is a subgenre of science fiction in a dystopian futuristic setting that tends to focus on a `combination of lowlife and high tech`, featuring futuristic technological and scientific achievements, such as artificial intelligence and cybernetics, juxtaposed with societal collapse, dystopia or decay."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("FPS");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ padding: "2rem 0 0.7rem 0" }}> list of games to play </h1>
      <p style={{ padding: " 0.5rem 0 0.5rem 0" }}>
        Here are my favourite list of games. Select your genre to get started
      </p>
      <section>
        <div>
          {Object.keys(gameLibrary).map((genre) => (
            <button
              onClick={() => genreClickHandler(genre)}
              style={{
                cursor: "pointer",
                background: "#E5E7EB",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem",
                textAlign: "center"
              }}
            >
              {genre}
            </button>
          ))}
        </div>
        <hr />
        <div>
          <ul>
            {gameLibrary[selectedGenre].map((game) => (
              <li
                key={game.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                  textAlign: "center",
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  borderRadius: "0.5rem"
                }}
              >
                <div
                  style={{
                    fontSize: "1.4rem",
                    // fontWeight: "bold",
                    padding: "0.5rem"
                  }}
                >
                  {" "}
                  {game.name}{" "}
                </div>
                <div style={{ fontSize: "1rem", padding: "0.5rem" }}>
                  Metascore: {game.metascore}{" "}
                </div>
                <div
                  style={{
                    fontSize: "13.5px",
                    lineSpacing: "2px",
                    padding: "0.5rem",
                    lineHeight: "1.5rem"
                  }}
                >
                  {game.description}{" "}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
