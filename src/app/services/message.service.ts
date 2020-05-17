import { Injectable, TemplateRef } from '@angular/core';
import { NzMessageService, NzMessageDataFilled, NzMessageDataOptions, MessageConfig } from 'ng-zorro-antd';

export interface MessageOptions 
extends NzMessageDataOptions {

}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageType: 'success' | 'info' | 'warning' | 'error' | 'loading' | string;
  constructor(private message: NzMessageService) { }

  success(content: string | TemplateRef<void>, options?: MessageOptions): NzMessageDataFilled {
    return this.message.success(content, options as NzMessageDataOptions);
  }

  info(content: string | TemplateRef<void>, options?: MessageOptions): NzMessageDataFilled {
    return this.message.info(content, options as NzMessageDataOptions);
  }

  create(messageType: string, content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled {
    return this.message.create(messageType, content, options);
  }

  createMessage(message: { content: string, type: string }, options?: NzMessageDataOptions): NzMessageDataFilled {
    return this.message.createMessage({content: message.content, type: message.type}, options);
  }

  config(config: MessageConfig): void {
    this.config(config);
  }

  remove(messageId?: string): void {
    this.remove(messageId);
  }
}