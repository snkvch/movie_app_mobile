import * as actions from './actions';
import * as models from '../../firebase/firebaseUtils';
import * as selectors from './selectors';

const authSelectors = { ...selectors };
const authModels = { ...models };
const authActions = { ...actions };

export { authModels, authSelectors, authActions };
