# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.11.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.10.0...v0.11.0) (2022-07-21)


### ⚠ BREAKING CHANGES

* Added TimePicker component
* Added DatePicker component
* Added DateUtility

### Features

* Added "date-fns" and "react-datepicker" ([55f1997](http://bitbucket.org/gotamedia/fluffy/commit/55f1997d6a5aca6237f2fe9b1f94e4f682438421))
* Added DatePicker component ([857d95c](http://bitbucket.org/gotamedia/fluffy/commit/857d95c54280503ddda9c7b2da64365c7c413564))
* Added DateUtility ([25b8502](http://bitbucket.org/gotamedia/fluffy/commit/25b85025d4f9a6c0775e959878d08cfb70d38306))
* Added TimePicker component ([93210b3](http://bitbucket.org/gotamedia/fluffy/commit/93210b3e232bd097c701bd77db4f0e1617e730e3))


### Bug Fixes

* Minor fixes: stories, types and typo ([ff66166](http://bitbucket.org/gotamedia/fluffy/commit/ff6616601bb243691bab1471395fe8c211ce55b3))

## [0.10.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.9.1...v0.10.0) (2022-07-19)


### ⚠ BREAKING CHANGES

* Added SwitchButton component
* Added Radio component

### Features

* Added Radio component ([23648b8](http://bitbucket.org/gotamedia/fluffy/commit/23648b8f24677a436cfa5c0379c4dd503ef29233))
* Added SwitchButton component ([604f35e](http://bitbucket.org/gotamedia/fluffy/commit/604f35e9edb77b2dfe6f64c5529b262ef8ac33d6))


### Bug Fixes

* **style:** Updated Checkbox disabled style ([bdb2f6c](http://bitbucket.org/gotamedia/fluffy/commit/bdb2f6cf407ee98a2eceaa4dd30286a1955656f2))
* **style:** Updated Checkbox hove/active style ([559f84e](http://bitbucket.org/gotamedia/fluffy/commit/559f84e84d3eb3db6c043d57c5f497bf7221dc53))
* Updated Checkbox checked prop and disabled style ([3314b67](http://bitbucket.org/gotamedia/fluffy/commit/3314b6797f74c0c97c5cdc1d7e4eeeaee26dd544))

### [0.9.1](http://bitbucket.org/gotamedia/fluffy/compare/v0.9.0...v0.9.1) (2022-07-18)


### Features

* Added label to Input/Textarea ([c816715](http://bitbucket.org/gotamedia/fluffy/commit/c816715f99cb639680f3d3153a6e27c99456fb47))


### Bug Fixes

* **story:** Updated Card's story names ([7054965](http://bitbucket.org/gotamedia/fluffy/commit/7054965dad1dc0dff49719716dd71fc6dfb1a786))
* **story:** Updated icon list story ([b0aa7ea](http://bitbucket.org/gotamedia/fluffy/commit/b0aa7eaf5b323c2b97af85b4853dbd6a83672ad7))
* **style:** Updated checkmark-circle check color ([ef1a19c](http://bitbucket.org/gotamedia/fluffy/commit/ef1a19c57deb8627c31596661f9270f0e936d0d5))

## [0.9.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.8.2...v0.9.0) (2022-07-18)


### ⚠ BREAKING CHANGES

* Supported Button/IconButton in InputGroup

### Features

* Supported Button/IconButton in InputGroup ([1c35f34](http://bitbucket.org/gotamedia/fluffy/commit/1c35f34aa3ee2429339201b2411141b39f11d2e9))


### Bug Fixes

* **style:** Updated Button/IconButton/Input/InputGroup sizes/variants ([ae0c55f](http://bitbucket.org/gotamedia/fluffy/commit/ae0c55f7c09a91c1fa18b8c8c2bd608f18ccf330))
* **style:** Updated Input style ([20c09fa](http://bitbucket.org/gotamedia/fluffy/commit/20c09fab46df7ec2e97d6c1e672b3fe4dbb3ea7e))
* **style:** Updated InputGroup sizes ([2941f7b](http://bitbucket.org/gotamedia/fluffy/commit/2941f7b4ba0dd5cc374c06414a74757866b78825))
* **style:** Updated Textarea variants to match Input ([cb6e15b](http://bitbucket.org/gotamedia/fluffy/commit/cb6e15b1d0c6c963d3452cf3f5b68b258da48344))
* Updated imports for sizes/variants ([ae58fd2](http://bitbucket.org/gotamedia/fluffy/commit/ae58fd248d75d808c27b25e8aa3a73d49ed0f18c))

### [0.8.2](http://bitbucket.org/gotamedia/fluffy/compare/v0.8.1...v0.8.2) (2022-07-15)


### Features

* Added IconButton component ([012682d](http://bitbucket.org/gotamedia/fluffy/commit/012682d54debd67e02362170e83bc0f6f2081c2b))


### Bug Fixes

* Alert variant typo ([a8b97a8](http://bitbucket.org/gotamedia/fluffy/commit/a8b97a897ef0fb20eb14ea15e6c086bcbb446773))
* Fixed Alert variant type ([f01d842](http://bitbucket.org/gotamedia/fluffy/commit/f01d8428c9063d7182e1e5a9399d95da6e6a5bd6))

### [0.8.1](http://bitbucket.org/gotamedia/fluffy/compare/v0.8.0...v0.8.1) (2022-07-04)

## [0.8.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.49...v0.8.0) (2022-07-04)


### ⚠ BREAKING CHANGES

* Removed Rollup and added a custom build script to compile Fluffy and each module individually to reduce bundle size of the app who utilising Fluffy

### Bug Fixes

* Better Icon rendering to allow server-side to render the requested icon ([54c15c9](http://bitbucket.org/gotamedia/fluffy/commit/54c15c9ceb45c330a5df9bdbdb761b413dfc23fd))
* **type:** Updated Paper children type ([8619cf2](http://bitbucket.org/gotamedia/fluffy/commit/8619cf227de79f73e05d496293e3185604dde68c))


### ci

* Removed Rollup and added a custom build script to compile Fluffy and each module individually to reduce bundle size of the app who utilising Fluffy ([269f903](http://bitbucket.org/gotamedia/fluffy/commit/269f903ae82a5b203487f51e4eb828e7e0353b79))

### [0.7.49](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.48...v0.7.49) (2022-06-29)

### [0.7.48](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.47...v0.7.48) (2022-06-21)


### Bug Fixes

* **style:** Fixed Card's Image style for small views ([c62c3e0](http://bitbucket.org/gotamedia/fluffy/commit/c62c3e0f72dbff9fe2a232a9cb59812e76bc0a1f))

### [0.7.47](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.46...v0.7.47) (2022-06-17)


### Features

* **style:** Added compact prop to Card component to render in compact view ([05308f1](http://bitbucket.org/gotamedia/fluffy/commit/05308f16729e0a718dacf03db40ea52b62dd1adc))
* **style:** Added vertical prop to Card component to force rendering in a compact vertical card ([52a8c59](http://bitbucket.org/gotamedia/fluffy/commit/52a8c59fe1d4899193ea56515695668150c2a14e))

### [0.7.46](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.45...v0.7.46) (2022-06-14)


### Features

* Added Portal component ([905420b](http://bitbucket.org/gotamedia/fluffy/commit/905420b94433b99e2c45bf3e75e759068b1a9acc))
* Added useMounted hook ([2dc3e86](http://bitbucket.org/gotamedia/fluffy/commit/2dc3e86890211c3122f6de9aeefa74214808487b))

### [0.7.45](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.44...v0.7.45) (2022-06-03)


### Features

* Added useScroll hook ([b6d0cc5](http://bitbucket.org/gotamedia/fluffy/commit/b6d0cc57a7c61a92357bd3cf3b10d5fc720a3759))

### [0.7.44](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.43...v0.7.44) (2022-06-01)


### Features

* added Card component ([09122e0](http://bitbucket.org/gotamedia/fluffy/commit/09122e0de213e68deec9c139746b85b238aba382))
* added CardParagraph component ([a2a6f8a](http://bitbucket.org/gotamedia/fluffy/commit/a2a6f8a0f82364c681ffbd8c9379a48267c9d578))
* added Skeleton component ([45f3e55](http://bitbucket.org/gotamedia/fluffy/commit/45f3e5573c3274a98ffcafba6c5fdadf23931919))


### Bug Fixes

* exported Skeleton/Card components ([1c85644](http://bitbucket.org/gotamedia/fluffy/commit/1c85644519acf8dfb79b4ab985c8dbba2baf0142))
* exported ThemeContext along with ThemeProvider ([9d51bfe](http://bitbucket.org/gotamedia/fluffy/commit/9d51bfe2e91bd112844f1164a5a3a33c75ce5d46))

### [0.7.43](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.42...v0.7.43) (2022-05-20)


### Features

* added ButtonGroup component ([33597b4](http://bitbucket.org/gotamedia/fluffy/commit/33597b496ad3fa60aa5537739e25bbc42199ea0c))
* added useful hooks/utils ([c6f8308](http://bitbucket.org/gotamedia/fluffy/commit/c6f830838de84da0fe63b5952be8666752b5ec9a))


### Bug Fixes

* exported hooks ([3a3b168](http://bitbucket.org/gotamedia/fluffy/commit/3a3b168930859f4b7d00515084b0a77f4d292616))

### [0.7.42](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.41...v0.7.42) (2022-05-17)


### Features

* added Maps component ([41def9d](http://bitbucket.org/gotamedia/fluffy/commit/41def9d6cea01b88669b037e25a7a476c1ef47bc))


### Bug Fixes

* added displayName to some components ([37237f3](http://bitbucket.org/gotamedia/fluffy/commit/37237f374f987d8be80788a2afd496f805cb892f))
* used the correct type for icon prop in Alert ([2dbe197](http://bitbucket.org/gotamedia/fluffy/commit/2dbe197cefe20912df66d03e5c3498a76e227b6f))

### [0.7.41](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.40...v0.7.41) (2022-05-16)


### Features

* added onValueChange callback to Textarea component ([a773ffa](http://bitbucket.org/gotamedia/fluffy/commit/a773ffa5338ebda9418fbc2f4f2b91461a8f031b))


### Bug Fixes

* check for children when mapping for Button and InputGroup components ([c40f516](http://bitbucket.org/gotamedia/fluffy/commit/c40f51682e70c300716680af9fcd316f9c23f346))

### [0.7.40](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.39...v0.7.40) (2022-05-09)


### Features

* added base Checkbox component ([e7426b7](http://bitbucket.org/gotamedia/fluffy/commit/e7426b7665eeb0f84f61cddb7f3ee3ba0e566fec))
* added UploadButton component ([bfbd921](http://bitbucket.org/gotamedia/fluffy/commit/bfbd92119afc8e8819567fed689b6724370145e1))

### [0.7.39](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.38...v0.7.39) (2022-05-09)


### Features

* added basic InputGroup component ([c156569](http://bitbucket.org/gotamedia/fluffy/commit/c156569d52e47cb0519652e9ccfd70021d6db573))


### Bug Fixes

* better typings for Button ([4387e01](http://bitbucket.org/gotamedia/fluffy/commit/4387e013f6ff00ebe473fe899bfa37d3235d4a38))
* better typings for Icon ([ababbc0](http://bitbucket.org/gotamedia/fluffy/commit/ababbc033b001a7f08b6c933ca65d858bcf52680))
* better typings for Input ([d73f9f9](http://bitbucket.org/gotamedia/fluffy/commit/d73f9f9d6d976c6a90678cd59fe4a6b0b8f14248))
* removed unused import ([d9a803b](http://bitbucket.org/gotamedia/fluffy/commit/d9a803b0595cce6bc6aff174a81f78678f25eaa3))

### [0.7.38](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.37...v0.7.38) (2022-05-06)


### Features

* added basic Input component ([5e64041](http://bitbucket.org/gotamedia/fluffy/commit/5e6404151150cfa4561f8d96d223d7b5551e4703))


### Bug Fixes

* better types for Button ([5b098a4](http://bitbucket.org/gotamedia/fluffy/commit/5b098a4e7d1eeb9b7e130c124c0f9c246dce94c4))
* naming typo for Button tests ([0aed7d6](http://bitbucket.org/gotamedia/fluffy/commit/0aed7d6f9ea9dd5edfd1ef4facd39802b7760040))
* removed unused forgotten property from theme object ([7d00061](http://bitbucket.org/gotamedia/fluffy/commit/7d0006152f5c7548e4cd395cace2905636964e97))

### [0.7.37](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.36...v0.7.37) (2022-05-05)


### Features

* added basic Button component ([2339ff2](http://bitbucket.org/gotamedia/fluffy/commit/2339ff28e0b223358c24c5c01ab163dc1e54e885))

### [0.7.36](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.35...v0.7.36) (2022-04-20)

### [0.7.35](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.34...v0.7.35) (2022-04-20)


### Features

* export all icon names ([60407e5](http://bitbucket.org/gotamedia/fluffy/commit/60407e5bb93876669cc27338cc31c583d5660a65))

### [0.7.34](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.33...v0.7.34) (2022-03-25)


### Features

* moved icons to the root dir ([e1eb852](http://bitbucket.org/gotamedia/fluffy/commit/e1eb8521ebd905d308adad118766e22d3ce9c574))

### [0.7.33](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.32...v0.7.33) (2022-03-24)

### [0.7.32](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.31...v0.7.32) (2022-03-23)


### Bug Fixes

* typo in component name "Paper" ([32ae676](http://bitbucket.org/gotamedia/fluffy/commit/32ae676602e81be44f571d04a2821bf1ce8b245c))

### [0.7.31](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.29...v0.7.31) (2022-03-23)


### Bug Fixes

* Added react-script to handle unit tests ([a91eedf](http://bitbucket.org/gotamedia/fluffy/commit/a91eedfb1ed26e1c3cd536207a7321c3cf66b4a6))

### [0.7.30](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.29...v0.7.30) (2021-11-02)

### [0.7.29](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.28...v0.7.29) (2021-11-02)


### Features

* docs displays code examples ([a2b5a42](http://bitbucket.org/gotamedia/fluffy/commit/a2b5a4264348bd4f5edd504374f051d36149f844))

### [0.7.28](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.27...v0.7.28) (2021-11-01)


### Features

* auto generated example docs for developers ([61a2361](http://bitbucket.org/gotamedia/fluffy/commit/61a2361e60c5428d86fedaf73ca830aa002481ff))


### Bug Fixes

* merge remote-tracking branch 'origin/trunk' into trunk ([d7993af](http://bitbucket.org/gotamedia/fluffy/commit/d7993af6ae70244acbf60d8256ba7add7342a360))

### [0.7.27](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.26...v0.7.27) (2021-10-29)


### Features

* **demo:** added Drawer components  ([5362e5e](http://bitbucket.org/gotamedia/fluffy/commit/5362e5e4b9eb5faf575cccacd367809be3301b7d))
* use only-allow package to ensure only npm is used ([11c4ee4](http://bitbucket.org/gotamedia/fluffy/commit/11c4ee44fee1f2c709f12d9794145b569ee41e5b))


### Bug Fixes

* **style:** removed border styles for quote component ([8e7a65d](http://bitbucket.org/gotamedia/fluffy/commit/8e7a65dcd31f38d1e3f111c9c6c371b21d24f3aa))

### [0.7.26](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.25...v0.7.26) (2021-10-29)

### [0.7.25](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.24...v0.7.25) (2021-10-29)


### Features

* added Author component ([fe894de](http://bitbucket.org/gotamedia/fluffy/commit/fe894defeac4f13ac377e60fc70a301722cef706))

### [0.7.24](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.23...v0.7.24) (2021-08-31)


### Features

* added Quote component ([03584f7](http://bitbucket.org/gotamedia/fluffy/commit/03584f7513b72fe352894fd5ee8d1d6cccc702ec))

### [0.7.23](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.22...v0.7.23) (2021-08-25)

### [0.7.22](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.21...v0.7.22) (2021-08-23)

### [0.7.21](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.20...v0.7.21) (2021-08-18)

### [0.7.20](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.19...v0.7.20) (2021-08-18)

### [0.7.19](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.18...v0.7.19) (2021-08-18)

### [0.7.18](https://bitbucket.org/gotamedia/fluffy/compare/v0.7.17...v0.7.18) (2021-08-18)


### Features

* adding author and links ([23248d1](https://bitbucket.org/gotamedia/fluffy/commit/23248d171cb74744274781ff3b5442f98dcc9985))

### [0.7.17](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.16...v0.7.17) (2021-06-18)

### [0.7.16](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.15...v0.7.16) (2021-06-17)


### Features

* adding card component ([fc39f59](http://bitbucket.org/gotamedia/fluffy/commit/fc39f592de60c22bb589812e88d93431f07489d1))

### [0.7.15](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.14...v0.7.15) (2021-06-17)

### [0.7.14](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.13...v0.7.14) (2021-06-17)


### Features

* added lighten and darken color utility functions ([135dfe5](http://bitbucket.org/gotamedia/fluffy/commit/135dfe5c3944fbaf1b42c8b0f7ea1ac8b54ee9be))

### [0.7.13](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.12...v0.7.13) (2021-06-17)

### [0.7.12](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.11...v0.7.12) (2021-06-17)

### [0.7.11](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.10...v0.7.11) (2021-06-17)

### [0.7.10](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.9...v0.7.10) (2021-06-17)

### [0.7.9](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.8...v0.7.9) (2021-06-17)

### [0.7.8](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.7...v0.7.8) (2021-06-17)

### [0.7.7](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.6...v0.7.7) (2021-06-16)

### [0.7.6](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.5...v0.7.6) (2021-06-16)

### [0.7.5](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.4...v0.7.5) (2021-06-16)

### [0.7.4](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.3...v0.7.4) (2021-06-16)

### 0.7.3 (2021-06-16)


### Bug Fixes

* removed fluffy dependency ([b34b3f6](http://bitbucket.org/gotamedia/fluffy/commit/b34b3f6d9385634572facb74936824451e2bb1b5))

### [0.7.2](https://bitbucket.org/gotamedia/fluffy/compare/v0.7.1...v0.7.2) (2021-06-14)


### Features

* Added Drawer component ([9448da7](https://bitbucket.org/gotamedia/fluffy/commit/9448da76d4b3f249eea848823b355761774737fd))
* added useDisclosure hook ([31568e6](https://bitbucket.org/gotamedia/fluffy/commit/31568e67b7633a2b968ff54c473da16173109094))


### Bug Fixes

* added missing imports for Drawer components  ([3ec5e4d](https://bitbucket.org/gotamedia/fluffy/commit/3ec5e4d29f3dac34ff19bd186c77c183ac4da000))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.