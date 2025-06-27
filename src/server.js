import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express()
const PORT = 3000

app.use(cors())
const API_KEY = '1F748B134FB6633E90F3296D31FB0540'

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
        const response = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${API_KEY}&steamid=${steamid}&format=json`)
        
        const data = await response.json()

        res.json(data)
    }catch(error) {
        res.status(500).json({error: error.message})
    }
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})