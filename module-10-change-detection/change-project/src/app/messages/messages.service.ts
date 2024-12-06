import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MessagesService {
    messages$ = new BehaviorSubject<string[]>([]); // creating rxjs variable
    private messages: string[] = [];
    get allMessages() {
        return [...this.messages];
    }

    addMessage(message: string) {
        this.messages = [...this.messages, message];
        this.messages$.next([...this.messages]); // changing rxjs variable to notify message-list
    }
}