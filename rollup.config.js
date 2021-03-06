import typescript from 'rollup-plugin-typescript2';
import external  from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import postcss from "rollup-plugin-postcss";

import pkg from "./package.json";

const babelOptions = {
    "presets": ['@babel/preset-env'],
};

export default {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        resolve({
            browser: true
        }),
        typescript({
            useTsconfigDeclarationDir: true,
            rollupCommonJSResolveHack: true,
            exclude: "**/__tests__/**",
            clean: true
        }),
        commonjs({
            include: ["node_modules/**"],
            exclude: ["**/*.stories.js"],
            namedExports: {
                "node_modules/react/react.js": [
                    "Children",
                    "Component",
                    "PropTypes",
                    "createElement"
                ],
                "node_modules/react-dom/index.js": ["render"]
            }
        }),
        babel(babelOptions),
        postcss(),
    ]
};