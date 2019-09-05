import { Injectable, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirebaseApp } from '@angular/fire';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    eventEmitter: any = new EventEmitter();

    constructor(
        private db: AngularFirestore,
        public firebaseauth: AngularFireAuth,
        private storage: AngularFireStorage,
        private fbApp: FirebaseApp
    ) {
    }

    insertBooks(book) {
        return this.db.collection('books').add(book);
    }

    getBooks() {
        return this.db.collection('books', ref => ref
        .orderBy('order', 'asc'))
        .snapshotChanges();
    }
}
