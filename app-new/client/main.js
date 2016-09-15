import '/imports/startup/client';
import '/imports/startup/both';
import '/imports/ui/layouts';
import '/imports/ui/pages';
import '/imports/ui/stylesheets/style.css';

// The following is a hack for autoform. Remove it once autoform is removed.
import { Stuff } from '../imports/api/stuff/Stuff.js';
window.Stuff = Stuff;
