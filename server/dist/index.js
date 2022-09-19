"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const prisma_1 = require("./utils/prisma");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// For parsing application/json
app.use(express_1.default.json());
// For parsing application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
// Hablity Cors
app.use((0, cors_1.default)());
/* Home */
app.get("/", (req, res) => {
    return res.status(200).json({
        msg: "You is a Developer!! Congratulations"
    });
});
/* List All Games*/
app.get('/games', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allGames = yield prisma_1.prisma.games.findMany({
        include: {
            _count: true
        }
    });
    return res.status(200).json(allGames);
}));
/* List Single Games for ID*/
app.get('/:id/games', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const gameId = yield prisma_1.prisma.games.findUnique({
        where: {
            id
        },
        include: {
            _count: true
        }
    });
    return res.status(200).json(gameId);
}));
/* List All Ads*/
app.get('/ads', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allAds = yield prisma_1.prisma.ads.findMany();
    return res.status(200).json(allAds);
}));
/* List All Ads for ID*/
app.get('/:id/ads', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const adsId = yield prisma_1.prisma.ads.findUnique({
        where: {
            id
        }
    });
    res.status(201).json(adsId);
}));
/* Create Ads */
app.post('/:id/ads', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idGames = req.params.id;
    const data = req.body;
    const createAds = yield prisma_1.prisma.ads.create({
        data: Object.assign(Object.assign({}, data), { adsGames: {
                connect: {
                    id: idGames,
                }
            } })
    });
    res.status(201).json(createAds);
}));
/* Create Games */
app.post('/games', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const createGames = yield prisma_1.prisma.games.create({
        data
    });
    return res.status(201).json(createGames);
}));
/* Delete Games and Ads */
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.status(201).json({
        msg: `Delete id: ${id}`
    });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
