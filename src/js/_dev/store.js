import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
    state: () => ({
        activeTab: null,
        tabs: [
        ],
        settings: [],
        tools: [],
        preferences: [],
    }),
    actions: {
        setActiveTab(tab) {
            this.activeTab = tab;
        },
        addTab(tab) {
            if(this.tabs.length == 0) {
                this.activeTab = tab.label;
            }
            this.tabs.push(tab);
        }
    },
});