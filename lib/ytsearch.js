const yts = require('yt-search');

const ytSearch = async (searchArgs) => {
    const result = (await yts(searchArgs)).videos.splice(0,3);
    result.forEach((video) => {
        console.log(`${video.title}  ${video.author.name}`);
    })
    return result[0];
}

module.exports = ytSearch;