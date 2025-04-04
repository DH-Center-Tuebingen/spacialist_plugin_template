
/** 
 * Polyfill for the SpPS plugin system.
 */
export function createPluginPolyfill() {
    window.SpPS = {
        register: ({ id, i18n, routes, store }) => { },
        registerI18n: (id, i18n) => { },
        registerRoutes: (id, routes) => { },
        intoSlot: ({
            of, // unique id string of the plugin.
            slot, // ["tab","tools","settings"] - unique slot string of the plugin.
            component, // component of the slot. Requires componentTag to be set.
            componentTag, // tag of the component, defaults to key.
            key, // unique key string of the slot.
            icon, // icon of the slot.
            label, // label of the slot.
            href // Unknown at the moment.
        }) => {

        },
    };
}