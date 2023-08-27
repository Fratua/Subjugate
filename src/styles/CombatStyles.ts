import { createGlobalStyle } from 'styled-components';

export const CombatStyles = createGlobalStyle`
  .combat-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
  }

  .combat-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 80%;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 20px;
    background-color: #222;
  }

  .player, .monster {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    color: #fff;
  }

  .health-bar {
    width: 100%;
    height: 20px;
    border: 1px solid #fff;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 10px;
  }

  .health-bar-inner {
    height: 100%;
    background-color: #f00;
  }

  .attack-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #f00;
    color: #fff;
    cursor: pointer;
    margin-top: 20px;
  }

  .attack-button:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;
