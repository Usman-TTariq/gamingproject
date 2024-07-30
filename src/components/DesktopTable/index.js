import React from 'react';
import $ from 'jquery';

const DesktopTable = () => {


    const data = [
        { game: "Wild Bounty Showdown", player: "Player1", bet: 6.00, multiplier: "1.5x", profit: 3.00 },
        { game: "3 Hot Chillies", player: "Player2", bet: 16.411, multiplier: "2.0x", profit: 32.822 },
        { game: "Twist", player: "Player3", bet: 5.00, multiplier: "3.0x", profit: 15.00 },
        { game: "Madame Destiny Megaw...", player: "Player4", bet: 10.00, multiplier: "1.8x", profit: 8.00 },
        { game: "Fire in the Hole 2", player: "Player5", bet: 8.00, multiplier: "2.2x", profit: 17.60 },
        { game: "Fruit Party", player: "Player6", bet: 12.50, multiplier: "1.3x", profit: 3.75 },
        { game: "Sweet Bonanza", player: "Player7", bet: 15.00, multiplier: "2.5x", profit: 22.50 },
        { game: "Mega Moolah", player: "Player8", bet: 7.25, multiplier: "1.7x", profit: 5.08 },
      ];

      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

      function updateTable() {
        const shuffledData = shuffle(data.slice()); // Shuffled copy of the data
        const $tableBody = $(".table-body");
        $tableBody.empty(); // Clear current content
        shuffledData.forEach(entry => {
          $tableBody.append(`
            <tr>
              <td class="game">${entry.game}</td>
              <td class="player">${entry.player}</td>
              <td class="bet">${entry.bet}</td>
              <td class="multiplier">${entry.multiplier}</td>
              <td class="profit">${entry.profit}</td>
            </tr>
          `);
        });
      }

      updateTable();

      setInterval(updateTable, 2000);


  return (
    <>
    
    <table class="table">
              <thead>
                <tr>
                  <th scope="col">Game</th>
                  <th scope="col">Player</th>
                  <th scope="col">Bet Amount</th>
                  <th scope="col">Multiplier</th>
                  <th scope="col">Profit Amount</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {/* <tr>
                  <td>
                    <img src={betIcon01} className="game_table_img"></img>
                    Wild Bounty Showdown
                  </td>
                  <td>Dagfbdgfprac</td>
                  <td>
                    6.00
                    <img src={betAmount01} alt="etherum" className="game_table_img"></img>
                  </td>
                  <td>0.00x</td>
                  <td>
                    -6.00
                  <img src={betAmount01} alt="etherum" className="game_table_img"></img>
                  </td>
                </tr> */}
                {/* <tr>
                  <td>
                  <img src={betIcon01} className="game_table_img"></img>
                    3 Hot Chillies
                  </td>
                  <td>Cruz94</td>
                  <td>
                    16.411
                    <img src={betAmount02} alt="etherum" className="game_table_img"></img>
                  </td>
                  <td>0.00x</td>
                  <td>
                    -6.00
                  <img src={betAmount02} alt="etherum" className="game_table_img"></img>
                  </td>
                </tr> */}
                {/* <tr>
                  <td>
                  <img src={betIcon01} className="game_table_img"></img>
                    Twist
                  </td>
                  <td>Elfwadbbprac</td>
                  <td>
                    6.00
                    <img src={betAmount01} alt="etherum" className="game_table_img"></img>
                  </td>
                  <td>0.00x</td>
                  <td>
                    -6.00
                  <img src={betAmount01} alt="etherum" className="game_table_img"></img>
                  </td>
                </tr> */}
                {/* <tr>
                
                  <td>
                  <img src={betIcon01} className="game_table_img"></img>
                    Madame Destiny Megaw...
                  </td>
                  <td>cestmoi</td>
                  <td>
                    16.411
                    <img src={betAmount02} alt="etherum" className="game_table_img"></img>
                  </td>
                  <td>0.00x</td>
                  <td>
                    -6.00
                  <img src={betAmount02} alt="etherum" className="game_table_img"></img>
                  </td>
                </tr> */}
                {/* <tr>
                  <td>
                  <img src={betIcon01} className="game_table_img"></img>
                  Fire in the Hole 2
                  </td>
                  <td>WnTnKtoG</td>
                  <td>
                    16.411
                    <img src={betAmount03} alt="etherum" className="game_table_img"></img>
                  </td>
                  <td>0.00x</td>
                  <td>
                    -6.00
                  <img src={betAmount03} alt="etherum" className="game_table_img"></img>
                  </td>
                </tr> */}
                
              </tbody>
            </table>
    
    </>
  )
}

export default DesktopTable