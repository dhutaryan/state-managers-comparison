import compose from 'compose-function';

import { withRouter } from './with-router';
import { withAntd } from './with-antd';

export const withProviders = compose(withRouter, withAntd);
