/**
 *
 * Asynchronously loads the component for DisplayStrings
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
