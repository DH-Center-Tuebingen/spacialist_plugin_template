import { readFile, writeFile } from 'fs/promises';
import { XMLParser } from 'fast-xml-parser';

async function main() {

    const passedArguments = process.argv.slice(2);


    const options = {
        help: false,
        inspect: false
    };

    const availableOptions = [
        {
            arguments: ['-h', '--help'],
            description: 'Display this help message',
            enable: () => {
                options.help = true;
            }
        },
        {
            arguments: ['-c', '--call'],
            description: 'Call the doctor',
            enable: () => {
                options.inspect = true;
            }
        }
    ];

    if (passedArguments.length === 0) {
        passedArguments.push('-h');
    }

    const allOptionArguments = availableOptions.reduce((acc, option) => {
        option.arguments.forEach((argument) => {
            if (acc[argument]) {
                throw new Error(`Duplicate argument: ${argument}`);
            }
            acc[argument] = option;
        });

        return acc;
    }, {});

    const unavailableOptions = [];
    passedArguments.forEach((argument) => {
        if (allOptionArguments[argument]) {
            allOptionArguments[argument].enable();
        } else {
            unavailableOptions.push(argument);
        }
    });

    if (unavailableOptions.length > 0) {
        throw new Error(`The following options are not available: ${unavailableOptions.join(', ')}`);
    }

    function getOptionsText() {
        return availableOptions.map((option) => {
            return option.arguments.join(', ') + ' - ' + option.description;
        }).join('\n        ');
    }

    if (options.help) {
        console.log(`Usage: doctor [options]
    Options:
        ${getOptionsText()}
    `);
    }

    if (options.inspect) {


        let manifest;
        try {
            manifest = await readFile('manifest.xml');
        } catch (e) {
            throw new Error('manifest.json not found');
        }

        try {
            const xmlParser = new XMLParser();
            manifest = xmlParser.parse(manifest);
        } catch (e) {
            throw new Error('manifest.xml is not a valid XML file');
        }

        let packageJson;
        try {
            packageJson = await readFile('package.json');
        } catch (e) {
            throw new Error('package.json not found');
        }

        try {
            packageJson = JSON.parse(packageJson);
        } catch (e) {
            throw new Error('package.json is not a valid JSON file');
        }

        const logs = [];

        function error(message) {
            logs.push({ type: 'error', message: `\x1b[41m${message}\x1b[0m` });
        }

        function warning(message) {
            logs.push({ type: 'warning', message: `\x1b[43m${message}\x1b[0m` });
        }

        function success(message) {
            logs.push({ type: 'success', message: `\x1b[32m${message}\x1b[0m` });
        }


        const manifestVersion = manifest?.info?.version;
        const packageJsonVersion = packageJson.version;

        if(!manifestVersion) {
            error('manifest.xml does not contain a version');
        }

        if (manifestVersion !== packageJson.version) {
            warning(`Version in manifest.xml (v${packageJsonVersion}) did not match version in package.json (v${manifestVersion}). Updating package.json version to match manifest.xml => v${manifestVersion}`);
            packageJson.version = manifestVersion;
            await writeFile('package.json', JSON.stringify(packageJson, null, 4));
        } else {
            success('Version in manifest.xml matches version in package.json');
        }




        logs.forEach((log) => {
            console.log(log.message);
        });


    }
}

try {
    await main();
    process.exit(0);
} catch (e) {
    console.error(e.message);
    process.exit(1);
}