import { createGlobalStyle } from 'styled-components';

export const WorldStyles = createGlobalStyle`
  #world-map {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url('/assets/world-map.jpg') no-repeat center center fixed;
    background-size: cover;
  }

  .region {
    position: absolute;
    border: 2px solid #fff;
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .safe-haven {
    border-color: #00ff00;
    background-color: rgba(0, 255, 0, 0.5);
  }

  .forest {
    background-image: url('/assets/forest.jpg');
  }

  .mountain {
    background-image: url('/assets/mountain.jpg');
  }

  .lake {
    background-image: url('/assets/lake.jpg');
  }

  .city {
    background-image: url('/assets/city.jpg');
  }
`;
