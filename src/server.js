import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express()
const PORT = 3000

app.use(cors())

app.get('/steam/gamestats', async (req, res) => {
    const {steamid} = req.query
    const apiKey = '1F748B134FB6633E90F3296D31FB0540'

    if (!steamid) {
        return res.status(400).json({ error: 'Missing steamid or appid' })
    }

    try {
        const response = await fetch(`http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${apiKey}&steamid=${steamid}&format=json`)

        const data = await response.json()

        res.json(data)
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.get('steam/achievements', async (req, res) => {
    const {steamid, appid} = req.query
    
    if (!steamid || !appid) {
        return res.status(400).json({error: "Missing steamid or appid"})
    }

    try {
        const response = await fetch(`http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${app}&key={apiKey}&steamid=${steamid}`)
        
        const data = await response.json()

        res.json(data)
    }catch(error) {
        res.status(500).json({error: error.message})
    }
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})