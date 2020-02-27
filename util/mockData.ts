const mockData = {
  TEMP_GAME_DATA: {
    gameState: 1,
    round: 3,
    publicObjectives: [
      { roundRevealed: 1, id: 9 },
      { roundRevealed: 1, id: 4 }
    ],
    players: [
      {
        name: "Carl",
        id: 0,
        faction: 0,
        points: [
          {
            id: 1,
            roundClaimed: 2
          },
          {
            id: 4,
            roundClaimed: 3
          },
          { id: 23, roundClaimed: 2 }
        ],
        tech: [1, 2, 5, 11]
      },
      {
        name: "Sean",
        id: 1,
        faction: 1,
        points: [
          {
            id: 4,
            roundClaimed: 3
          }
        ],
        tech: [3, 22, 45]
      },
      {
        name: "Nick",
        id: 2,
        faction: 2,
        points: [
          {
            id: 12,
            roundClaimed: 2
          },
          {
            id: 4,
            roundClaimed: 3
          }
        ],
        tech: [1]
      },
      {
        name: "Joe",
        id: 3,
        faction: 3,
        points: [
          {
            id: 1,
            roundClaimed: 2
          },
          {
            id: 4,
            roundClaimed: 3
          },
          {
            id: 12,
            roundClaimed: 3
          },
          {
            id: 35,
            roundClaimed: 3
          }
        ],
        tech: [1, 2, 5, 11]
      },
      {
        name: "Alex",
        id: 4,
        faction: 4,
        points: [],
        tech: [1, 2, 5, 11]
      },
      {
        name: "Josh",
        id: 5,
        faction: 5,
        points: [
          {
            id: 1,
            roundClaimed: 2
          }
        ],
        tech: [1, 2, 5, 11]
      }
    ],
    id: "12345"
  },
  TEMP_NEW_GAME_DATA: {
    gameState: 0,
    round: 0,
    publicObjectives: [],
    players: [],
    id: "00001"
  }
};

export default mockData;
