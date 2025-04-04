/**
 * This is an example of how you add the various elements to 
 * your plugin. Just delete this and start from scratch.
 */

import { title } from 'process';
import Example from './components/Example.vue';

const id = 'template';
const of = id;

SpPS.register({
    id
});

SpPS.intoSlot({
    of,
    key: 'template',
    slot: 'tab',
    icon: 'fa-folder',
    label: 'template',
    component: Example,
    componentTag: 'tmp',
    props: {
        title: 'Template #1',
    }
});

SpPS.intoSlot({
    of,
    key: 'template',
    slot: 'tab',
    icon: 'fa-folder',
    label: 'template-2',
    component: Example,
    componentTag: 'tmp',
    props: {
        title: 'Template #2',
    }
});

SpPS.intoSlot({
    of,
    key: 'template-tools',
    slot: 'tools',
    icon: 'fa-folder',
    label: 'plugin-tools',
    href: 'tools',
    args: {
        title: 'Plugin Tools',
    }
});

SpPS.intoSlot({
    of,
    key: 'template-settings',
    slot: 'settings',
    icon: 'fa-folder',
    label: 'plugin-settings',
    href: 'settings',
    args: {
        title: 'Template Settings',
    }
});

SpPS.registerRoutes(id, [{
    path: '/template/tools',
    component: Example,
    props: {
        title: 'Plugin Tools',
    },
}, {
    path: '/template/settings',
    component: Example,
    props: {
        title: 'Template Settings',
    },
}]);
