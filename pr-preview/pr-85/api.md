<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-lockup

The `auro-lockup` element is a standardized custom element for the use in headers of Alaska Airlines extended experiences.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type    | Default   | Description                                                                                        |
| ---------- | ---------- | --------- | ------- | --------- | -------------------------------------------------------------------------------------------------- |
| appearance | appearance |           | string  | `default` | Defines whether the component will be on lighter or darker backgrounds.                            |
| onDark     | onDark     |           | boolean |           | DEPRECATED - Use `appearance="inverse"` instead.                                                   |
| oneworld   | oneworld   |           | boolean |           | DEPRECATED - Use `variant="oneworld"` instead.                                                     |
| path       | path       |           | string  |           | URL path for lockup link.                                                                          |
| standard   | standard   |           | boolean |           | Uses the standard Alaska logo in place of the official logo, requires use of `oneWorld` attribute. |
| variant    | variant    |           | string  |           | Sets lockup variant option. Only possible value is `oneworld`.                                     |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name     | Description              |
| -------- | ------------------------ |
| subtitle | Set sub-title for lockup |
| title    | Set title for lockup     |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-lockup>
    <span slot="title">Place title text here</span>
    <span slot="subtitle">Place subtitle text here</span>
  </auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-lockup>
  <span slot="title">Place title text here</span>
  <span slot="subtitle">Place subtitle text here</span>
</auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Appearance on Dark Backgrounds

Use `appearance="inverse"` for the proper presentation on a darker background.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/inverse-appearance.html) -->
  <!-- The below content is automatically added from ../apiExamples/inverse-appearance.html -->
  <auro-lockup appearance="inverse">
    <span slot="title">Product Name</span>
    <span slot="subtitle">Powered by Partner Name</span>
  </auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/inverse-appearance.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/inverse-appearance.html -->

```html
<auro-lockup appearance="inverse">
  <span slot="title">Product Name</span>
  <span slot="subtitle">Powered by Partner Name</span>
</auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/inverse-appearance-2.html) -->
  <!-- The below content is automatically added from ../apiExamples/inverse-appearance-2.html -->
  <auro-lockup appearance="inverse" variant="oneworld"></auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/inverse-appearance-2.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/inverse-appearance-2.html -->

```html
<auro-lockup appearance="inverse" variant="oneworld"></auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/inverse-appearance-3.html) -->
  <!-- The below content is automatically added from ../apiExamples/inverse-appearance-3.html -->
  <auro-lockup appearance="inverse" standard variant="oneworld"></auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/inverse-appearance-3.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/inverse-appearance-3.html -->

```html
<auro-lockup appearance="inverse" standard variant="oneworld"></auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### OneWorld Variant

Use `variant="oneworld"` to replace the product name and tag line with one**World** logo.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/oneworld.html) -->
  <!-- The below content is automatically added from ../apiExamples/oneworld.html -->
  <auro-lockup variant="oneworld"></auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/oneworld.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/oneworld.html -->

```html
<auro-lockup variant="oneworld"></auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Path

Use the `path` attribute to add a custom URL reference to the clickable lockup. The default is `/`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/path.html) -->
  <!-- The below content is automatically added from ../apiExamples/path.html -->
  <auro-lockup path="https://www.alaskaair.com"></auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/path.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/path.html -->

```html
<auro-lockup path="https://www.alaskaair.com"></auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Standard

Use the `standard` attribute to use the standard Alaska logo in place of the official logo. Restricted to use with the one**World** logo.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/standard.html) -->
  <!-- The below content is automatically added from ../apiExamples/standard.html -->
  <auro-lockup standard oneWorld></auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/standard.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/standard.html -->

```html
<auro-lockup standard oneWorld></auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot Examples

### Title

Use the `title` slot to add lockup content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/title.html) -->
  <!-- The below content is automatically added from ../apiExamples/title.html -->
  <auro-lockup>
    <span slot="title">Product Name</span>
  </auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/title.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/title.html -->

```html
<auro-lockup>
  <span slot="title">Product Name</span>
</auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Subtitle

Use the `subtitle` slot to add lockup content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/subtitle.html) -->
  <!-- The below content is automatically added from ../apiExamples/subtitle.html -->
  <auro-lockup>
    <span slot="subtitle">Powered by Partner Name</span>
  </auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/subtitle.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/subtitle.html -->

```html
<auro-lockup>
  <span slot="subtitle">Powered by Partner Name</span>
</auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use "@aurodesignsystem/design-tokens/dist/legacy/auro-classic/SCSSVariables" as vac;
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host {
  --ds-auro-lockup-alaska-logo-color: #02426D; // Hard-coded to prevent customization of Alaska Airlines logo color
  --ds-auro-lockup-divider-color: var(--ds-basic-color-border-divider, #{v.$ds-basic-color-border-divider});
  --ds-auro-lockup-subtitle-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-lockup-title-color: var(--ds-basic-color-texticon-accent1, #{v.$ds-basic-color-texticon-accent1});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
