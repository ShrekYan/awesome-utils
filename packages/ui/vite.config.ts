import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import babel from "@rollup/plugin-babel";

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'classic',
        }),
        dts({
            insertTypesEntry: false,
            outDir: "dist/types",
            entryRoot: "src"
        }),
        libInjectCss(),
        babel({
            babelHelpers: "runtime",
            include: ['src/**'], // 包含你的源码
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        })
    ],
    build: {
        minify:false, //取消压缩效果
        cssCodeSplit: true,
        lib: {
            entry: {
                index: "./src/index.ts",
                Loading: "src/components/Loading/Loading.tsx",
                ErrorBoundary: "src/components/ErrorBoundary/index.tsx",
                FloatButton: "src/components/FloatButton/index.tsx",
                Network: "src/components/Network/index.tsx",
                PageLoading: "src/components/PageLoading/PageLoading.tsx",
            },
            name: "react-awesome-component",
            formats: ["es"]
        },
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "react-use"
            ],
            output: {
                globals: {
                    react: "React",
                    'react-dom': "ReactDOM"
                },

            }
        },
        emptyOutDir: true
    }
});