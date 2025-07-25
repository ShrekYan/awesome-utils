import {defineConfig} from "vite"
import dts from "vite-plugin-dts"
import babel from "@rollup/plugin-babel"


export default defineConfig({
    plugins:[
        dts({
            insertTypesEntry:false,
            outDir: "dist/types",
            entryRoot: "src"
        }),
        babel({
            babelHelpers:"bundled",
            extensions: [".js", ".ts",".jsx",".tsx"]
        })
    ],
    build:{
        minify:false, //取消压缩效果
        lib:{
            entry:{
                http:"./src/http/index.ts"
            },
            name:"awesome-utils",
            formats:["es"]
        },
        rollupOptions:{
            external:[],
            output:{
                preserveModules:false,
                compact:false, //取消压缩格式

            }
        },
        emptyOutDir:true
    }
});