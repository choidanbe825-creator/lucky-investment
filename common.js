import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import {getFirestore} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
import {getAuth} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import {firebaseConfig,PRINCIPAL,RATES} from './config.js';
export const app=initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export {PRINCIPAL,RATES};
export const money=n=>Math.round(n).toLocaleString('ko-KR')+'원';
export const stateRef=()=>({});
export function verify(x,y,a,b){
 return [x,y,a,b].every(Number.isSafeInteger)&&x>=0&&y>=0&&a>=0&&b>=0&&a+b>0&&x+y===PRINCIPAL&&x*b===y*a;
}
export function result(d,rate){return Math.round((d.x*(100+rate.a)+d.y*(100+rate.b))/100);}
