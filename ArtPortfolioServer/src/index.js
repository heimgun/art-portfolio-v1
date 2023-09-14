const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 1337;

const projects = [
    {
        id: 12345,
        name: 'SHARK TALES',
        date: '23 October 23',
        description: 'Artwork made for Göteborg Akvariet as a part of their Shark awareness month',
        linkToWork: 'https://sharkattack',
        img: 'https://img.freepik.com/premium-vector/wild-zombie-shark-beast-illustration_77271-419.jpg?w=1060',
    },
    {
        id: 12346,
        name: 'MOOD MAGNETS',
        date: '12 November 23',
        description: 'Graffiti mural made in collab with x',
        linkToWork: 'https://sharkattack',
        img: 'https://m.media-amazon.com/images/I/712KSFO4zLL.jpg'
    },
    {
        id: 12347,
        name: 'On Board Pirate',
        date: '6 January 24',
        description: 'Boat boat boat',
        linkToWork: 'https://sharkattack',
        img: 'https://i.etsystatic.com/41305750/r/il/e6adae/4684023448/il_570xN.4684023448_7t0i.jpg'
    },

];

app.get('/projects', (req, res) => {
    res.send(projects);

    console.log('Sent list of projects: ', projects);
});

app.post('/projects', (req, res) => {
    projects.push(req.body);
    res.send(projects);

    console.log('Added new project to list: ', req.body);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));