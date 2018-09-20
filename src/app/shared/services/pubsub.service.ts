import {Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubSubService {
  // private publishSubscribeSubject_:Subject<any> = new Subject();
  // emitter_:Observable<any>;

  /**
   * Hash map of subjects
   * @type {Subject}
   */
  private subjects: { [key: string]: Subject<any> } = {};

  constructor() {
    // this.emitter_ = this.publishSubscribeSubject_.asObservable();
  }

  /**
   * Emits events through a subject to all subscribed broadcaster
   * @param name {string} Name of an event
   * @param data {any} Event data
   */
  publish(name: string, data?: any) {
    if (typeof this.subjects[name] === 'undefined') {
      this.subjects[name] = new Subject();
    }
    this.subjects[name].next(data);
  }

  /**
   * Subscribes a Observer (listener) to an event.
   * @param name {string} Name of an event
   * @param handler {any} Callback of the listener (subscriber)
   * @returns {Subscription}
   */
  subscribe(name: string, handler: any): Subscription {
    if (typeof this.subjects[name] === 'undefined') {
      this.subjects[name] = new Subject();
    }
    return this.subjects[name].subscribe(handler);
  }

  /**
   * Cleans up a Subject and remove all its observers.
   * Also it removes the subject from subject map.
   */
  dispose(name: string) {
    if (this.subjects[name]) {
      this.subjects[name].unsubscribe();
      delete this.subjects[name];
      console.log('disposed: ' + name + ' remaining: ' +  Object.keys(this.subjects).length);
    }
  }

  /**
   * Clean up all Observers and clean up map of Subjects
   */
  disposeAll() {
    var subjects = this.subjects;
    var hasOwnProp: Function = {}.hasOwnProperty;
    for (var prop in subjects) {
      if (hasOwnProp.call(subjects, prop)) {
        subjects[prop].unsubscribe();
      }
    }
    this.subjects = {};
  }



}
