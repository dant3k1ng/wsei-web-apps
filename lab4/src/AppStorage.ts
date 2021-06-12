import firebase from 'firebase';
import { firebaseConfig } from '../src/firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export async function addNote(note: any){
    const res = await db.collection('notes').add(note);
}

export async function deleteNote(id: string){
    const res = await db.collection('notes').doc(id).delete();
}

export async function updateNote(id: string, note: any){
    const res = await db.collection('notes').doc(id).update(note);
}

export async function getNotes(){
    const res = db.collection('notes').get().then(res => ({size: res.size, docs: res.docs}));

    console.log(res);
 }


 /*export async function getNote(id: string){
   return db.collection('notes').doc(id).get().then(res => ({id: res.id, data: res.data()}))
}*/


