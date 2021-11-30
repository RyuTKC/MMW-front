// path パスいい感じに読み込むライブラリ
const path = require("path");
// glob ファイル探索ライブラリ
const glob = require("glob");
// css出力プラグイン
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// webpack5との互換性ないらしいのでやめる
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
// jsファイル出力無効ライブラリ
const RemoveEmptyScripts = require("webpack-remove-empty-scripts");
// コンパイルディレクトリをクリーン
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//tsconfigのimportルールを引き継ぐ
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const webpack = require("webpack");
const entries = {};

const webpackConfig =
{
  // モード設定
  mode: "development",
  target: ["web", "es5"],
  // エントリポイント
  entry: entries,
  // jsファイルの出力先
  output: {
    filename: path.join("js", "[name].js"), // ファイル名
    path: path.resolve(__dirname, "dist"), // 絶対パス
    publicPath: "/"
  },
  // チャンク（共通ファイル）のまとめ先。
  optimization: {
    splitChunks: {
      name: "bundle",
      chunks: "initial",
    },
  },
  devtool: "source-map",
  // webpack-dev-server(ローカルデバッグサーバ)起動設定
  devServer: {
    // ポート
    port: "8080",
    // オートリフレッシュを有効化
    liveReload: true,
    // Hot Module Replacement(非同期ファイル置き換え)を（明示）
    hot: false,
    // ブラウザ開かせる（リモート開発の場合効かない）
    open: true,
    historyApiFallback: {
      //indx.htmlの変更
      // index: path.join("/", "html","/MachineManageWeb.html"),
      rewrites: [{ from: /^\/*/, to: '/html/MachineManageWeb.html' }],
      // rewrites: [{ from: /\//, to: 'html/MachineManageWeb.html'}],
    },
    // webpack外のリソースを指定する。
    static: [
      {
        directory: path.join(__dirname, "dist", "public"),
        publicPath: "/public",
        // serveIndex: true
      },
    ]
  },
  module: {
    rules: [
      // {
      // それぞれのローダーに対して一度だけ行使
      // oneOf: [
      // react設定
      {
        //対象ファイルはjsとjsx
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "minify",
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "entry",
                    corejs: 3
                  }
                ],
                "@babel/preset-react",
                // "@babel/preset-typescript"
              ],
              sourceMap: true,
            },
          },
          {
            loader: "ts-loader"
          }
        ],
        exclude: /node_modules/,
      },
      // css設定
      {
        test: /\.(|sass|scss|css)$/,
        use: [
          // MiniCssExtractPluginのローダー
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
            }
          },
          // css-loaderの設定（cssのバンドル）
          {
            loader: "css-loader",
            options: {
              // url()メソッドの取り込み禁止
              url: false,
              //ソースマップ利用有無
              sourceMap: false,
            },
          },
          // sass-loaderの設定（sass→css変換）
          {
            loader: "sass-loader",
            options: {
              // コンパイラにdart-sass優先
              implementation: require("dart-sass"),
              sassOptions: {
                fiber: require("fibers"),
              },
              sourceMap: false,
            },
          },
        ],
        exclude: /node_modules/,
      },
      // svg読み込み(要検証)
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              encording: "utf8",
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$i/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
      // ],
      // },
    ],
  },
  //プラグイン設定
  plugins: [
    // new HtmlWebpackPlugin({
    //   inject: "body",
    //   template: "./src/html/index.html",
    //   filename: path.join("html", `index.html`),
    //   chunks: [],
    // }),
    // 不要なjsの排除
    new RemoveEmptyScripts(),
    // // cssのファイル出力設定
    new MiniCssExtractPlugin({
      // ハッシュ値付加
      filename: path.join("css", "[name]-[chunkhash:8].css"),
      chunkFilename: "bundle.css",
    }),
    // ビルドのクリーン
    new CleanWebpackPlugin(),
  ],
  // import名前解決のルール
  resolve: {
    plugins: [
      new TsconfigPathsPlugin()
    ],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss", ".sass"],
  },
  stats: {
    children: true,
  },
};

// -----------------------------------------------------------

const src = "./src/";
const dist = "./dist/";

// javascript
const srcJs = src + "js";

// jsファイルentry化
glob
  .sync("*.[jt]sx", {
    cwd: srcJs,
  })
  .map((key) => {
    const entryName = key.substring(0, key.lastIndexOf("."));
    entries[entryName] = path.resolve(srcJs, key);
    console.log(entryName);

    // htmlカスタムできる
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/html/template.html",
      filename: path.join("html", `${entryName}.html`),
      chunks: [entryName],
    })
    );
  });

console.log(entries);
// -----------------------------------------------------------

module.exports = webpackConfig;