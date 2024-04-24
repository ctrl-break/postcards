const fs = require('fs');

fs.unlinkSync('./src/6-shared/api/generated/services.ts');

fs.writeFileSync(
    './src/6-shared/api/generated/services/index.ts',
    `
export { ApiService } from './api.service';

`,
    function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('The file was saved!');
    },
);

fs.writeFileSync(
    './src/6-shared/api/generated/index.ts',
    `
export { ApiService } from './services';
export { ApiConfiguration } from './api-configuration';
export * from './models';

`,
    function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('The file was saved!');
    },
);
