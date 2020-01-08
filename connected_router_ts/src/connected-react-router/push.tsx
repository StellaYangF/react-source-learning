import { LocationState, LocationDescriptorObject } from 'history';
import { CallHistoryMethodAction, CALL_HISTORY_METHOD } from './';
export default function push<S = LocationState>(location: LocationDescriptorObject): CallHistoryMethodAction<[LocationDescriptorObject<S>]>;
export default function push<S = LocationState>(location: LocationDescriptorObject): CallHistoryMethodAction<[LocationDescriptorObject<S>]> {
  return {
    type: CALL_HISTORY_METHOD,
    payload: {
      method: 'push',
      args: [ location ]
    }
  }
}