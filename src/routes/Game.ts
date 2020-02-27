import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { ParamsDictionary } from "express-serve-static-core";

import logger from "@shared/Logger";
import { paramMissingError } from "@shared/constants";

import mockData from "../../util/mockData";

// Init shared
const router = Router();

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
 *                       Add One - "POST /api/users/add"
 ******************************************************************************/

// router.post('/add', async (req: Request, res: Response) => {
//     try {
//         const { user } = req.body;
//         if (!user) {
//             return res.status(BAD_REQUEST).json({
//                 error: paramMissingError,
//             });
//         }
//         await userDao.add(user);
//         return res.status(CREATED).end();
//     } catch (err) {
//         logger.error(err.message, err);
//         return res.status(BAD_REQUEST).json({
//             error: err.message,
//         });
//     }
// });

// /******************************************************************************
//  *                       Update - "PUT /api/users/update"
//  ******************************************************************************/

// router.put('/update', async (req: Request, res: Response) => {
//     try {
//         const { user } = req.body;
//         if (!user) {
//             return res.status(BAD_REQUEST).json({
//                 error: paramMissingError,
//             });
//         }
//         user.id = Number(user.id);
//         await userDao.update(user);
//         return res.status(OK).end();
//     } catch (err) {
//         logger.error(err.message, err);
//         return res.status(BAD_REQUEST).json({
//             error: err.message,
//         });
//     }
// });

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
