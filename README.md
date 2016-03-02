# study-virtual-dom

virtual-dom click counter sample

# 動機

 * Reactがでかいなぁと思って小さい実装を試す
 * 公式のサンプルにイベント周りの例がなかったので

# 勉強した

 * virtual-dom
 * とりあえずEvent emitterでカウントアップ

# 思った

 * hyperscriptもなかなか大変だし、なんやかんやReactの方が楽なんだろう
 * bundle.jsが143kb（Reactだと667kb）とそれなりにサイズがあり、ペイしてるのかなぁ
 * むしろなんでReactでこんなに肥大化してしまうのか調べるのが先決かも（React単体で60kb程度とか言ってる人もいるし）

# 追記

 * サイズの件は、react.js（非圧縮・コメント山盛り）がbundle.jsにインクルードされているためだった。
 * ので、uglifyfyの導入で解決できた。大体1/3くらいのサイズになる。
 * `NODE_ENV=production browserify -g uglifyify -t [ babelify --presets [ react ] ] main.jsx -o bundle.min.js`
 * サイズを気にするなら、下記の点をチェック
  * sourcemap出しっぱなしになってない？
  * NODE_ENV=productionでデバッグ用のコードが削減されるらしい。

# まだやってない

 * クラス化すべきだよなぁ
 * コンポーネント的に使うならWidgetを実装したほうがいいのか？
