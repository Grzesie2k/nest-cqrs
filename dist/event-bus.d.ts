import { IEventBus, IEvent, IEventHandler } from './interfaces/index';
import { ObservableBus } from './utils/observable-bus';
import { Type } from '@nestjs/common';
import { CommandBus } from './command-bus';
import { Saga } from './index';
export declare type EventHandlerMetatype = Type<IEventHandler<IEvent>>;
export declare class EventBus extends ObservableBus<IEvent>
  implements IEventBus {
  private readonly commandBus;
  private moduleRef;
  constructor(commandBus: CommandBus);
  setModuleRef(moduleRef: any): void;
  publish<T extends IEvent>(event: T): void;
  ofType<T extends IEvent>(
    event: T & {
      name: string;
    },
  ): any;
  bind<T extends IEvent>(handler: IEventHandler<IEvent>, name: string): void;
  combineSagas(sagas: Saga[]): void;
  register(handlers: EventHandlerMetatype[]): void;
  protected registerHandler(handler: EventHandlerMetatype): void;
  protected ofEventName(name: string): any;
  private getEventName(event);
  protected registerSaga(saga: Saga): void;
  private reflectEventsNames(handler);
}
