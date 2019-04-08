/* eslint-disable no-undef */
const { rm, cp, mkdir, exec, echo } = require('shelljs');
const chalk = require('chalk');

echo(process.env.npm_package_name);
console.log(chalk.green('1、收集覆盖率之前把之前的覆盖率报告目录清理掉'));
rm('-rf', 'coverage');
rm('-rf', '.nyc_output');

console.log(chalk.green('2、直接调用 nyc，让其生成 html 格式的覆盖率报告'));
exec('nyc --reporter=html npm run mocha');

console.log(chalk.green('3、整理测试报告以版本号来进行们每次测试报告的文件归档'));
mkdir('-p', `coverage_archive/${process.env.npm_package_version}`);
cp('-r', 'coverage/*', `coverage_archive/${process.env.npm_package_version}`);

rm('-rf', '.nyc_output');
rm('-rf', 'coverage');
exec(
    `http-server coverage_archive/${
        process.env.npm_package_version
    } -p $npm_package_config_port`
);
