import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express()
const PORT = 3000

app.use(cors())

app.get('/steam/userstats', async (req, res) => {
    const {steamid, appid} = req.query
    const apiKey = '1F748B134FB6633E90F3296D31FB0540'

    if (!steamid || !appid) {
        return res.status(400).json({ error: 'Missing steamid or appid' })
    }

    try {
        const response = await fetch(`https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${appid}&key=${apiKey}&steamid=${steamid}`)

        const data = await response.json()

        res.json(data)
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})