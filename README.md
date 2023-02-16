<!DOCTYPE html>
<html>
  <head>
    <title>Carnival Website</title>
    <style>
      /* CSS styles go here */
      body {
        background-color: #FFC0CB; /* Pink background color */
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      #header {
        background-color: #FF6347; /* Orange header color */
        color: white;
        padding: 20px;
        text-align: center;
      }
      #main {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 20px;
      }
      .game {
        background-color: white;
        border-radius: 5px;
        box-shadow: 0px 3px 3px #888888;
        margin: 20px;
        padding: 20px;
        text-align: center;
        width: 30%;
      }
      .game img {
        height: 150px;
      }
    </style>
  </head>
  <body>
    <div id="header">
      <h1>Welcome to the Carnival!</h1>
    </div>
    <div id="main">
      <div class="game">
        <h2>Dunk Tank</h2>
        <img src="https://static.wixstatic.com/media/0fa92a967c76420a83938ecadb5ba4f2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Client%202.png" alt="Dunk Tank">
        <p>Test your aim by dunking the clown!</p>
        <button onclick="alert('You dunked the clown!')">Play</button>
      </div>
      <div class="game">
        <h2>Ring Toss</h2>
        <img src="https://www.example.com/ringtoss.jpg" alt="Ring Toss">
        <p>Try to toss the ring onto the bottle!</p>
        <button onclick="alert('You got the ring on the bottle!')">Play</button>
      </div>
      <div class="game">
        <h2>Carnival Wheel</h2>
        <img src="https://www.example.com/carnivalwheel.jpg" alt="Carnival Wheel">
        <p>Spin the wheel for a chance to win a prize!</p>
        <button onclick="alert('You won a stuffed animal!')">Play</button>
      </div>
    </div>
    <script>
      // JavaScript code goes here
      const games = document.querySelectorAll('.game');
      games.forEach(game => {
        game.addEventListener('mouseenter', () => {
          game.style.backgroundColor = '#FFF8DC'; /* Light yellow on hover */
        });
        game.addEventListener('mouseleave', () => {
          game.style.backgroundColor = 'white'; /* Return to white after hover */
        });
      });
    </script>
  </body>
</html>
