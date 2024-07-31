import React from 'react';
import $ from 'jquery';

const MobileTable = () => {

    const data02 = [
        { game: "Wild Bounty Showdown", winners: "-", payout: "-BDT117.49" },
        { game: "3 Hot Chillies", winners: "-", payout: "-BDT117.49" },
        { game: "3 Hot Chillies", winners: "-", payout: "-BDT117.49" },
        { game: "Twist", winners: "-", payout: "-BDT117.49" },
        { game: "Madame Destiny Megaw...", winners: "-", payout: "-BDT117.49" },
        { game: "Fire in the Hole 2", winners: "-", payout: "-BDT117.49" },
        { game: "Fruit Party", winners: "-", payout: "-BDT117.49" },
      ];
    
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
    
      function updateTable02() {
        const shuffledData = shuffle(data02.slice()); // Shuffled copy of the data
        const $tableBody = $(".table-body02");
        $tableBody.empty(); // Clear current content
        shuffledData.forEach(entry => {
          $tableBody.append(`
            <tr>
              <td class="game">${entry.game}</td>
              <td class="player">${entry.winners}</td>
              <td class="bet">${entry.payout}</td>
              
            </tr>
          `);
        });
      }
      
      // Initial table population
      updateTable02();
    
      // Update table every 2 seconds
      setInterval(updateTable02, 2000);
      

  return (
    <>
    
    <table class="table">
              <thead>
                <tr>
                  <th scope="col">Game</th>
                  <th scope="col">Winners</th>
                  <th scope="col">Payout</th>
                </tr>
              </thead>
              <tbody className="table-body02">
                {/* <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td>
                    -BDT117.49
                    <img src={etherum} alt="etherum"></img>
                  </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td>
                    -BDT117.49
                    <img src={bitcoin} alt="etherum"></img>
                    </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td>
                    -BDT117.49
                    <img src={bitcoin} alt="etherum"></img>
                    </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td>
                    -BDT117.49
                    <img src={bitcoin} alt="etherum"></img>
                    </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td className="green_text">
                    -BDT117.49
                    <img src={etherum} alt="etherum"></img>
                  </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td className="">
                    -BDT117.49
                    <img src={etherum} alt="etherum"></img>
                  </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td className="green_text">
                    -BDT117.49
                    <img src={etherum} alt="etherum"></img>
                  </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td className="">
                    -BDT117.49
                    <img src={etherum} alt="etherum"></img>
                  </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td>
                    -BDT117.49
                    <img src={bitcoin} alt="etherum"></img>
                    </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td>
                    -BDT117.49
                    <img src={bitcoin} alt="etherum"></img>
                    </td>
                </tr> */}
              </tbody>
            </table>
    
    </>
  )
}

export default MobileTable