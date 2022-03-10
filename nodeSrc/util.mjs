import random from "random";

export function addPreZero(num) {

    return ('000000000' + num).slice(-3);

}
function uigf(time,name,itemType,rankType,id){
    return{
        "uigf_gacha_type": "301",
        "uid": "167117381",
        "gacha_type": "301",
        "item_id": "",
        "count": "1",
        "time": time,
        "name": name,
        "lang": "zh-cn",
        "item_type": itemType,
        "rank_type": rankType,
        "id": id
    }
}
export function charactor(time,id){
    let randomId=random.int(1,7)
    let names=['凝光','芭芭拉','班尼特',"西风大剑",'笛剑','流浪乐章','西风秘典']
    switch (randomId) {
        case 1:
        case 2:
        case 3:
           return uigf(time,names[randomId-1],"角色","4",id)
        case 4:
        case 5:
        case 6:
        case 7:
            return uigf(time,names[randomId-1],"武器","4",id)
    }

}
export function weapon(name,time,id,itemType='武器',rankType="3") {

    return {
        "uigf_gacha_type": "301",
        "uid": "167117381",
        "gacha_type": "301",
        "item_id": "",
        "count": "1",
        "time": time,
        "name": name,
        "lang": "zh-cn",
        "item_type": itemType,
        "rank_type": rankType,
        "id": id
    }
}

export const  oneToTen = () => {
   return  Math.ceil(Math.random() * 10);
}
