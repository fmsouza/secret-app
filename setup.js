import { useStrict } from 'mobx';
import * as Action from 'common/actions';

useStrict(true);
Action.initPasswordStorage();