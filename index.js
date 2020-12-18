require('dotenv').config();
const { google } = require('googleapis');
const fs = require('fs');


google.youtube('v3').search.list({
    key: '###',
    channelId: 'UCwmZiChSryoWQCZMIQezgTg',
    part: 'snippet',
    maxResults: 12,
    order: 'date',
}).then((response) => {
    const { data } = response;
    
    fs.writeFileSync('youtube.json', JSON.stringify(data.items, null, 2))
   
}).catch((err) => console.log(err)); 

google.youtube('v3').search.list({
    key: '###',
    channelId: 'UCwmZiChSryoWQCZMIQezgTg',
    part: 'snippet',
    maxResults: 6,
    q: 'ocean',
}).then((response) => {
    const { data } = response;
    
    fs.writeFileSync('youtube-ocean.json', JSON.stringify(data.items, null, 2))
   
}).catch((err) => console.log(err)); 