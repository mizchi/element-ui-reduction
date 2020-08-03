# Vue Element UI Reduction Test

## What's this?

Measure babel-plugin-component effect.

### Pattern A

```js
import Vue from "vue";
import Element from "element-ui";

Vue.use(Element);
```

### Pattern B

```js
import { Select, Link } from "element-ui";
Vue.component(Select.name, Select);
Vue.component(Button.name, Button);
```

## Result

```
-rw-r--r--   1 mizchi  staff    28K  8  3 16:24 313f7dacf2076822059d2dca26dedfc6.woff
-rw-r--r--   1 mizchi  staff    55K  8  3 16:24 4520188144a17fb24a6af28a70dae0ce.ttf
-rw-r--r--   1 mizchi  staff   161K  8  3 16:24 main-redux.js
-rw-r--r--   1 mizchi  staff   855K  8  3 16:24 main.js
```

## Conclusion

`-611kb`

## LICENSE

MIT
