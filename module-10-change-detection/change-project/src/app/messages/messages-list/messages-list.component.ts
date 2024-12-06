import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit {
  private messagesService = inject(MessagesService);
  private cdRef = inject(ChangeDetectorRef); // available variable for manual external change notification
  private destroyRef = inject(DestroyRef); // cleanup variable

  messages: string[] = [];

  ngOnInit() {
      const subscription = this.messagesService.messages$.subscribe((messages) => { // returns updated messages list
        this.messages = messages; // setting updated message list
        this.cdRef.markForCheck(); // detect the change and confirm it
      });
      this.destroyRef.onDestroy(() => { // cleaning up subscriptions after use
        subscription.unsubscribe();
      });
  }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
