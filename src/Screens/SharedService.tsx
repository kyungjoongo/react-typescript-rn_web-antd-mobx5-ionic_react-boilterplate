import axios from 'axios';
import cheerio from "cheerio";
//import * as Realm from "realm-web";
//const app = new Realm.App({id: "realm001-orvsj"});

export default async function getMelonList(url = 'chart/week/index.htm?classCd=GN1300') {
    return await axios({
        method: 'get',
        url: url,
        timeout: 1000 * 10,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).then(response => {
        let finalResults: any = [];
        let dataList = response.data;
        const $ = cheerio.load(dataList);
        $('table > tbody > tr').each(function () {
            // @ts-ignore
            var one = $(this).html();
            // @ts-ignore
            let image = $(this).find('img').attr('src');
            // @ts-ignore
            let title = $(this).find('.rank01 > span > a').attr('title').replace('재생', '');
            // @ts-ignore
            let artist = $(this).find('.wrap_song_info > .rank02 > a').text();
            finalResults.push({
                image: image,
                title: title,
                artist: artist,
            });
        });
        console.log('temp-===>', finalResults);
        return finalResults;

    }).catch(err => {
        console.log('temp-===>', err);
    });

}


export async function getBookmarks(url = 'chart/week/index.htm?classCd=GN1300') {
    // @ts-ignore
    /* const mongodb = app.currentUser.mongoClient("mongodb-atlas");
     const _bookmarks = mongodb.db("portal").collection("bookmarks")
     const results = await _bookmarks.find(   )
     return results.reverse();*/
    return [];

}
