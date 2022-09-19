import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import {prisma} from './utils/prisma'


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// For parsing application/json
app.use(express.json());
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Hablity Cors
app.use(cors());


/* Home */
app.get("/",(req :Request, res:Response)=>{

  return res.status(200).json({
    msg: "You is a Developer!! Congratulations"
  })

})

/* List All Games*/
app.get('/games',async (req: Request, res: Response) => {
  const allGames = await prisma.games.findMany({
    include:{
      _count:true
    }
  })
  return res.status(200).json(allGames)
});

/* List Single Games for ID*/
app.get('/:id/games',async (req: Request, res: Response) => {
  const id = req.params.id
  const gameId = await prisma.games.findUnique({
    where:{
      id
    },
    include:{
      _count:true
    }   
  })
  return res.status(200).json(gameId)
});

/* List All Ads*/
app.get('/ads',async (req: Request, res: Response) => {
  const allAds = await prisma.ads.findMany()
  return res.status(200).json(allAds)
});

/* List All Ads for ID*/
app.get('/:id/ads',async (req: Request, res: Response) => {
  const id =  req.params.id
  const adsId = await prisma.ads.findUnique({
    where:{
      id
    }
  })
  res.status(201).json(adsId)
});

/* Create Ads */
app.post('/:id/ads',async (req:Request, res:Response)=>{
  const idGames = req.params.id
  const data = req.body
  const createAds =  await prisma.ads.create({
    data:{
      ...data,
      adsGames:{
        connect:{
          id:idGames,
        }
      }
    }
  })
  
  res.status(201).json(createAds)
})

/* Create Games */
app.post('/games',async (req:Request,res: Response)=>{

  const data = req.body
  const createGames = await prisma.games.create({
    data
  })

  return res.status(201).json(createGames)
})


/* Delete Games and Ads */
app.delete('/:id', (req: Request, res: Response) => {
  const id = req.params.id
  res.status(201).json({
    msg:`Delete id: ${id}`
  })
});




app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});