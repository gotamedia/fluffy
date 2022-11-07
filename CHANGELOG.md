# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.32.1](http://bitbucket.org/gotamedia/fluffy/compare/v0.32.1..v0.32.0) (2022-10-31)


### Bug Fixes

* Updated Select icon ([6666c4b](http://bitbucket.org/gotamedia/fluffy/commits/6666c4b62ba2517d2d2f84d7bfeb646c92a9fde0))

## [0.32.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.32.0..v0.31.0) (2022-10-26)


### ⚠ BREAKING CHANGES

* Added ShowHeros video player provider
* Added Native video player provider
* Added basic Video player with YouTube provider
* Replaced old icons with new ones from Heroicons

### Features

* Added basic Video player with YouTube provider ([7af7120](http://bitbucket.org/gotamedia/fluffy/commits/7af7120a5fa7affb3c2f65a1d3e62c6d4b3e6970))
* Added Native video player provider ([d011bab](http://bitbucket.org/gotamedia/fluffy/commits/d011babd7e0f235e342b84fd1b5f6e998c9e606d))
* Added ShowHeros video player provider ([aed0b5d](http://bitbucket.org/gotamedia/fluffy/commits/aed0b5d8d039ef5a4245a4d91bb45e45e4ea6651))
* Replaced old icons with new ones from Heroicons ([843f1f5](http://bitbucket.org/gotamedia/fluffy/commits/843f1f5d8d742f24a2e8894cab5c49d11164299b))


### Bug Fixes

* Added stroke/strokeWidth to Icon story ([77c9a88](http://bitbucket.org/gotamedia/fluffy/commits/77c9a882e1343149742e86a30d4eed0a0d1adaae))
* Load ShowHeros player with https instead of http ([48f593e](http://bitbucket.org/gotamedia/fluffy/commits/48f593e61778e703ead1cc4b37dff9615a38558c))
* Updated YouTube Video provider to override props and expose ref ([78a3a34](http://bitbucket.org/gotamedia/fluffy/commits/78a3a34d76767c3d66866890793777ebf87cd31b))

## [0.31.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.31.0..v0.30.1) (2022-10-06)


### ⚠ BREAKING CHANGES

* Added ability to store data from promises in useDataFetch requests context

### Features

* Added ability to store data from promises in useDataFetch requests context ([6ccae48](http://bitbucket.org/gotamedia/fluffy/commits/6ccae48e552d768f72cc8dc869f7ee1b525bd895))

### [0.30.1](http://bitbucket.org/gotamedia/fluffy/compare/v0.30.1..v0.30.0) (2022-10-04)


### Bug Fixes

* Removed check for context when running effect callback in useDataFetch for CSR ([742a7dc](http://bitbucket.org/gotamedia/fluffy/commits/742a7dce10a1b0f8c20f06aca21376085d23c490))

## [0.30.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.30.0..v0.29.4) (2022-10-04)


### ⚠ BREAKING CHANGES

* Added useDataFetch "context/hook" to handle fetching component's data on server-side

### Features

* Added "useDataFetch" hook to dev eslint config ([8fb7dab](http://bitbucket.org/gotamedia/fluffy/commits/8fb7dab888618e4e468c30dfb1b11317232772b0))
* Added "wait" utility ([dd4cc38](http://bitbucket.org/gotamedia/fluffy/commits/dd4cc382ec2d9628383c0f983a124c4ccbb961dd))
* Added useDataFetch "context/hook" to handle fetching component's data on server-side ([144cf61](http://bitbucket.org/gotamedia/fluffy/commits/144cf617ddc69845279bac3205bb2d4e0bfb35a6))


### Bug Fixes

* **ci:** Fixed publishing to local registry when building Fluffy locally ([83aa203](http://bitbucket.org/gotamedia/fluffy/commits/83aa203148298f4fdd7ca9f0712b2a4e7dab8c0a))

### [0.29.4](http://bitbucket.org/gotamedia/fluffy/compare/v0.29.4..v0.29.3) (2022-09-28)


### Features

* Added DefaultLabel props to the Field component which will be passed through ([2ae48dd](http://bitbucket.org/gotamedia/fluffy/commits/2ae48dd19defa6bed14a2902890c92569f68bba9))


### Bug Fixes

* Added enterKeyHint to inputs in TagsInput and List components ([6caf7a5](http://bitbucket.org/gotamedia/fluffy/commits/6caf7a5a5b687ad19f9602ef7945510643919159))
* Disabled scrolling outside while Anchor's content is displayed ([356b696](http://bitbucket.org/gotamedia/fluffy/commits/356b69646b2d1a0684344203c71e4878bd62b97e))
* Fixed focusing on filter input within a list while preventing scrolling ([5345b59](http://bitbucket.org/gotamedia/fluffy/commits/5345b595a2ee312b2db440ae83f8e0013359c305))
* Fixed the InfoFieldValidation to require i18n props ([20c26d2](http://bitbucket.org/gotamedia/fluffy/commits/20c26d2357e7574ac2bde51e2a9d5ddd4df7ef1a))
* Fixed the LengthFieldValidation to accept empty inputs as valid ([62894a0](http://bitbucket.org/gotamedia/fluffy/commits/62894a0e520cb8b0213bb012a0adf09130e97327))
* Fixed the onChange function of the Select component ([9768ca9](http://bitbucket.org/gotamedia/fluffy/commits/9768ca9ed0b314612011657679f7a20e856db3cd))
* Fixed the RadioGroup and added container HTMLAttributes ([5dbdcbd](http://bitbucket.org/gotamedia/fluffy/commits/5dbdcbd4ec3874806579a8e3059512d355f5cb1a))
* Fixed the typing for the formContext onSubmit to use MessageWithId instead of the normal Message ([cbf261c](http://bitbucket.org/gotamedia/fluffy/commits/cbf261c97fa0028bf0a15d0ca784a9a2ea94c773))
* Fixed the ValueFieldValidation to accept empty inputs as valid ([2e78df3](http://bitbucket.org/gotamedia/fluffy/commits/2e78df3e10d9c02c3945fdf7de97f4ea568af3ff))

### [0.29.3](http://bitbucket.org/gotamedia/fluffy/compare/v0.29.3..v0.29.2) (2022-09-20)


### Bug Fixes

* Fixed focusing on filter input within a list while preventing scrolling ([e66b248](http://bitbucket.org/gotamedia/fluffy/commits/e66b248bd1d0cbdd7c3e0a91b786607b5d60668c))

### [0.29.2](http://bitbucket.org/gotamedia/fluffy/compare/v0.29.2..v0.29.1) (2022-09-02)

### [0.29.1](http://bitbucket.org/gotamedia/fluffy/compare/v0.29.1..v0.29.0) (2022-09-02)


### Features

* **Pill:** Implement shape and sizes for Pill component ([db7476d](http://bitbucket.org/gotamedia/fluffy/commits/db7476d03909148289f6e0957a2df2053e9afa03))
* **Pill:** Introduce Constant file to be use in NXT components ([539b8ec](http://bitbucket.org/gotamedia/fluffy/commits/539b8ec2e330225165645e2ab5e0790d078236a7))
* **Table.Cell:** Introduce cell size style function ([191a8b0](http://bitbucket.org/gotamedia/fluffy/commits/191a8b0fbc5129de5cb7e500eec40573076ef3f9))
* **Table:** Implement border prop for Table components row, cell, and table ([2886f40](http://bitbucket.org/gotamedia/fluffy/commits/2886f4017d6054f5130338a5eeb7e725d8a21229))
* **Table:** Implement theme prop for Table components ([d5a7a5a](http://bitbucket.org/gotamedia/fluffy/commits/d5a7a5af5f4b5d5c778fc03ecd612c5d17e54567))
* **Table:** Implement type utility for mapping styled prefix "$" to an interface field values ([b659533](http://bitbucket.org/gotamedia/fluffy/commits/b6595333a28a8bd67701867258561bc3a6e8b284))
* **Table:** Implemented Table row Head and Collapsible ([1092ad1](http://bitbucket.org/gotamedia/fluffy/commits/1092ad127ee3efced35956af80292a0fd1eafe5e))
* **Table:** introduce Table context values collapsible and size ([4a1adbe](http://bitbucket.org/gotamedia/fluffy/commits/4a1adbe3db079fe2bfc51c1c8bcb3804d49838e8))

## [0.29.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.29.0..v0.28.2) (2022-08-30)


### ⚠ BREAKING CHANGES

* Renamed TagSearch to TagsInput and added some improvements
* Fixed Select items structure
* Support rendering ListItem as a title component
* Hook - useRect
* Collapsible component

### Features

* Collapsible component ([d874424](http://bitbucket.org/gotamedia/fluffy/commits/d874424bb92b8753812e30aaa6e3cafd53b1fc45))
* Hook - useRect ([2d68abc](http://bitbucket.org/gotamedia/fluffy/commits/2d68abcdc886bd0b8ec65d843e5388728819e2b1))
* Implement Collapsible component ([e02ffef](http://bitbucket.org/gotamedia/fluffy/commits/e02ffef7d809eca03bfabce0e92c3e8ce4928258))
* Implemented useAnimation hook ([ce2f672](http://bitbucket.org/gotamedia/fluffy/commits/ce2f672a8ed395c27ef5f87be250989ddecea105))
* Support rendering ListItem as a title component ([5f69388](http://bitbucket.org/gotamedia/fluffy/commits/5f693880a959c1cb36e873bd8e45b1dc819aa067))


### Bug Fixes

* Anchor height for Menu ([5a74f69](http://bitbucket.org/gotamedia/fluffy/commits/5a74f698dadcff882f366d476594c2efd1d4c9b9))
* Fixed Select items structure ([5828226](http://bitbucket.org/gotamedia/fluffy/commits/58282261e83f7eb5e732a2c2725bdb997022955a))
* Renamed TagSearch to TagsInput and added some improvements ([efaa82c](http://bitbucket.org/gotamedia/fluffy/commits/efaa82c4923250df90828ab4ce85e6ef412ad8b6))
* **style:** Fixed ListItem style when rendered as title ([7ef8bb9](http://bitbucket.org/gotamedia/fluffy/commits/7ef8bb9ba35fe86c97a676cd8c91c8a383095396))

### [0.28.2](http://bitbucket.org/gotamedia/fluffy/compare/v0.28.2..v0.28.1) (2022-08-24)


### Bug Fixes

* Updated variables for certificate and domain name. ([b3e1869](http://bitbucket.org/gotamedia/fluffy/commits/b3e1869617263cc8242886aa20e260b8aa60a08c))

### [0.28.1](http://bitbucket.org/gotamedia/fluffy/compare/v0.28.1..v0.28.0) (2022-08-24)


### Features

* Option to deploy either dev or production. ([9da6c86](http://bitbucket.org/gotamedia/fluffy/commits/9da6c86ea074a01112b5fc3a2bac966d062a0914))

## [0.28.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.28.0..v0.27.1) (2022-08-22)


### ⚠ BREAKING CHANGES

* Added useMeasure hook

### Features

* Added ability to render FocusTrap instead of a div for Anchor ([afef079](http://bitbucket.org/gotamedia/fluffy/commits/afef0797811c45f82cfe049d802f2de6a4e966a9))
* Added useMeasure hook ([16f5d21](http://bitbucket.org/gotamedia/fluffy/commits/16f5d212b2cc8f797d2c435665cd1c3271c85c11))


### Bug Fixes

* Allow close TagSearch with ArrowIcon while opened ([0684b35](http://bitbucket.org/gotamedia/fluffy/commits/0684b35263311925be822b80bbaf2f7ba573fb7e))
* Allow passing down iconProps for Tag's closeIcon ([4491b58](http://bitbucket.org/gotamedia/fluffy/commits/4491b5845bf9214caa689fd2439f2ec351e3e23c))
* Better keyboard handling for TagSearch ([6345bb6](http://bitbucket.org/gotamedia/fluffy/commits/6345bb60191d6ff8f718c5c4ad3d45e859a4592c))
* Defaulted Portal to render on first render-cycle instead on first-mount ([27e3f6b](http://bitbucket.org/gotamedia/fluffy/commits/27e3f6b5f993a8ae2fbbc7beb0652fe125ad81ce))
* FocusTrap forwardRef ([ee3d6f3](http://bitbucket.org/gotamedia/fluffy/commits/ee3d6f331f5b74e13f083b51294fe355b36fe638))
* Improved Anchor/useAnchor calculation ([c1c077d](http://bitbucket.org/gotamedia/fluffy/commits/c1c077d61ad8a45e5a1cda1388d80b6d36f7c829))
* Improved on TagSearch to handle filtering/resizing List ([0a467e8](http://bitbucket.org/gotamedia/fluffy/commits/0a467e883fc851d66b9ec5417d8e1fbcf89ce450))
* ListRef type in Menu ([1a64e40](http://bitbucket.org/gotamedia/fluffy/commits/1a64e40ca6f977af5d8d036c6ef478544e47cfc2))
* Updated Menu/Select trigger re-focus state onClose ([add12bb](http://bitbucket.org/gotamedia/fluffy/commits/add12bb018556871637f7326b4c0639892605a11))

### [0.27.1](http://bitbucket.org/gotamedia/fluffy/compare/v0.27.1..v0.27.0) (2022-08-22)


### Features

* **TableRow:** Add the ability to check if component is on hover ([1eb977d](http://bitbucket.org/gotamedia/fluffy/commits/1eb977da4737005875da46f748760b8e358c9987))
* **TableRow:** Added the abililty for the parent to listen for mouse enter and mouse leave events ([b2a684b](http://bitbucket.org/gotamedia/fluffy/commits/b2a684b2620debe346321d6d5d08503cc55449a7))

## [0.27.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.27.0..v0.26.0) (2022-08-18)


### ⚠ BREAKING CHANGES

* Added basic TagSearch component
* Added basic Tag component

### Features

* Added basic Tag component ([ba6cd65](http://bitbucket.org/gotamedia/fluffy/commits/ba6cd65ba0910bc3fe687d6ac969f8399cfea877))
* Added basic TagSearch component ([1baa372](http://bitbucket.org/gotamedia/fluffy/commits/1baa372a36c971dc29f3ccd90a027dd6fc31c8aa))


### Bug Fixes

* Anchor/Menu overflow style ([b137fc4](http://bitbucket.org/gotamedia/fluffy/commits/b137fc4948acc7e529fcb1ae51a1a2435639a3f6))
* Exported Overlay ([c4caff4](http://bitbucket.org/gotamedia/fluffy/commits/c4caff4f02b208f4c608b15afe66021646dc7300))
* Fixed Tag sizes typo and added disabled/onRemove props ([2d11ff3](http://bitbucket.org/gotamedia/fluffy/commits/2d11ff366a5b86b42a70114c104e15f0a43c4f42))
* InputGroup ref handling ([7405223](http://bitbucket.org/gotamedia/fluffy/commits/7405223ce8436cff224d3e2e8793ea822ca9a35a))
* List forwarded ref ([8b98e41](http://bitbucket.org/gotamedia/fluffy/commits/8b98e416d9dcbc563fdc81f8ec15bd7e2e04420c))
* **style:** Added "micro" size to Icon ([cfab7f1](http://bitbucket.org/gotamedia/fluffy/commits/cfab7f16fcc570b63a8db368cd37987ba449383f))
* Table test for parent and children relationship ([00117ff](http://bitbucket.org/gotamedia/fluffy/commits/00117ff289b77ce938b0a7d066fd08c7c5288f36))

## [0.26.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.26.0..v0.25.0) (2022-08-16)


### ⚠ BREAKING CHANGES

* Component - Table

### Features

* Component - Table ([b37edf7](http://bitbucket.org/gotamedia/fluffy/commits/b37edf7d21af7af091759b1f121e3fe6f0a2cedb))
* Table component ([96d72e7](http://bitbucket.org/gotamedia/fluffy/commits/96d72e70b14d0e1a76e98583e011b203dd931483))


### Bug Fixes

* **ci:** Fixed .versionrc config with correct bitbucket urls and updated all broken links in CHANGELOG ([b50f52b](http://bitbucket.org/gotamedia/fluffy/commits/b50f52bba5b594890cc2126890af11627d223774))
* **ci:** Updated README ([2a08e00](http://bitbucket.org/gotamedia/fluffy/commits/2a08e0053922c2ad03b72d5f6b241bef077d902b))

## [0.25.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.25.0..v0.24.0) (2022-08-15)


### ⚠ BREAKING CHANGES

* Exposed "popmotion" lib as a fluffy package
* Added basic Sheet component
* Added Modal component
* Added FocusTrap component

### Features

* Added basic Sheet component ([c3abb5e](http://bitbucket.org/gotamedia/fluffy/commits/c3abb5e3a03971a2bf6b840e85f37f72bd91918c))
* Added FocusTrap component ([394a79d](http://bitbucket.org/gotamedia/fluffy/commits/394a79d877ff0ee57052875187c82eb475973475))
* Added Modal component ([beb5bc4](http://bitbucket.org/gotamedia/fluffy/commits/beb5bc480f9742cd69f515c4551b6cad03573dda))
* Exposed "popmotion" lib as a fluffy package ([f2b1300](http://bitbucket.org/gotamedia/fluffy/commits/f2b13000028662b2dde24d00b2ed8feb7e974ff4))


### Bug Fixes

* Ability to render close icon for Modal and added closeOnClickOutside option ([3293c60](http://bitbucket.org/gotamedia/fluffy/commits/3293c609c1987891cf349f4015b63e3735374916))
* Icon sizes ([db5b741](http://bitbucket.org/gotamedia/fluffy/commits/db5b741634f0a07335b6c3131fe703979e9cbf8d))
* Overlay types/background ([85efc31](http://bitbucket.org/gotamedia/fluffy/commits/85efc319d3ee963c7c9e09f91968839ce186f689))
* Types for FocusTrap/Overlay ([866ebdd](http://bitbucket.org/gotamedia/fluffy/commits/866ebdd420caceceb4381e4949629a3f2caf2235))
* Wrapped Modal's content with FocusTrap ([344ee00](http://bitbucket.org/gotamedia/fluffy/commits/344ee00014a3172191b08860cddb123bb899173c))

## [0.24.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.24.0..v0.23.0) (2022-08-11)


### ⚠ BREAKING CHANGES

* Added clear filter icon to filter input in List
* Support rendering an icon with select ListItem
* Added filter functionality for List/Select components

### Features

* Added clear filter icon to filter input in List ([95e95ba](http://bitbucket.org/gotamedia/fluffy/commits/95e95baf7f5a7c5baec4a429178e3ead01d9d345))
* Added filter functionality for List/Select components ([196c584](http://bitbucket.org/gotamedia/fluffy/commits/196c5842f7c2aff3aa7b5239a62cca5cd02188c2))
* Support rendering an icon with select ListItem ([3b0b82a](http://bitbucket.org/gotamedia/fluffy/commits/3b0b82af5ed07d61bc40a341520b2aa8ee15514b))


### Bug Fixes

* **ci:** Updated README ([2cc4dfe](http://bitbucket.org/gotamedia/fluffy/commits/2cc4dfe0d1f0af8db7135b6457f26c503343975e))
* Export name for uuid package in index file ([698cbf4](http://bitbucket.org/gotamedia/fluffy/commits/698cbf4b9f92487bc8e125750ae130246174ffb2))

## [0.23.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.23.0..v0.21.2) (2022-08-10)


### ⚠ BREAKING CHANGES

* Added basic SubMenu component
* Added "uuid" lib and exposed as a package
* Added basic SubMenu component
* Added "uuid" lib and exposed as a package

### Features

* Added "uuid" lib and exposed as a package ([9db70ef](http://bitbucket.org/gotamedia/fluffy/commits/9db70ef730d3e2da5b8e89693420482652a9075c))
* Added "uuid" lib and exposed as a package ([a0c1792](http://bitbucket.org/gotamedia/fluffy/commits/a0c1792c702a6524cf74171115cda55d3a90f625))
* Added basic SubMenu component ([08444bd](http://bitbucket.org/gotamedia/fluffy/commits/08444bdd60203116d0fbef538c430d8a186efc32))
* Added basic SubMenu component ([48cf40d](http://bitbucket.org/gotamedia/fluffy/commits/48cf40d8b62c6f50949ed5ecf673bd233718af85))


### Bug Fixes

* Added disabled prop to DropDown ([b5653ee](http://bitbucket.org/gotamedia/fluffy/commits/b5653ee78116508479fd5eab04bd567ddce1dee4))
* correcting height on pill ([e7b0bf2](http://bitbucket.org/gotamedia/fluffy/commits/e7b0bf2b5c8e6cbb64d4ed42308eaacfe61d26ad))
* DatePicker css style by adding the css-rules into the styled Wrapper ([9fae1cb](http://bitbucket.org/gotamedia/fluffy/commits/9fae1cbdf4b30e8c6bc85c07c0ada8ec7660d4b6))
* Minor fixes and cleanup ([68f8d58](http://bitbucket.org/gotamedia/fluffy/commits/68f8d58b8ad7688159abbf3eed3460c7f142e3ce))
* Minor fixes and cleanup ([eb24115](http://bitbucket.org/gotamedia/fluffy/commits/eb2411592e4a6d513fdc56d302f3405dce2257c4))
* **story:** Updated Manu types and story ([595459d](http://bitbucket.org/gotamedia/fluffy/commits/595459d8cf6045f945d2b1c5eddf57e59b14b5a7))
* **story:** Updated Manu types and story ([2b5a3a6](http://bitbucket.org/gotamedia/fluffy/commits/2b5a3a6f9193e9b29aecace8d3565e2d7067c712))

## [0.22.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.22.0..v0.21.2) (2022-08-10)


### ⚠ BREAKING CHANGES

* Added basic SubMenu component
* Added "uuid" lib and exposed as a package
* Added basic SubMenu component
* Added "uuid" lib and exposed as a package

### Features

* Added "uuid" lib and exposed as a package ([9db70ef](http://bitbucket.org/gotamedia/fluffy/commits/9db70ef730d3e2da5b8e89693420482652a9075c))
* Added "uuid" lib and exposed as a package ([a0c1792](http://bitbucket.org/gotamedia/fluffy/commits/a0c1792c702a6524cf74171115cda55d3a90f625))
* Added basic SubMenu component ([08444bd](http://bitbucket.org/gotamedia/fluffy/commits/08444bdd60203116d0fbef538c430d8a186efc32))
* Added basic SubMenu component ([48cf40d](http://bitbucket.org/gotamedia/fluffy/commits/48cf40d8b62c6f50949ed5ecf673bd233718af85))


### Bug Fixes

* Added disabled prop to DropDown ([b5653ee](http://bitbucket.org/gotamedia/fluffy/commits/b5653ee78116508479fd5eab04bd567ddce1dee4))
* correcting height on pill ([e7b0bf2](http://bitbucket.org/gotamedia/fluffy/commits/e7b0bf2b5c8e6cbb64d4ed42308eaacfe61d26ad))
* DatePicker css style by adding the css-rules into the styled Wrapper ([9fae1cb](http://bitbucket.org/gotamedia/fluffy/commits/9fae1cbdf4b30e8c6bc85c07c0ada8ec7660d4b6))
* Minor fixes and cleanup ([68f8d58](http://bitbucket.org/gotamedia/fluffy/commits/68f8d58b8ad7688159abbf3eed3460c7f142e3ce))
* Minor fixes and cleanup ([eb24115](http://bitbucket.org/gotamedia/fluffy/commits/eb2411592e4a6d513fdc56d302f3405dce2257c4))
* **story:** Updated Manu types and story ([595459d](http://bitbucket.org/gotamedia/fluffy/commits/595459d8cf6045f945d2b1c5eddf57e59b14b5a7))
* **story:** Updated Manu types and story ([2b5a3a6](http://bitbucket.org/gotamedia/fluffy/commits/2b5a3a6f9193e9b29aecace8d3565e2d7067c712))

### [0.21.2](http://bitbucket.org/gotamedia/fluffy/compare/v0.21.2..v0.21.1) (2022-08-10)


### Bug Fixes

* fixed pill variant types ([801cdae](http://bitbucket.org/gotamedia/fluffy/commits/801cdae0cf47b26db23a50f22a67a8ff91071abd))

### [0.21.1](http://bitbucket.org/gotamedia/fluffy/compare/v0.21.1..v0.21.0) (2022-08-10)


### Bug Fixes

* Added the missing disabled prop and button type to the Select ([60ff335](http://bitbucket.org/gotamedia/fluffy/commits/60ff3350c3c8a6cf3eeddd0a632a89a4f90f0be3))

## [0.21.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.21.0..v0.20.0) (2022-08-09)


### ⚠ BREAKING CHANGES

* Added basic Menu component
* Added variant/size to Select
* Added variant/size to Dropdown

### Features

* Added basic Menu component ([39a69a8](http://bitbucket.org/gotamedia/fluffy/commits/39a69a895dcd9d11a77ce6f47281bc716f8a240f))
* Added variant/size to Dropdown ([e4458a9](http://bitbucket.org/gotamedia/fluffy/commits/e4458a9733d08bed452aa58770cd9a7162c56a3f))
* Added variant/size to Select ([e04ed9c](http://bitbucket.org/gotamedia/fluffy/commits/e04ed9c693c587c869db74209852a9f76cdd7cc8))
* Utilised Menu component in Dropdown/Select ([6278005](http://bitbucket.org/gotamedia/fluffy/commits/62780052958735f252fa0c0130302d085d79f1de))


### Bug Fixes

* Removed unused "label" prop from Select types ([b8d3c07](http://bitbucket.org/gotamedia/fluffy/commits/b8d3c07bf4a8619bfef3156f2cbfa67c27be421d))
* Replaced onSelect with onChange callback for Dropdown and allow passing value prop to Dropdown ([99effd1](http://bitbucket.org/gotamedia/fluffy/commits/99effd1a5bdaf8523bd6c766516eaeb73a57a277))

## [0.20.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.20.0..v0.19.0) (2022-08-08)


### ⚠ BREAKING CHANGES

* introduced new pill component

### Features

* introduced new pill component ([03f9099](http://bitbucket.org/gotamedia/fluffy/commits/03f90997632f418c2d23b1d11d819326a96deae5))

## [0.19.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.19.0..v0.18.0) (2022-08-08)


### ⚠ BREAKING CHANGES

* Added basic Select component

### Features

* Added basic Select component ([90c24a0](http://bitbucket.org/gotamedia/fluffy/commits/90c24a04209b4fc694bb153c8316ca4c44a57d66))


### Bug Fixes

* Fixed ability to close Dropdown on "escape" ([fd56509](http://bitbucket.org/gotamedia/fluffy/commits/fd5650941cd84cc8631fe89fa1abce3daa818986))
* **style:** Fixed Container background-color ([f26e0ad](http://bitbucket.org/gotamedia/fluffy/commits/f26e0adac4af04a9c192f55b883ff1874f25950a))
* **style:** Minor ListItem style ([97c6e3f](http://bitbucket.org/gotamedia/fluffy/commits/97c6e3f5cd024874bf228077f579c0df3d398f5d))

## [0.18.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.18.0..v0.17.0) (2022-08-08)


### ⚠ BREAKING CHANGES

* Added basic Dropdown component
* Added basic Container component
* Added basic Popover component
* Added basic Overlay component

### Features

* Added basic Container component ([7e1658d](http://bitbucket.org/gotamedia/fluffy/commits/7e1658d62b9c023397a45895bd27c48f37af9675))
* Added basic Dropdown component ([7bad5c4](http://bitbucket.org/gotamedia/fluffy/commits/7bad5c406d957be0be710ca5adce51e304e7c4da))
* Added basic Overlay component ([943014d](http://bitbucket.org/gotamedia/fluffy/commits/943014d4740b2fc952dc0c942daf663bd6008f84))
* Added basic Popover component ([4b4ad53](http://bitbucket.org/gotamedia/fluffy/commits/4b4ad5304dcc1b87fce0ca71eeff0a42ed95e45c))


### Bug Fixes

* Adjust Anchor style height ([e6415ad](http://bitbucket.org/gotamedia/fluffy/commits/e6415ad34c3006743fccd7f82af74d97a612c105))
* Minor type/style fixes for List/ListItem/Popover ([ed34cd8](http://bitbucket.org/gotamedia/fluffy/commits/ed34cd8734086886bf035a88c608de79ed884f50))
* **story:** Added TODO for Popover story's fix ([4f53642](http://bitbucket.org/gotamedia/fluffy/commits/4f536420e064f1be4d7b48df43588c1ee314eba4))
* **style:** Added default "z-index" to Anchor's content ([4d85c54](http://bitbucket.org/gotamedia/fluffy/commits/4d85c545c67d5fd79b075e0c604d992636eaab2f))

## [0.17.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.17.0..v0.16.0) (2022-08-04)


### ⚠ BREAKING CHANGES

* **ci:** Added shareable ESLint config to be extended
* Added Anchor component with useAnchor hook
* Added useIsomorphicLayoutEffect hook
* Added useWindowSize hook

### Features

* Added Anchor component with useAnchor hook ([c4c6d39](http://bitbucket.org/gotamedia/fluffy/commits/c4c6d39a4dbaf2a501ab5432d2627c5a43425d6b))
* Added useIsomorphicLayoutEffect hook ([f753337](http://bitbucket.org/gotamedia/fluffy/commits/f753337df6653305401ebbebb880e071fbfbcf8b))
* Added useWindowSize hook ([6b62774](http://bitbucket.org/gotamedia/fluffy/commits/6b6277476c09a7aaa1ae0708dc045c9f38d85ce0))
* **ci:** Added shareable ESLint config to be extended ([591a0b5](http://bitbucket.org/gotamedia/fluffy/commits/591a0b56051a991a5c0a7e265d468533c29db6f3))


### Bug Fixes

* **story:** Fixed Anchor story ([af13727](http://bitbucket.org/gotamedia/fluffy/commits/af137276aac10e8e748a8ab01f41c42f41e422ed))

## [0.16.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.16.0..v0.15.1) (2022-08-03)


### ⚠ BREAKING CHANGES

* Marked as breaking changes since the destruction of Fluffy package has been changed by removing the "dist" directory and export all the components/modules from the package root "@gotamedia/fluffy/" instead of "@gotamedia/fluffy/dist/"

### Bug Fixes

* Added default export for the package "scroll-into-view-if-needed" ([2ee490f](http://bitbucket.org/gotamedia/fluffy/commits/2ee490f3f89c762c28ddb5bac0936e67a3b89c05))

### [0.15.1](http://bitbucket.org/gotamedia/fluffy/compare/v0.15.1..v0.15.0) (2022-08-03)

## [0.15.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.15.0..v0.14.1) (2022-08-03)


### ⚠ BREAKING CHANGES

* Test bundling Fluffy with Rollup "again 🥸"

### ci

* Test bundling Fluffy with Rollup "again 🥸" ([e12fb90](http://bitbucket.org/gotamedia/fluffy/commits/e12fb901b488f9262e2894ab8a72660c2d54f261))

### [0.14.1](http://bitbucket.org/gotamedia/fluffy/compare/v0.14.1..v0.14.0) (2022-08-02)


### Bug Fixes

* defaulted 'normal' border for List component ([5d0bc6f](http://bitbucket.org/gotamedia/fluffy/commits/5d0bc6f328a7c07e83a40ae773d1143b5d764d57))

## [0.14.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.14.0..v0.13.0) (2022-08-02)


### ⚠ BREAKING CHANGES

* Added List component
* Added 'scroll-into-view-if-needed' library and exposed as a Fluffy package
* Added ListItem component
* Added Color Palette/ContrastChecker stories

### Features

* Added 'scroll-into-view-if-needed' library and exposed as a Fluffy package ([1fd23c2](http://bitbucket.org/gotamedia/fluffy/commits/1fd23c23ed7978de911a146caf1fab0ea92225f0))
* Added Color Palette/ContrastChecker stories ([761e8ca](http://bitbucket.org/gotamedia/fluffy/commits/761e8cafd60d02ed441d0d09b1e8551f9aa3091f))
* Added List component ([8d37ed3](http://bitbucket.org/gotamedia/fluffy/commits/8d37ed3ff7ab3adc30b038eac07acc821fc08a26))
* Added ListItem component ([b5cb88a](http://bitbucket.org/gotamedia/fluffy/commits/b5cb88a9c9ee92633f95c30cef942170456afe77))
* **doc:** Added DateUtility documentations ([61b15a6](http://bitbucket.org/gotamedia/fluffy/commits/61b15a6609641f80f479c328fbbcfafe3ea45b09))
* **doc:** Added Polished package documentation ([cf19484](http://bitbucket.org/gotamedia/fluffy/commits/cf194843362061e4d20247701fd05e275f4c2e20))
* **doc:** Added ReactIntersectionObserver package documentation ([acb950d](http://bitbucket.org/gotamedia/fluffy/commits/acb950d6b4aaf3dff3a0b4b9bde707a0c4a4f749))
* **story:** Added hooks documentations ([9d85871](http://bitbucket.org/gotamedia/fluffy/commits/9d85871e5f9986d33faab76607d708563587625b))
* **test:** Added Cypress for unit testing ([f706c39](http://bitbucket.org/gotamedia/fluffy/commits/f706c3919cf609b13e4535f3fc468e0b24db2a46))


### Bug Fixes

* Added demo link to README ([beedfd8](http://bitbucket.org/gotamedia/fluffy/commits/beedfd89f1deaf7b83edb68020c7a219ba529ea3))
* **ci:** Fixed build script tsconfig to ignore cypress test files ([4b4ed55](http://bitbucket.org/gotamedia/fluffy/commits/4b4ed55e8a2c598bf2a3e0416bc54ddcdd8f1885))
* **story:** Fixed useLifeCycle docs typo ([1fe2505](http://bitbucket.org/gotamedia/fluffy/commits/1fe2505dc642872ede544992b908f4ed2b0f176b))
* **test:** Replaced Jest tests with Cypress tests for Button ([8b1c923](http://bitbucket.org/gotamedia/fluffy/commits/8b1c923e4989c048b60ea01a505ef67f3fa37c0f))

## [0.13.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.13.0..v0.12.0) (2022-07-26)


### ⚠ BREAKING CHANGES

* Exposed 'polished' and 'react-intersection-observer'
* Added Image component
* Added LazyLoad component

### Features

* Added Image component ([67f9ec0](http://bitbucket.org/gotamedia/fluffy/commits/67f9ec0bcb4cf80b85e56f25efc5118c1ab63c97))
* Added LazyLoad component ([dc7c18c](http://bitbucket.org/gotamedia/fluffy/commits/dc7c18c2c71885fc81b9bad5f8da75a580e22f1f))
* Exposed 'polished' and 'react-intersection-observer' ([171a023](http://bitbucket.org/gotamedia/fluffy/commits/171a02341fe0243d570d8dd70d413d75ba7c19dd))


### Bug Fixes

* Fixed LazyImage's placeholder ([163dc20](http://bitbucket.org/gotamedia/fluffy/commits/163dc20202bfde945a1ec9ee39905dfa3b938a08))
* **test:** Fixed LazyLoad crashing tests and updated all imports for test files ([df7cc9c](http://bitbucket.org/gotamedia/fluffy/commits/df7cc9cd90689eb8603f06827f5a61e4ffe573b8))
* **type:** Updated onClear prop as optional for TimePicker ([29aca83](http://bitbucket.org/gotamedia/fluffy/commits/29aca8339d64fa04618ca71faa038e44a485ca78))

## [0.12.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.12.0..v0.11.0) (2022-07-22)


### ⚠ BREAKING CHANGES

* Added basic Pagination component

### Features

* Added basic Pagination component ([be244dc](http://bitbucket.org/gotamedia/fluffy/commits/be244dcd35b8169bde14264a4aec42d93844d790))
* Added clear buttons for DatePicker/TimePicker ([550a5ef](http://bitbucket.org/gotamedia/fluffy/commits/550a5ef48837f22d78be88f914af2626dbc0b1fe))


### Bug Fixes

* Added number type check for Button children ([00e8a39](http://bitbucket.org/gotamedia/fluffy/commits/00e8a39b4fea417ac23637288f43958c9356bfa1))
* Allow clicks on rendered Icons with InputGroup ([cedc0db](http://bitbucket.org/gotamedia/fluffy/commits/cedc0dba1ca2dea0a929728ff9f0aa0130f9d5c1))
* **story:** Separated stable components from the ones that currently under development ([e2d0b2f](http://bitbucket.org/gotamedia/fluffy/commits/e2d0b2f0f20a70dab966467edcf9bd70aed31fee))
* **story:** Updated TimePicker format token arg ([504b64e](http://bitbucket.org/gotamedia/fluffy/commits/504b64e70b67df9c475a2024af05bb44831a33e8))

## [0.11.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.11.0..v0.10.0) (2022-07-21)


### ⚠ BREAKING CHANGES

* Added TimePicker component
* Added DatePicker component
* Added DateUtility

### Features

* Added "date-fns" and "react-datepicker" ([55f1997](http://bitbucket.org/gotamedia/fluffy/commits/55f1997d6a5aca6237f2fe9b1f94e4f682438421))
* Added DatePicker component ([857d95c](http://bitbucket.org/gotamedia/fluffy/commits/857d95c54280503ddda9c7b2da64365c7c413564))
* Added DateUtility ([25b8502](http://bitbucket.org/gotamedia/fluffy/commits/25b85025d4f9a6c0775e959878d08cfb70d38306))
* Added TimePicker component ([93210b3](http://bitbucket.org/gotamedia/fluffy/commits/93210b3e232bd097c701bd77db4f0e1617e730e3))


### Bug Fixes

* Minor fixes: stories, types and typo ([ff66166](http://bitbucket.org/gotamedia/fluffy/commits/ff6616601bb243691bab1471395fe8c211ce55b3))

## [0.10.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.10.0..v0.9.1) (2022-07-19)


### ⚠ BREAKING CHANGES

* Added SwitchButton component
* Added Radio component

### Features

* Added Radio component ([23648b8](http://bitbucket.org/gotamedia/fluffy/commits/23648b8f24677a436cfa5c0379c4dd503ef29233))
* Added SwitchButton component ([604f35e](http://bitbucket.org/gotamedia/fluffy/commits/604f35e9edb77b2dfe6f64c5529b262ef8ac33d6))


### Bug Fixes

* **style:** Updated Checkbox disabled style ([bdb2f6c](http://bitbucket.org/gotamedia/fluffy/commits/bdb2f6cf407ee98a2eceaa4dd30286a1955656f2))
* **style:** Updated Checkbox hove/active style ([559f84e](http://bitbucket.org/gotamedia/fluffy/commits/559f84e84d3eb3db6c043d57c5f497bf7221dc53))
* Updated Checkbox checked prop and disabled style ([3314b67](http://bitbucket.org/gotamedia/fluffy/commits/3314b6797f74c0c97c5cdc1d7e4eeeaee26dd544))

### [0.9.1](http://bitbucket.org/gotamedia/fluffy/compare/v0.9.1..v0.9.0) (2022-07-18)


### Features

* Added label to Input/Textarea ([c816715](http://bitbucket.org/gotamedia/fluffy/commits/c816715f99cb639680f3d3153a6e27c99456fb47))


### Bug Fixes

* **story:** Updated Card's story names ([7054965](http://bitbucket.org/gotamedia/fluffy/commits/7054965dad1dc0dff49719716dd71fc6dfb1a786))
* **story:** Updated icon list story ([b0aa7ea](http://bitbucket.org/gotamedia/fluffy/commits/b0aa7eaf5b323c2b97af85b4853dbd6a83672ad7))
* **style:** Updated checkmark-circle check color ([ef1a19c](http://bitbucket.org/gotamedia/fluffy/commits/ef1a19c57deb8627c31596661f9270f0e936d0d5))

## [0.9.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.9.0..v0.8.2) (2022-07-18)


### ⚠ BREAKING CHANGES

* Supported Button/IconButton in InputGroup

### Features

* Supported Button/IconButton in InputGroup ([1c35f34](http://bitbucket.org/gotamedia/fluffy/commits/1c35f34aa3ee2429339201b2411141b39f11d2e9))


### Bug Fixes

* **style:** Updated Button/IconButton/Input/InputGroup sizes/variants ([ae0c55f](http://bitbucket.org/gotamedia/fluffy/commits/ae0c55f7c09a91c1fa18b8c8c2bd608f18ccf330))
* **style:** Updated Input style ([20c09fa](http://bitbucket.org/gotamedia/fluffy/commits/20c09fab46df7ec2e97d6c1e672b3fe4dbb3ea7e))
* **style:** Updated InputGroup sizes ([2941f7b](http://bitbucket.org/gotamedia/fluffy/commits/2941f7b4ba0dd5cc374c06414a74757866b78825))
* **style:** Updated Textarea variants to match Input ([cb6e15b](http://bitbucket.org/gotamedia/fluffy/commits/cb6e15b1d0c6c963d3452cf3f5b68b258da48344))
* Updated imports for sizes/variants ([ae58fd2](http://bitbucket.org/gotamedia/fluffy/commits/ae58fd248d75d808c27b25e8aa3a73d49ed0f18c))

### [0.8.2](http://bitbucket.org/gotamedia/fluffy/compare/v0.8.2..v0.8.1) (2022-07-15)


### Features

* Added IconButton component ([012682d](http://bitbucket.org/gotamedia/fluffy/commits/012682d54debd67e02362170e83bc0f6f2081c2b))


### Bug Fixes

* Alert variant typo ([a8b97a8](http://bitbucket.org/gotamedia/fluffy/commits/a8b97a897ef0fb20eb14ea15e6c086bcbb446773))
* Fixed Alert variant type ([f01d842](http://bitbucket.org/gotamedia/fluffy/commits/f01d8428c9063d7182e1e5a9399d95da6e6a5bd6))

### [0.8.1](http://bitbucket.org/gotamedia/fluffy/compare/v0.8.1..v0.8.0) (2022-07-04)

## [0.8.0](http://bitbucket.org/gotamedia/fluffy/compare/v0.8.0..v0.7.49) (2022-07-04)


### ⚠ BREAKING CHANGES

* Removed Rollup and added a custom build script to compile Fluffy and each module individually to reduce bundle size of the app who utilising Fluffy

### Bug Fixes

* Better Icon rendering to allow server-side to render the requested icon ([54c15c9](http://bitbucket.org/gotamedia/fluffy/commits/54c15c9ceb45c330a5df9bdbdb761b413dfc23fd))
* **type:** Updated Paper children type ([8619cf2](http://bitbucket.org/gotamedia/fluffy/commits/8619cf227de79f73e05d496293e3185604dde68c))


### ci

* Removed Rollup and added a custom build script to compile Fluffy and each module individually to reduce bundle size of the app who utilising Fluffy ([269f903](http://bitbucket.org/gotamedia/fluffy/commits/269f903ae82a5b203487f51e4eb828e7e0353b79))

### [0.7.49](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.49..v0.7.48) (2022-06-29)

### [0.7.48](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.48..v0.7.47) (2022-06-21)


### Bug Fixes

* **style:** Fixed Card's Image style for small views ([c62c3e0](http://bitbucket.org/gotamedia/fluffy/commits/c62c3e0f72dbff9fe2a232a9cb59812e76bc0a1f))

### [0.7.47](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.47..v0.7.46) (2022-06-17)


### Features

* **style:** Added compact prop to Card component to render in compact view ([05308f1](http://bitbucket.org/gotamedia/fluffy/commits/05308f16729e0a718dacf03db40ea52b62dd1adc))
* **style:** Added vertical prop to Card component to force rendering in a compact vertical card ([52a8c59](http://bitbucket.org/gotamedia/fluffy/commits/52a8c59fe1d4899193ea56515695668150c2a14e))

### [0.7.46](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.46..v0.7.45) (2022-06-14)


### Features

* Added Portal component ([905420b](http://bitbucket.org/gotamedia/fluffy/commits/905420b94433b99e2c45bf3e75e759068b1a9acc))
* Added useMounted hook ([2dc3e86](http://bitbucket.org/gotamedia/fluffy/commits/2dc3e86890211c3122f6de9aeefa74214808487b))

### [0.7.45](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.45..v0.7.44) (2022-06-03)


### Features

* Added useScroll hook ([b6d0cc5](http://bitbucket.org/gotamedia/fluffy/commits/b6d0cc57a7c61a92357bd3cf3b10d5fc720a3759))

### [0.7.44](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.44..v0.7.43) (2022-06-01)


### Features

* added Card component ([09122e0](http://bitbucket.org/gotamedia/fluffy/commits/09122e0de213e68deec9c139746b85b238aba382))
* added CardParagraph component ([a2a6f8a](http://bitbucket.org/gotamedia/fluffy/commits/a2a6f8a0f82364c681ffbd8c9379a48267c9d578))
* added Skeleton component ([45f3e55](http://bitbucket.org/gotamedia/fluffy/commits/45f3e5573c3274a98ffcafba6c5fdadf23931919))


### Bug Fixes

* exported Skeleton/Card components ([1c85644](http://bitbucket.org/gotamedia/fluffy/commits/1c85644519acf8dfb79b4ab985c8dbba2baf0142))
* exported ThemeContext along with ThemeProvider ([9d51bfe](http://bitbucket.org/gotamedia/fluffy/commits/9d51bfe2e91bd112844f1164a5a3a33c75ce5d46))

### [0.7.43](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.43..v0.7.42) (2022-05-20)


### Features

* added ButtonGroup component ([33597b4](http://bitbucket.org/gotamedia/fluffy/commits/33597b496ad3fa60aa5537739e25bbc42199ea0c))
* added useful hooks/utils ([c6f8308](http://bitbucket.org/gotamedia/fluffy/commits/c6f830838de84da0fe63b5952be8666752b5ec9a))


### Bug Fixes

* exported hooks ([3a3b168](http://bitbucket.org/gotamedia/fluffy/commits/3a3b168930859f4b7d00515084b0a77f4d292616))

### [0.7.42](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.42..v0.7.41) (2022-05-17)


### Features

* added Maps component ([41def9d](http://bitbucket.org/gotamedia/fluffy/commits/41def9d6cea01b88669b037e25a7a476c1ef47bc))


### Bug Fixes

* added displayName to some components ([37237f3](http://bitbucket.org/gotamedia/fluffy/commits/37237f374f987d8be80788a2afd496f805cb892f))
* used the correct type for icon prop in Alert ([2dbe197](http://bitbucket.org/gotamedia/fluffy/commits/2dbe197cefe20912df66d03e5c3498a76e227b6f))

### [0.7.41](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.41..v0.7.40) (2022-05-16)


### Features

* added onValueChange callback to Textarea component ([a773ffa](http://bitbucket.org/gotamedia/fluffy/commits/a773ffa5338ebda9418fbc2f4f2b91461a8f031b))


### Bug Fixes

* check for children when mapping for Button and InputGroup components ([c40f516](http://bitbucket.org/gotamedia/fluffy/commits/c40f51682e70c300716680af9fcd316f9c23f346))

### [0.7.40](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.40..v0.7.39) (2022-05-09)


### Features

* added base Checkbox component ([e7426b7](http://bitbucket.org/gotamedia/fluffy/commits/e7426b7665eeb0f84f61cddb7f3ee3ba0e566fec))
* added UploadButton component ([bfbd921](http://bitbucket.org/gotamedia/fluffy/commits/bfbd92119afc8e8819567fed689b6724370145e1))

### [0.7.39](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.39..v0.7.38) (2022-05-09)


### Features

* added basic InputGroup component ([c156569](http://bitbucket.org/gotamedia/fluffy/commits/c156569d52e47cb0519652e9ccfd70021d6db573))


### Bug Fixes

* better typings for Button ([4387e01](http://bitbucket.org/gotamedia/fluffy/commits/4387e013f6ff00ebe473fe899bfa37d3235d4a38))
* better typings for Icon ([ababbc0](http://bitbucket.org/gotamedia/fluffy/commits/ababbc033b001a7f08b6c933ca65d858bcf52680))
* better typings for Input ([d73f9f9](http://bitbucket.org/gotamedia/fluffy/commits/d73f9f9d6d976c6a90678cd59fe4a6b0b8f14248))
* removed unused import ([d9a803b](http://bitbucket.org/gotamedia/fluffy/commits/d9a803b0595cce6bc6aff174a81f78678f25eaa3))

### [0.7.38](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.38..v0.7.37) (2022-05-06)


### Features

* added basic Input component ([5e64041](http://bitbucket.org/gotamedia/fluffy/commits/5e6404151150cfa4561f8d96d223d7b5551e4703))


### Bug Fixes

* better types for Button ([5b098a4](http://bitbucket.org/gotamedia/fluffy/commits/5b098a4e7d1eeb9b7e130c124c0f9c246dce94c4))
* naming typo for Button tests ([0aed7d6](http://bitbucket.org/gotamedia/fluffy/commits/0aed7d6f9ea9dd5edfd1ef4facd39802b7760040))
* removed unused forgotten property from theme object ([7d00061](http://bitbucket.org/gotamedia/fluffy/commits/7d0006152f5c7548e4cd395cace2905636964e97))

### [0.7.37](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.37..v0.7.36) (2022-05-05)


### Features

* added basic Button component ([2339ff2](http://bitbucket.org/gotamedia/fluffy/commits/2339ff28e0b223358c24c5c01ab163dc1e54e885))

### [0.7.36](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.36..v0.7.35) (2022-04-20)

### [0.7.35](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.35..v0.7.34) (2022-04-20)


### Features

* export all icon names ([60407e5](http://bitbucket.org/gotamedia/fluffy/commits/60407e5bb93876669cc27338cc31c583d5660a65))

### [0.7.34](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.34..v0.7.33) (2022-03-25)


### Features

* moved icons to the root dir ([e1eb852](http://bitbucket.org/gotamedia/fluffy/commits/e1eb8521ebd905d308adad118766e22d3ce9c574))

### [0.7.33](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.33..v0.7.32) (2022-03-24)

### [0.7.32](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.32..v0.7.31) (2022-03-23)


### Bug Fixes

* typo in component name "Paper" ([32ae676](http://bitbucket.org/gotamedia/fluffy/commits/32ae676602e81be44f571d04a2821bf1ce8b245c))

### [0.7.31](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.31..v0.7.29) (2022-03-23)


### Bug Fixes

* Added react-script to handle unit tests ([a91eedf](http://bitbucket.org/gotamedia/fluffy/commits/a91eedfb1ed26e1c3cd536207a7321c3cf66b4a6))

### [0.7.30](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.30..v0.7.29) (2021-11-02)

### [0.7.29](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.29..v0.7.28) (2021-11-02)


### Features

* docs displays code examples ([a2b5a42](http://bitbucket.org/gotamedia/fluffy/commits/a2b5a4264348bd4f5edd504374f051d36149f844))

### [0.7.28](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.28..v0.7.27) (2021-11-01)


### Features

* auto generated example docs for developers ([61a2361](http://bitbucket.org/gotamedia/fluffy/commits/61a2361e60c5428d86fedaf73ca830aa002481ff))


### Bug Fixes

* merge remote-tracking branch 'origin/trunk' into trunk ([d7993af](http://bitbucket.org/gotamedia/fluffy/commits/d7993af6ae70244acbf60d8256ba7add7342a360))

### [0.7.27](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.27..v0.7.26) (2021-10-29)


### Features

* **demo:** added Drawer components  ([5362e5e](http://bitbucket.org/gotamedia/fluffy/commits/5362e5e4b9eb5faf575cccacd367809be3301b7d))
* use only-allow package to ensure only npm is used ([11c4ee4](http://bitbucket.org/gotamedia/fluffy/commits/11c4ee44fee1f2c709f12d9794145b569ee41e5b))


### Bug Fixes

* **style:** removed border styles for quote component ([8e7a65d](http://bitbucket.org/gotamedia/fluffy/commits/8e7a65dcd31f38d1e3f111c9c6c371b21d24f3aa))

### [0.7.26](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.26..v0.7.25) (2021-10-29)

### [0.7.25](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.25..v0.7.24) (2021-10-29)


### Features

* added Author component ([fe894de](http://bitbucket.org/gotamedia/fluffy/commits/fe894defeac4f13ac377e60fc70a301722cef706))

### [0.7.24](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.24..v0.7.23) (2021-08-31)


### Features

* added Quote component ([03584f7](http://bitbucket.org/gotamedia/fluffy/commits/03584f7513b72fe352894fd5ee8d1d6cccc702ec))

### [0.7.23](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.23..v0.7.22) (2021-08-25)

### [0.7.22](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.22..v0.7.21) (2021-08-23)

### [0.7.21](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.21..v0.7.20) (2021-08-18)

### [0.7.20](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.20..v0.7.19) (2021-08-18)

### [0.7.19](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.19..v0.7.18) (2021-08-18)

### [0.7.18](https://bitbucket.org/gotamedia/fluffy/compare/v0.7.18..v0.7.17) (2021-08-18)


### Features

* adding author and links ([23248d1](https://bitbucket.org/gotamedia/fluffy/commits/23248d171cb74744274781ff3b5442f98dcc9985))

### [0.7.17](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.17..v0.7.16) (2021-06-18)

### [0.7.16](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.16..v0.7.15) (2021-06-17)


### Features

* adding card component ([fc39f59](http://bitbucket.org/gotamedia/fluffy/commits/fc39f592de60c22bb589812e88d93431f07489d1))

### [0.7.15](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.15..v0.7.14) (2021-06-17)

### [0.7.14](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.14..v0.7.13) (2021-06-17)


### Features

* added lighten and darken color utility functions ([135dfe5](http://bitbucket.org/gotamedia/fluffy/commits/135dfe5c3944fbaf1b42c8b0f7ea1ac8b54ee9be))

### [0.7.13](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.13..v0.7.12) (2021-06-17)

### [0.7.12](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.12..v0.7.11) (2021-06-17)

### [0.7.11](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.11..v0.7.10) (2021-06-17)

### [0.7.10](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.10..v0.7.9) (2021-06-17)

### [0.7.9](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.9..v0.7.8) (2021-06-17)

### [0.7.8](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.8..v0.7.7) (2021-06-17)

### [0.7.7](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.7..v0.7.6) (2021-06-16)

### [0.7.6](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.6..v0.7.5) (2021-06-16)

### [0.7.5](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.5..v0.7.4) (2021-06-16)

### [0.7.4](http://bitbucket.org/gotamedia/fluffy/compare/v0.7.4..v0.7.3) (2021-06-16)

### 0.7.3 (2021-06-16)


### Bug Fixes

* removed fluffy dependency ([b34b3f6](http://bitbucket.org/gotamedia/fluffy/commits/b34b3f6d9385634572facb74936824451e2bb1b5))

### [0.7.2](https://bitbucket.org/gotamedia/fluffy/compare/v0.7.2..v0.7.1) (2021-06-14)


### Features

* Added Drawer component ([9448da7](https://bitbucket.org/gotamedia/fluffy/commits/9448da76d4b3f249eea848823b355761774737fd))
* added useDisclosure hook ([31568e6](https://bitbucket.org/gotamedia/fluffy/commits/31568e67b7633a2b968ff54c473da16173109094))


### Bug Fixes

* added missing imports for Drawer components  ([3ec5e4d](https://bitbucket.org/gotamedia/fluffy/commits/3ec5e4d29f3dac34ff19bd186c77c183ac4da000))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.