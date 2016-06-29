var baiduApiKey = '471cd12cec1fcb77cfdea3974d6f7a87';
var myexpress ={
    homeSlideData: 'http://localhost:3000/resources/home-slidedata',
    homeCardsData: 'http://localhost:3000/resources/home-cardsdata'
};
export default class netData {
    static get(url){
        const headers = new Headers();
        headers.append('apikey',baiduApiKey);
        const req = new Request(url,{method:'GET',headers:headers });
        return fetch(req).then((response) => {
                const promise = new Promise((resolve,reject)=>{
                    resolve(response.json());
                });
                return promise;
            });
    }

    static getWeathers(cityId){
        const WeathersUrl = `http://apis.baidu.com/apistore/weatherservice/recentweathers?cityid=${cityId}`;
        return this.get(WeathersUrl).then((data) =>
        {
           return new Promise((resolve,reject) => {
               resolve(data);
           });
        });
    }
    static getMvImage(num){
        const MvUrl =`http://apis.baidu.com/txapi/mvtp/meinv?num=${num}`;
        return this.get(MvUrl).then((data)=>{
            return new Promise((resolve,reject) => {
                resolve(data);
            });
        })
    }

    static getMovie(){
        const movieUrl = `http://v.juhe.cn/boxoffice/rank.php?key=${baiduApiKey}&area=CN`;
        const req = new Request(movieUrl,{method:'GET'});
        return fetch(req).then((response) => {
            const promise = new Promise((resolve,reject)=>{
                resolve(response.json());
            });
            return promise;
        });
    }

    static getHomeSlideData(){
        const req = new Request(myexpress.homeSlideData,{method:'GET'});
        return fetch(req).then((response) => {
            const promise = new Promise((resolve,reject)=>{
                resolve(response.json());
            });
            return promise;
        });
    }

    static getHomeCardsData(){
        const req = new Request(myexpress.homeCardsData,{method:'GET'});
        return fetch(req).then((response) => {
            const promise = new Promise((resolve,reject)=>{
                resolve(response.json());
            });
            return promise;
        });
    }
};