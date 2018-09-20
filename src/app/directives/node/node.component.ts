import {Component, Input, OnDestroy} from '@angular/core';
import {PubSubService} from "../../shared/services/pubsub.service";

@Component({
  selector: 'node',
  template: `
    <p>Heard {{count}} of {{subscribeChannel}}</p>
    <button (click)="send()">Send {{publishChannel}}</button>
  `
})
export class NodeComponent implements OnDestroy {
  @Input() publishChannel:string;
  @Input() subscribeChannel:string;
  count:number = 0;

  constructor(private pubSubService_:PubSubService) {}

  send() {
    this.pubSubService_
      .publish(this.publishChannel, {'random': Math.random()*10});
  }

  ngAfterViewInit() {
    this.pubSubService_
      .subscribe(this.subscribeChannel,
        event => {console.log('event: ' + event.random);
        this.count = event.random;
        });
  }

  ngOnDestroy() {
    this.pubSubService_.dispose(this.publishChannel);
    this.pubSubService_.dispose(this.subscribeChannel);
  }

}
