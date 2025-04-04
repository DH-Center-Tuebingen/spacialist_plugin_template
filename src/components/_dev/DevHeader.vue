<template>
    <nav class="navbar navbar-expand-lg border-bottom">
        <div class="container-fluid">
            <a
                class="navbar-brand"
                href="#"
            >Plugin Development</a>
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
                                    <a
                                        class="dropdown-item"
                                        href="#"
                                    >{{ tool.label }}</a>
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
                                    :key="setting.label"
                                >
                                    <a
                                        class="dropdown-item"
                                        href="#"
                                    >{{ setting.label }}</a>
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