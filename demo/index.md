<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Lockup

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
The `auro-lockup` HTML custom element is a standardized use case element for authorized Alaska Airlines extended experiences.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-lockup use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `auro-lockup` use cases include:

* Product lines
* Partner services
* Auxiliary sites
<!-- AURO-GENERATED-CONTENT:END -->

## auro-lockup default use

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-lockup>
    <span slot="title">Place title text here</span>
    <span slot="subtitle">Place subtitle text here</span>
  </auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-lockup>
  <span slot="title">Place title text here</span>
  <span slot="subtitle">Place subtitle text here</span>
</auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Accessibility

The following table lists the accessibility color information.

| color | token | ratio | rating |
|---|---|---|---|
| #099dc5 | --ds-color-brand-breeze-400 | 3.16:1 | Large text - WCAG AA Pass |
| #676767 | --ds-color-base-gray-700 | 5.65:1 | Normal text - WCAG AA Pass |

## auro-lockup with Oneworld logo

The following examples illustrate the standard and official versions of the Alaska logo. By default the official versions of the Alaska logo is used. Use the `standard` attribute to display the Alaska logo sans the tagline.

The `standard` property is only supported with the `oneworld` option.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/oneWorldStandard.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/oneWorldStandard.html -->
  <auro-lockup standard oneworld></auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/oneWorldStandard.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/oneWorldStandard.html -->

```html
<auro-lockup standard oneworld></auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## auro-lockup onDark

For lockup use with dark backgrounds or a dark mode, use the `onDark` attribute.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/onDark.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/onDark.html -->
  <auro-lockup onDark>
    <span slot="title">Product Name</span>
    <span slot="subtitle">Powered by Partner Name</span>
  </auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/onDark.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/onDark.html -->

```html
<auro-lockup onDark>
  <span slot="title">Product Name</span>
  <span slot="subtitle">Powered by Partner Name</span>
</auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/onDark-2.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/onDark-2.html -->
  <auro-lockup onDark oneworld></auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/onDark-2.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/onDark-2.html -->

```html
<auro-lockup onDark oneworld></auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/onDark-3.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/onDark-3.html -->
  <auro-lockup onDark standard oneworld></auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/onDark-3.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/onDark-3.html -->

```html
<auro-lockup onDark standard oneworld></auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-lockup` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@aurodesignsystem/auro-lockup';
registerComponent('custom-lockup');
```

This will create a new custom element that you can use in your HTML that will function identically to the `<auro-lockup>` element.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom.html -->
  <custom-lockup>
    <span slot="title">Place title text here</span>
    <span slot="subtitle">Place subtitle text here</span>
  </custom-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom.html -->

```html
<custom-lockup>
  <span slot="title">Place title text here</span>
  <span slot="subtitle">Place subtitle text here</span>
</custom-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
