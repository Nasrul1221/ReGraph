import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import process from 'process';

const app = express()
const PORT = 3000

app.use(cors())

const API_KEY = process.env.API_KEY_STEAM

app.get('/steam/recentgames', async (req, res) => {
    const {steamid} = req.query

    if (!steamid) {
        return res.status(400).json({ error: 'Missing steamid or appid' })
    }

    try {
        const response = await fetch(`http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${API_KEY}&steamid=${steamid}&format=json`)

        const data = await response.json()

        res.json(data)
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.get('/steam/achievements', async (req, res) => {
    const {steamid, appid} = req.query
    
    if (!steamid || !appid) {
        return res.status(400).json({error: "Missing steamid or appid"})
    }

    try {
        const response = await fetch(`http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=${API_KEY}&steamid=${steamid}`)
        
        const data = await response.json()

        res.json(data)
    }catch(error) {
        res.status(500).json({error: error.message})
    }
})

app.get('/steam/gamestats', async (req, res) => {
    const {steamid, appid} = req.query
    
    if (!steamid || !appid) {
        return res.status(400).json({error: "Missing steamid or appid"})
    }

    try {
        const response = await fetch(`http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${appid}&key=${API_KEY}&steamid=${steamid}`)
        
        const data = await response.json()

        res.json(data)
    }catch(error) {
        res.status(500).json({error: error.message})
    }
})

app.get('/steam/ownedgames', async (req, res) => {
    const {steamid} = req.query
    
    if (!steamid) {
        return res.status(400).json({error: "Missing steamid or appid"})
    }

    try {
        const response = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${API_KEY}&steamid=${steamid}$include_appinfo=true&format=json`)
        
        const data = await response.json()

        res.json(data)
    }catch(error) {
        res.status(500).json({error: error.message})
    }
})

app.get('/steam/user', async (req, res) => {
    const {steamid} = req.query
    
    if (!steamid) {
        return res.status(400).json({error: "Missing steamid or appid"})
    }

    try {
        const response = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${steamid}`)
        
        const data = await response.json()

        res.json(data)
    }catch(error) {
        res.status(500).json({error: error.message})
    }
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})