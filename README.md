<h1 align="center" style="border-bottom: none;">onvif-rx</h1>
<h3 align="center">Interact with ONVIF cameras and devices using TypeScript and RXJS.</h3>
<p align="center">
  <a href="https://circleci.com/gh/patrickmichalina/onvif-rx">
    <img alt="circeci" src="https://circleci.com/gh/patrickmichalina/onvif-rx.svg?style=shield">
  </a>
  <!-- <a href="https://codeclimate.com/github/patrickmichalina/onvif-rx/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/f40c9fff2927e49c3ea2/test_coverage" />
  </a>
  <a href="https://codeclimate.com/github/patrickmichalina/onvif-rx/maintainability">
    <img alt="codeclimate" src="https://api.codeclimate.com/v1/badges/f40c9fff2927e49c3ea2/maintainability">
  </a> -->
</p>
<p align="center">
  <a href="https://greenkeeper.io">
    <img alt="greenkeeper" src="https://badges.greenkeeper.io/semantic-release/semantic-release.svg">
  </a>
  <a href="https://david-dm.org/patrickmichalina/onvif-rx">
    <img alt="greenkeeper" src="https://david-dm.org/patrickmichalina/onvif-rx/status.svg">
  </a>
  <a href="https://david-dm.org/patrickmichalina/onvif-rx?type=dev">
    <img alt="greenkeeper" src="https://david-dm.org/patrickmichalina/onvif-rx/dev-status.svg">
  </a>
</p>
<p align="center">
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
  <a href="https://www.npmjs.com/package/onvif-rx">
    <img alt="npm latest version" src="https://img.shields.io/npm/v/onvif-rx/latest.svg">
  </a>
</p>

![0930282e-7f18-11e6-948a-00546393fd93](https://cloud.githubusercontent.com/assets/6701211/25729535/89c26d18-30fb-11e7-8701-af3bcdda410f.png)

## Installation
This package is designed to be run in both the browser and node environments.
```sh
npm i onvif-rx
```

## Browser Usage
```html
<head>
 <!-- simplest method, gets the latest version, but not minifed -->
 <script src="https://unpkg.com/onvif-rx"></script>
 
 <!-- RECOMMENDED: use a specific version to avoid a redirect and get a minified version --> 
 <script src="https://unpkg.com/onvif-rx@x.x.x/dist/onvif-rx-umd.min.js"></script>
</head>
```

```js
// TODO: config and example
```

## Usage
The library is designed to be used in 2 distinct ways.
- Managed - you construct a manged device using service URL and username/password combo. This makes running commands painless.
- Ad Hoc - you can call methods individually with different username/passwords if needed.

### Managed Usage
```ts
import { createManagedDeviceInNode } from 'onvif-rx'

const device = createManagedDeviceInNode({
  deviceUrl: 'http://192.168.1.11/onvif/device_service',
  password: 'admin',
  username: '1234'
})

device.api.Device.GetUsers()
  .toPromise()
  .then(res=> {
    res.match({
      ok: console.log, // successful response object
      fail: r => console.log(r.status, r.statusMessage) // request failure object
    })
  }) 
```

### Ad Hoc Usage
```ts
import { Device } from 'onvif-rx'

const device = createManagedDeviceInNode({
  deviceUrl: 'http://192.168.1.11/onvif/device_service',
  password: 'admin',
  username: '1234'
})

Device.GetUsers()
  .run({}) // requires config
  .toPromise()
  .then(res=> {
    res.match({
      ok: console.log, // successful response object
      fail: r => console.log(r.status, r.statusMessage) // request failure object
    })
  }) 
```