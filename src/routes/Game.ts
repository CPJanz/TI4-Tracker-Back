import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { ParamsDictionary } from "express-serve-static-core";

import logger from "@shared/Logger";
import { paramMissingError } from "@shared/constants";

import mockData from "../../util/mockData";

// Init shared
const router = Router();

const createGameCode = (): string => {
  const result = [];
  for (let i = 0; 6 > i; i++) {
    result.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
  }
  return result.join("");
};

/******************************************************************************
 *                      Get Game by ID - "GET /api/game/:id"
 ******************************************************************************/

router.get("/", async (req: Request, res: Response) => {
  try {
    const { id } = req.params as ParamsDictionary;
    //Hit DB to get game by gameId and save it to game.
    const game = mockData.TEMP_GAME_DATA;
    //return response with okay and game.
    return res.status(OK).json(game);
  } catch (err) {
    logger.error(err.message, err);
    return res.status(BAD_REQUEST).json({
      error: err.message
    });
  }
});

/******************************************************************************
 *                       Add Game - "POST /api/game/add"
 ******************************************************************************/

router.post("/add", async (req: Request, res: Response) => {
  let gameCode: string = createGameCode();
  const game = mockData.TEMP_NEW_GAME_DATA;
  game.id = gameCode;
  try {
    //Hit DB to add a new game with the game and return the game object
    return res.status(OK).json(game);
  } catch (err) {
    logger.error(err.message, err);
    return res.status(BAD_REQUEST).json({
      error: err.message
    });
  }
});

// /******************************************************************************
//  *                       Update - "PUT /api/game/update"
//  ******************************************************************************/

router.put("/update", async (req: Request, res: Response) => {
  try {
    const game = req.body; //maybe convert this to a game object using a class constructor (spreading the req.body.game)

    if (!game) {
      return res.status(BAD_REQUEST).json({
        error: paramMissingError
      });
    }
    game.id = Number(game.id);
    // Hit database with updated game object
    return res.status(OK).end();
  } catch (err) {
    logger.error(err.message, err);
    return res.status(BAD_REQUEST).json({
      error: err.message
    });
  }
});

/******************************************************************************
 *                    Delete - "DELETE /api/users/delete/:id"
 ******************************************************************************/

// router.delete('/delete/:id', async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params as ParamsDictionary;
//         await userDao.delete(Number(id));
//         return res.status(OK).end();
//     } catch (err) {
//         logger.error(err.message, err);
//         return res.status(BAD_REQUEST).json({
//             error: err.message,
//         });
//     }
// });

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
