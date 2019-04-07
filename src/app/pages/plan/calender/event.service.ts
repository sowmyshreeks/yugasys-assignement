import { Inject, Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs';
@Injectable()
export class EventSesrvice {
    public getEvents(): Observable<any> {
        const dateObj = new Date();
        const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        let data: any = [{
            title: 'Day Plan',
            start: yearMonth + '-01'
        },
        {
            title: 'Duration Plan',
            start: yearMonth + '-07',
            end: yearMonth + '-10'
        },
        {
            id: 999,
            title: 'Duration Plan',
            start: yearMonth + '-09T16:00:00'
        },
        {
            title: 'Week Plan',
            start: yearMonth + '-15',
            end: yearMonth + '-21'
        },
        
        {
            title: 'Duration Plan',
            start: yearMonth + '-11',
            end: yearMonth + '-13'
        },
        {
            title: 'Meeting',
            start: yearMonth + '-12T10:30:00',
            end: yearMonth + '-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: yearMonth + '-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: yearMonth + '-12T14:30:00'
        },
        {
            title: 'Happy Hour',
            start: yearMonth + '-12T17:30:00'
        },
        {
            title: 'Dinner',
            start: yearMonth + '-12T20:00:00'
        },
        {
            title: 'Birthday Party',
            start: yearMonth + '-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: yearMonth + '-28'
        }];
        return Observable.of(data);
    }
};
