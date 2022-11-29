# hellas

[![NPM version](https://img.shields.io/npm/v/hellas?color=a1b858&label=)](https://www.npmjs.com/package/hellas)

# Usage

```bash
npm i hellas
# or
yarn add hellas
# or
pnpm install hellas
```

## isAfm

Greek Tax Identification Number Validator

Έλεγχος ορθότητας Α.Φ.Μ

```js
import { isAfm } from "hellas";

isAfm("123456789"); // false
```

## isAmka

Greek Social Security Number Validator

Έλεγχος ορθότητας Α.Μ.Κ.Α

```js
import { isAmka } from "hellas";

isAmka("123456789"); // false
```

## isPostalCode

Greek Postal Code Validator

```js
import { isPostalCode } from "hellas";

isPostalCode("12333"); // true
```

## isVehiclePlate

Greek Vehicle Plate Validator

```js
import { isVehiclePlate } from "hellas";

isVehiclePlate("ΧΑΟ-2222"); // true
```

## License

[MIT](./LICENSE) License © 2022 [Robert](https://github.com/treboryx)
