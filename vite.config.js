import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { XMLParser } from 'fast-xml-parser';
import { readFileSync } from 'fs';


let pluginName;

const xmlParser = new XMLParser();
const manifestText = readFileSync('manifest.xml', 'utf8');
const manifest = xmlParser.parse(manifestText);
pluginName = manifest?.info?.name;

if(!pluginName) {
    throw new Error('manifest.xml does not contain a name');
}

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: 'src/main.js',
            name: pluginName,
            fileName: (format) => `spacialist_${pluginName.toLocaleLowerCase()}.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});
