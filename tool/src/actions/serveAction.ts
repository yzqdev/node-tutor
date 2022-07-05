import {ServeOption} from "../interfaces/Ioption";
import handler from 'serve-handler';
import http from 'http';
import boxen from 'boxen';
import pc from 'picocolors'
import {AddressInfo} from "net";
import * as os from "os";
import express from 'express'
import serveIndex from 'serve-index'
import * as path from 'path'
export async function expServer(option: ServeOption) {
    let port=option.port??3000
    const app = express()
    console.log(path.resolve())
    console.log(option.dir )
    let dir=option.dir ??'/'
    app.use(dir, express.static(path.resolve()),serveIndex(path.resolve(),{'icons':true}) );

    app.listen( port,() => {
        let message = pc.green('Serving!');
        const ip = getNetworkAddress();
let httpMode='http'
        let localAddress = `${httpMode}://localhost:${ port}`;
       let  networkAddress = ip ? `${httpMode}://${ip}:${ port}` : null;
        if (localAddress) {
            const prefix = networkAddress ? '- ' : '';
            const space = networkAddress ? '            ' : '  ';

            message += `\n\n${pc.bold(`${prefix}Local:`)}${space}${localAddress}`;
        }

        if (networkAddress) {
            message += `\n${pc.bold('- On Your Network:')}  ${networkAddress}`;
        }
        console.log(boxen(message, {
            padding: 1,
            borderColor: 'green',
            margin: 1
        }));
    })
}



const registerShutdown = (fn) => {
    let run = false;

    const wrapper = () => {
        if (!run) {
            run = true;
            fn();
        }
    };

    process.on('SIGINT', wrapper);
    process.on('SIGTERM', wrapper);
    process.on('exit', wrapper);
};
export const getNetworkAddress = () => {

    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const osinterface of interfaces[name]) {
            const {address, family, internal} = osinterface;
            if (family === 'IPv4' && !internal) {
                return address;
            }
        }
    }
};

export function serveAction(option: ServeOption) {
    let port = option.port ?? 3000
    const serverHandler = async (request, response) => {
        if (option.cors) {
            response.setHeader('Access-Control-Allow-Origin', '*');
        }


        return handler(request, response);
    };
    let server = http.createServer(serverHandler)
    server.listen(port, async () => {
        const details: AddressInfo = server.address();
        registerShutdown(() => server.close());

        let localAddress = null;
        let networkAddress = null;
        let httpMode = "http"

        if (typeof details === 'string') {
            localAddress = details;
        } else if (typeof details === 'object' && details.port) {
            const address = details.address === '::' ? 'localhost' : details.address;
            const ip = getNetworkAddress();

            localAddress = `${httpMode}://${address}:${details.port}`;
            networkAddress = ip ? `${httpMode}://${ip}:${details.port}` : null;
        }

        if (process.env.NODE_ENV !== 'production') {
            let message = pc.green('Serving!');

            if (localAddress) {
                const prefix = networkAddress ? '- ' : '';
                const space = networkAddress ? '            ' : '  ';

                message += `\n\n${pc.bold(`${prefix}Local:`)}${space}${localAddress}`;
            }

            if (networkAddress) {
                message += `\n${pc.bold('- On Your Network:')}  ${networkAddress}`;
            }
            //
            // if (previous) {
            //     message += chalk.red(`\n\nThis port was picked because ${chalk.underline(previous)} is in use.`);
            // }

            // if (clipboard) {
            //     try {
            //         await copy(localAddress);
            //         message += `\n\n${chalk.grey('Copied local address to clipboard!')}`;
            //     } catch (err) {
            //         console.error(error(`Cannot copy to clipboard: ${err.message}`));
            //     }
            // }

            console.log(boxen(message, {
                padding: 1,
                borderColor: 'green',
                margin: 1
            }));


        }
    })


}
