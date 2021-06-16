/*
 * @Author: yanni
 * @Date:   2019-03-14 19:49:08
 * @Last Modified by:   frozen521
 * @Last Modified time: 2019-03-14 20:33:24
 */



function showhowto(circlenum, circlestate, pass) {
    let circleNum = circlenum;
    let circleState = [...circlestate];
    let password = [...pass];
    const n = 0;

    for (let index = 0; index < password.length; index++) {

        if (password[index]>circlestate[index]) {
             n += password[index] - circleState[index];
        }else{
            n += circlestate[index]-password[index];
        }

        console.log('test');

    }
    return n;

    // body...
}
console.log(showhowto(3,[1,2,3,6],[3,2,1,1]))
