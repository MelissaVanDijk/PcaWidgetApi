import { Observable, fromEvent } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { IContact } from 'models/contact';
import { IVoiceConversation } from 'models/conversation';


const messages$ : Observable<MessageEvent> = fromEvent(window, 'message')
    .pipe(
        filter(event => event !== null ),
        map(event =>  event as MessageEvent),
        tap(event => {
            if(event.origin !== 'http://localhost:4200' && event.origin !== 'http://localhost:5200'){
                console.log('invalid event.origin');
            }
            return event;
        }),
        filter(event => event.origin === 'http://localhost:4200' || event.origin === 'http://localhost:5200'),
        tap(event => {
            if(event.data.method === null || event.data.method === ''
                        || event.data.payload === null || event.data.payload === ''){
                console.log('invalid message. method or payload not provided');
            }
            return event;
        }),
        filter(event => event.data.method !== null && event.data.method !==''
                    && event.data.payload !== null && event.data.payload !== ''
        )
    );

const selectedContact$ : Observable<IContact> = messages$
    .pipe(
        filter(event => event.data.message === 'onSelectContact'),
        map(event => event.data.payload as IContact)
    );

const selectedVoiceConversation$ : Observable<IVoiceConversation> = messages$
    .pipe(
        filter(event => event.data.message === 'onSelectContact'),
        map(event => event.data.payload as IVoiceConversation)
    );

export{
    selectedContact$,
    selectedVoiceConversation$
}

