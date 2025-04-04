<template>
    <nav class="navbar navbar-expand-lg border-bottom">
        <div class="container-fluid">
            <RouterLink
                class="navbar-brand"
                to="/"
            >
                Plugin Development
            </RouterLink>
            <div class="collapse navbar-collapse">
                <div>
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Tools ({{ store.tools.length }})
                            </a>
                            <ul class="dropdown-menu">
                                <li
                                    v-for="tool in store.tools"
                                    :key="tool.label"
                                >
                                    <router-link
                                        class="dropdown-item"
                                        :to="`/${tool.of}/${tool.href}`"
                                        href="#"
                                    >
                                        {{ tool.label }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Settings ({{ store.settings.length }})
                            </a>
                            <ul class="dropdown-menu">
                                <li
                                    v-for="setting in store.settings"
                                    :key="setting.key"
                                >
                                    <router-link
                                        class="dropdown-item"
                                        :to="`/${setting.of}/${setting.href}`"
                                        href="#"
                                    >
                                        {{ setting.label }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import { RouterLink } from 'vue-router';
    import { useAppStore } from '../../js/_dev/store';

    export default {
        setup() {

            const store = useAppStore();

            return {
                store
            };
        }
    };
</script>

<style lang='scss' scoped></style>