## [2.8.0] - 2025-12-09

### Features

- 354ef03 2025-12-05 feat: update useUat flag to environment (#545) by jolesa97@gmail.com
- 09fb944 2025-12-04 feat: filter bin info based on user input (#546) by ddiestras@gmail.com

## [2.7.0] - 2025-11-18

### Features

- 8ddcee8 2025-11-17 feat: upgrade react elements to react 19 and fix test errors (#544) by ddiestras@gmail.com

## [2.6.0] - 2025-11-10

### Features

- c43daaa 2025-11-07 feat: adding option to configure max elapsed for card expiration date (#543) by 62716969+washluis-alencar@users.noreply.github.com

## [2.5.0] - 2025-11-03

### Features

- 6aa85b9 2025-10-30 feat: improving error handling for token encryption (#538) by 62716969+washluis-alencar@users.noreply.github.com

### Bug Fixes

- 693f6e0 2025-11-03 fix: improves npm release error handling (#540) by kevin@basistheory.com
- 8e67f12 2025-10-30 fix: change publish command from yarn to npm (#539) by kevin@basistheory.com
- 0af4d95 2025-10-29 fix: adds trusted publishing (#537) by kevin@basistheory.com

## [2.3.0] - 2025-10-08

### Features

- 7848672 2025-10-08 feat: add co-badged support to the CardNumberElement (#532) by ddiestras@gmail.com
- 52e16a7 2025-10-03 feat: send device info in requests (#526) by ddiestras@gmail.com

## [2.2.4] - 2025-10-02

### Bug Fixes

- d1a337b 2025-10-02 fix: network error message grammar (#531) by djejaquino@users.noreply.github.com

## [2.2.3] - 2025-10-01

### Bug Fixes

- 9944676 2025-10-01 fix: focus service and style (#528) by kevin@basistheory.com

## [2.2.2] - 2025-09-17

### Bug Fixes

- 0a6381b 2025-09-17 fix: telemetry env var names (#524) by kevin@basistheory.com

## [2.2.1] - 2025-09-16

### Bug Fixes

- f548429 2025-09-16 fix(font-manager): define safe font sources before loading (#522) by kevin@basistheory.com

## [2.2.0] - 2025-09-12

### Features

- 17f206f 2025-09-12 feat: add copy button to react elements (#521) by kevin@basistheory.com

## [2.1.0] - 2025-09-11

### Features

- fdfaabf 2025-09-11 feat: adds copy button (#519) by brian.gonzalez@basistheory.com
- 6503dd1 2025-09-08 feat: add support for domain whitelabeling (#510) by kevin@basistheory.com

## [2.0.0] - 2025-09-08

### Breaking Changes

- eb651be 2025-08-29 feat!: remove material ui (#478) by kevin@basistheory.com

### Features

- 5f3b347 2025-09-03 feat: collect device info (#516) by kevin@basistheory.com
- c7f606d 2025-09-01 feat: allow style customization of elements container (#518) by kevin@basistheory.com
- 97264fd 2025-08-21 feat: remove axios and btjs (#495) by kevin@basistheory.com

### Bug Fixes

- 8dbb18a 2025-08-29 fix: make input field always transparent (#517) by kevin@basistheory.com

## [1.24.2] - 2025-08-21

### Bug Fixes

- dd34449 2025-08-21 fix: exclude additional information without a brand attribute (#507) by ddiestras@gmail.com

## [1.24.1] - 2025-08-20

### Bug Fixes

- 0ed2574 2025-08-19 fix: card element selectedNetwork validation error (#494) by kevin@basistheory.com

## [1.24.0] - 2025-08-18

### Features

- f26e0d3 2025-08-18 feat: add brand network selector to card element (#490) by ddiestras@gmail.com

### Bug Fixes

- 8ca03dd 2025-08-14 fix: abortSignal polyfill and card element autocomplete values (#491) by kevin@basistheory.com

## [1.23.1] - 2025-08-11

### Bug Fixes

- 9f8f58f 2025-08-11 fix: override chrome autofill styles (#487) by kevin@basistheory.com

## [1.23.0] - 2025-08-07

### Features

- fa3d978 2025-08-07 feat: setup new s3 deploys (#486) by mstrisoline@users.noreply.github.com
- 2e2f754 2025-08-07 feat: add ability to do bin lookups for cards for web elements (#484) by ddiestras@gmail.com

### Bug Fixes

- 1ee81e5 2025-07-30 test(tokens service): fix integration test (#482) by kevin@basistheory.com

### Chores

- 0f7c5f7 2025-08-07 chore: invalid param for new s3 bucket (#489) by mstrisoline@users.noreply.github.com
- 754fb0a 2025-08-07 chore: mised dev actons permissoins for aws auth (#488) by mstrisoline@users.noreply.github.com
- 2bc55dc 2025-08-06 chore: disable r2 dns setup (#485) by mstrisoline@users.noreply.github.com

## [1.22.2] - 2025-07-29

### Bug Fixes

- 528c197 2025-07-29 fix: release (#480) by kevin@basistheory.com
- a9f3fae 2025-07-29 fix: revert latest (#479) by kevin@basistheory.com

## [1.22.1] - 2025-07-29

### Bug Fixes

- a229582 2025-07-22 fix: do not snakeCase/camelCase tokenize (#477) by kevin@basistheory.com

## [1.22.0] - 2025-07-18

### Features

- 0b69d0e 2025-07-18 feat: add uat deployment (#472) by mstrisoline@users.noreply.github.com

### Bug Fixes

- c96c83f 2025-07-18 chore: fix uat tf action (#473) by mstrisoline@users.noreply.github.com

### Chores

- 623272f 2025-07-18 chore: install rclone action (#475) by mstrisoline@users.noreply.github.com
- 73118ce 2025-07-18 chore: ensure s3 elements deploy before r2 and tf (#474) by mstrisoline@users.noreply.github.com
- ecfa61a 2025-07-17 chore: remove tfstate from deploy to cdn script (#471) by kevin@basistheory.com
- 4537f72 2025-07-17 chore: gracefully handle publishing to existing version (#470) by kevin@basistheory.com
- 6e95217 2025-07-17 chore: update generate-changelog-and-update-package-version.sh (#469) by kevin@basistheory.com
- d729b30 2025-07-17 chore: set up prod deploy, cleanup workflows (#468) by mstrisoline@users.noreply.github.com

## [1.21.0] - 2025-07-17

### Features

- e66f088 2025-07-17 feat: make network check opt-in (#466) by kevin@basistheory.com
- 502dfa2 2025-07-16 feat: add parallel r2 deploy (#465) by mstrisoline@users.noreply.github.com

### Chores

- 5f96c0e 2025-07-15 chore: updated tf (#464) by mstrisoline@users.noreply.github.com
- a22cbd3 2025-07-15 chore: init tf r2 (#463) by mstrisoline@users.noreply.github.com

## [1.20.0] - 2025-07-15

### Features

- 4ac2b5e 2025-07-15 feat: add useUat flag (#461) by kevin@basistheory.com
- b89d5d8 2025-07-08 feat: bundle optimizations (#449) by kevin@basistheory.com
- 606efff 2025-07-07 feat: bundle optimization (#448) by kevin@basistheory.com

### Bug Fixes

- 2c8cc6c 2025-07-15 fix: port set from hosted (#462) by kevin@basistheory.com
- 60b2dbd 2025-07-14 fix: remove resource hints from client (#460) by kevin@basistheory.com
- 8ed50c3 2025-07-11 fix: `set` replacement edge cases (#459) by kevin@basistheory.com

### Chores

- a80b10e 2025-07-10 chore: remove btjs from client and messages (#454) by kevin@basistheory.com

## [1.19.0] - 2025-07-07

### Features

- 6a01b84 2025-07-03 feat: returning the token alias when encrypting multiple tokens (#451) by 62716969+washluis-alencar@users.noreply.github.com
- 53553a2 2025-06-26 feat: allow encrypt token with plaintext by 62716969+washluis-alencar@users.noreply.github.com

### Chores

- 0f92346 2025-07-07 chore: allow devs to purge the dev env cache via workflow (#452) by mstrisoline@users.noreply.github.com

## [1.18.0] - 2025-06-23

### Features

- d24a772 2025-06-18 feat: add `_debug` to `tokens`, `tokenize` and `tokenIntents` (#443) by kevin@basistheory.com

### Bug Fixes

- 7c2594a 2025-06-19 fix: favicon not found and supress findDomNode error from styling library (#445) by kevin@basistheory.com
- ae48d23 2025-06-16 chore: fix integration tests (#440) by kevin@basistheory.com
- 0013377 2025-06-16 fix: improve build output (#434) by kevin@basistheory.com

### Chores

- 8825a3e 2025-06-23 chore: restore dev deploy action (#447) by kevin@basistheory.com
- c5c38ad 2025-06-23 chore: reverts vite migration (#446) by kevin@basistheory.com
- 5e1fc1d 2025-06-17 chore: make integration tests run (#442) by kevin@basistheory.com
- 58ed8ea 2025-06-16 chore: update version import path (#441) by kevin@basistheory.com

## [1.17.0] - 2025-06-16

### Features

- a09d6a9 2025-06-16 feat: add \_debug to `BasisTheoryApiError` (#439) by kevin@basistheory.com

## [1.16.0] - 2025-06-10

### Features

- c47500b 2025-06-10 feat(eng-8293): fix token encryption (#438) by 62716969+washluis-alencar@users.noreply.github.com
- d44d028 2025-06-09 feat: add encrypt method (#435) by 62716969+washluis-alencar@users.noreply.github.com

## [1.15.0] - 2025-06-09

### Features

- 6569baf 2025-06-06 feat(eng-8603): export types from /common (#436) by 62716969+washluis-alencar@users.noreply.github.com

## [1.14.1] - 2025-06-04

### Bug Fixes

- 34820f1 2025-06-03 fix: add iframe title type to react elements (#433) by kevin@basistheory.com

## [1.14.0] - 2025-06-03

### Features

- b3f5c0c 2025-06-03 feat: add custom iframe title (#431) by kevin@basistheory.com
- f458627 2025-05-29 feat: detect when network issues prevent elements from loading (#429) by kevin@basistheory.com
- 7c49687 2025-05-29 feat(card element): add support for autocomplete (#428) by kevin@basistheory.com

### Bug Fixes

- 0fa1fc1 2025-05-30 fix: improve net check for mobile devices on slow networks (#430) by kevin@basistheory.com

## [1.13.1] - 2025-05-27

### Bug Fixes

- 99b9550 2025-05-26 fix: surface validate in all elements (#427) by kevin@basistheory.com
- 2d77b78 2025-05-26 fix: re-export card types (#426) by kevin@basistheory.com

## [1.13.0] - 2025-05-13

### Features

- 9e76de8 2025-05-13 feat: add validate to text element (#425) by kevin@basistheory.com
- 57126ea 2025-05-08 feat: add manual validation for split card elements (#423) by kevin@basistheory.com

## [1.12.2] - 2025-05-08

### Bug Fixes

- ea9a43c 2025-05-08 fix: remove false positive valueResolutionFailure (#424) by kevin@basistheory.com

## [1.12.1] - 2025-04-24

### Bug Fixes

- 7e60786 2025-04-24 fix: patch BTJS/axios (#422) by kevin@basistheory.com

## [1.12.0] - 2025-04-24

### Features

- 1e166f1 2025-04-23 feat(CardElement): add stack layout for mobile views (#421) by kevin@basistheory.com

## [1.11.8] - 2025-04-21

### Bug Fixes

- 1e22daa 2025-04-18 fix: remove process var from logging (#420) by kevin@basistheory.com

## [1.11.7] - 2025-04-16

### Bug Fixes

- 0d471cd 2025-04-16 fix: add cardDetails to enrichments (#419) by kevin@basistheory.com

## [1.11.6] - 2025-04-09

### Bug Fixes

- 5d23abe 2025-04-09 fix: remove dependency on env variables (#418) by kevin@basistheory.com

## [1.11.5] - 2025-04-08

### Bug Fixes

- e89c349 2025-04-04 fix: text element validation and elements masking (#415) by kevin@basistheory.com
- f4ef076 2025-04-03 fix: avoid dupped elementWindows (#416) by kevin@basistheory.com

## [1.11.4] - 2025-03-26

### Bug Fixes

- 50b67d0 2025-03-25 fix: move export to its own file (#411) by kevin@basistheory.com
- 0510ce8 2025-03-25 fix: export web-elements (#410) by kevin@basistheory.com
- a5b6d8f 2025-03-25 fix(text element): expose validateOnChange (#408) by kevin@basistheory.com

### Chores

- 8203052 2025-03-25 chore: let parcel handle type generation (#414) by kevin@basistheory.com
- 507db5c 2025-03-25 chore: split type declaration config from build (#413) by kevin@basistheory.com
- 7fccd68 2025-03-25 chore: upgrade ts (#412) by kevin@basistheory.com

## [1.11.3] - 2025-03-21

### Bug Fixes

- 0ec13fd 2025-03-21 fix: types path (#407) by kevin@basistheory.com

## [1.11.2] - 2025-03-21

### Bug Fixes

- 3bb6965 2025-03-20 fix: data-element mounting (#406) by kevin@basistheory.com

## [1.11.1] - 2025-03-20

### Bug Fixes

- 46b4c73 2025-03-20 fix: export web elements from `types` path (#405) by kevin@basistheory.com

## [1.11.0] - 2025-03-20

### Features

- 5e3c058 2025-03-20 feat: re-export types from web elements (#404) by kevin@basistheory.com

## [1.10.0] - 2025-03-18

### Features

- be57c49 2025-03-18 feat: enable same origin api calls by default (#401) by kevin@basistheory.com
- 440fd31 2025-03-13 feat: add sri hash generation for static iframe assets (#398) by kevin@basistheory.com

### Bug Fixes

- be4129d 2025-03-18 fix: elements init options ordered incorrectly (#403) by kevin@basistheory.com
- 6c0271f 2025-03-18 fix: patch axios (#402) by kevin@basistheory.com

## [1.9.0] - 2025-03-13

### Features

- 4e13acd 2025-03-12 feat: generate versioned SRI for web-elements loader (#399) by kevin@basistheory.com

### Bug Fixes

- c148762 2025-03-13 fix: add dd rum url to csp (#400) by kevin@basistheory.com

### Chores

- dfc875d 2025-03-10 chore: add Elements PCI inventory script to PR check (#397) by brandon@basistheory.com

## [1.8.0] - 2025-03-07

### Features

- 0a14886 2025-03-07 feat(eng-8106): adding issuerCountry field into token intent model (#396) by 62716969+washluis-alencar@users.noreply.github.com

## [1.7.3] - 2025-03-07

### Bug Fixes

- ccf800e 2025-03-05 fix: revert createServiceRequestPayload by kevin@basistheory.com

## [1.7.2] - 2025-02-20

### Bug Fixes

- 992b619 2025-02-20 fix(react-elements): sync version upon release (#394) by kevin@basistheory.com

## [1.7.1] - 2025-02-20

### Bug Fixes

- ff9923a 2025-02-19 fix: update package version upon release (#393) by kevin@basistheory.com

## [1.7.0] - 2025-02-19

### Features

- b2dd527 2025-02-19 feat: improve logging when retrieving values from unmounted components (#391) by kevin@basistheory.com
- 4b95046 2025-02-18 feat: add more logs around element value resolution/timeouts (#390) by kevin@basistheory.com
- 73670c3 2025-02-13 feat: add react-elements (#386) by kevin@basistheory.com

## [1.6.0] - 2025-02-11

### Features

- 95bd0a5 2025-02-11 feat: adds sessions.create (#385) by kevin@basistheory.com

### Bug Fixes

- e692cd8 2025-02-11 fix: fix double log (#387) by lucas@basistheory.com

## [1.5.0] - 2025-02-06

### Features

- d9c1408 2025-02-04 feat: adds versioning (#379) by kevin@basistheory.com

### Bug Fixes

- 429a5c8 2025-02-04 test: update playwright fixtures (#382) by kevin@basistheory.com
- d609a6a 2025-02-04 fix: deploy versioned client/hosted (#381) by kevin@basistheory.com

## [1.4.0] - 2025-02-03

### Features

- 1a231c7 2025-01-31 feat: add debug object (#380) by lucas@basistheory.com

## [1.3.1] - 2025-01-29

### Bug Fixes

- 94b96cf 2025-01-29 fix: add status to detokenize response msg (#378) by lucas@basistheory.com

## [1.3.0] - 2025-01-28

### Features

- 77f1130 2025-01-28 feat: logging improvements (#372) by lucas@basistheory.com

## [1.2.5] - 2025-01-27

### Bug Fixes

- 32961d4 2025-01-27 fix: sync up with last release (#376) by kevin@basistheory.com

## [1.2.4] - 2025-01-27

### Features

- 9b65521 2025-01-22 feat: port logging from btjs (#363) by kevin@basistheory.com
- 1e1e956 2025-01-21 feat: deploy web-elements to cdn and npm (#355) by kevin@basistheory.com
- f93ff0a 2025-01-16 feat: bump js sdk (#357) by lucas@basistheory.com
- 53424ce 2025-01-14 feat: avoid logger conflicts (#356) by lucas@basistheory.com
- f6a7f10 2025-01-14 feat: add useSameOriginApi prop (#354) by lucas@basistheory.com
- 836e648 2025-01-13 feat: logging overhaul (#349) by lucas@basistheory.com
- 96ed3bd 2025-01-09 feat: surface metadata in onblur event (#348) by kevin@basistheory.com
- d6f63e7 2024-12-23 feat: toggle telemetry (#345) by kevin@basistheory.com

### Bug Fixes

- 57a6040 2025-01-23 fix: web-elements version generation (#367) by kevin@basistheory.com
- 31b4a10 2025-01-23 fix: adds gh token to prod workflow (#366) by kevin@basistheory.com
- b6276df 2025-01-23 fix: rename web-elements package (#365) by kevin@basistheory.com
- 7725c5f 2025-01-21 fix: deploy loader instead of client (#362) by kevin@basistheory.com
- 06808a4 2025-01-20 fix: add html extension for deployed hosted elements (#361) by lucas@basistheory.com
- c10758f 2025-01-17 fix: bump btjs to fix error interceptor (#359) by lucas@basistheory.com
- fc7cdca 2025-01-17 fix: add datadog http intake to csp (#358) by lucas@basistheory.com
- d97e813 2025-01-14 fix: prevent overriding log service value (#353) by lucas@basistheory.com
- 26e89dc 2025-01-13 fix: reverts versioning (#352) by kevin@basistheory.com
- 1a05850 2025-01-10 fix: version paths across elements client and hosted (#351) by kevin@basistheory.com
- 827e1b1 2025-01-10 ci: fix pathing (#350) by kevin@basistheory.com
- bcffe10 2025-01-09 fix: patch axios (#346) by kevin@basistheory.com
- 1a25ebe 2025-01-09 fix: patch express and body-parser (#347) by kevin@basistheory.com
- af85c64 2025-01-24 fix: update CHANGELOG.md (#371) by kevin@basistheory.com
- cc320fa 2025-01-24 fix: double the timeout for retrieving elements values (#370) by lucas@basistheory.com
- 3688baa 2025-01-24 fix: log additional details (#369) by kevin@basistheory.com

### Chores

- 955d7d4 2025-01-10 chore: deploy web-elements (#343) by kevin@basistheory.com
- Deploy web-elements package
