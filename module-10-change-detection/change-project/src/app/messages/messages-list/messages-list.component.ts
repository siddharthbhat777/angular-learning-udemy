import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessagesService } from '../messages.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent {
  private messagesService = inject(MessagesService);
  messages$ = this.messagesService.messages$; // alternative to whole below commented code

  /* private cdRef = inject(ChangeDetectorRef); // available variable for manual external change notification
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
  } */

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
