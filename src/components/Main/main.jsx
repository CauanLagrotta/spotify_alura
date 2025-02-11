import "./main.css";
import { data } from "./data";

export function Main() {
  return (
    <div className="playlist-container">
      <div id="result-playlists">
        <div className="playlist">
          <h1 id="greeting">Boas vindas</h1>
          <h2 className="session">Navegar por todas as seções</h2>
        </div>
        <div className="offer__scroll-container">
          <div className="offer__list">
            <section className="offer__list-item">
              {data.map((card) => (
                <a href="" className="cards">
                  <div key={card.id} className={card.className}>
                    <img src={card.img} alt={card.title} />
                    <span>{card.title}</span>
                  </div>
                </a>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}