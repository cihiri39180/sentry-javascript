import { EventProcessor } from './eventprocessor';
import { Hub } from './hub';

/** Integration Class Interface */
export interface IntegrationClass<T> {
  /**
   * Property that holds the integration name
   */
  id: string;

  new (...args: any[]): T;
}

/** Integration interface */
export interface Integration {
  /**
   * Returns {@link IntegrationClass.id}
   */
  name: string;

  /**
   * Sets the integration up only once.
   * This intentionally takes no options. Options should be passed in the constructor.
   */
  setupOnce(addGlobalEventProcessor: (callback: EventProcessor) => void, getCurrentHub: () => Hub): void;
}
