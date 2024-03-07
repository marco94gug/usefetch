## useFetch

### Features

- Make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser
- Automatic transforms for [JSON](https://www.json.org/json-en.html) data

## Installing

### Package manager

Using npm:

```bash
$ npm install @fishdeveloper/usefetch
```

Using yarn:

```bash
$ yarn add @fishdeveloper/usefetch
```

Using pnpm:

```bash
$ pnpm add @fishdeveloper/usefetch
```

Once the package is installed, you can import the library using `import` approach:

```js
import { useFetch } from "@fishdeveloper/usefetch";
```

## Example

```js
import { useFetch } from "@fishdeveloper/usefetch";

useFetch("todos/1", {
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "X-Custom-Header": "foobar" },
}).then((res) => console.log(res));

// output = {
//     data: {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut autem",
//         "completed": false
//     }
// }
```
