<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- The below content is automatically added from ../docs/api.md -->

# auro-lockup

The auro-lockup element is a standardized custom element for the use in headers of Alaska Airlines extended experiences.

## Attributes

| Attribute | Type      | Description      |
|-----------|-----------|------------------|
| [onDark](#onDark)  | `Boolean` | Toggle onDark UI |

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| [oneworld](#oneworld) | `oneworld` | `boolean` | false   | replaces product name and tag line with Oneworld logo |
| [path](#path)     | `path`     | `String`  | "/"     | URL path for lockup link                         |
| [standard](#standard) | `standard` | `boolean` | false   | uses the standard Alaska logo in place of the official logo, requires use of `oneWorld` attribute. |

## Slots

| Name       | Description              |
|------------|--------------------------|
| [subtitle](#subtitle) | Set sub-title for lockup |
| [title](#title)    | Set title for lockup     |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

See the following examples for use-case illustrations of API options.

### Attribute Examples

#### <a name="onDark"></a>`onDark`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Use the `onDark` attribute for the proper presentation on a darker background.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/onDarkExample.html) -->
  <!-- The below content is automatically added from ../apiExamples/onDarkExample.html -->
  <auro-lockup onDark></auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/onDarkExample.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/onDarkExample.html -->

```html
<auro-lockup onDark></auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Property Examples

#### <a name="oneWorld"></a>`oneWorld`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Use the `oneWorld` property to replace the product name and tag line with one**World** logo.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/oneWorld.html) -->
  <!-- The below content is automatically added from ../apiExamples/oneWorld.html -->
  <auro-lockup oneworld></auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/oneWorld.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/oneWorld.html -->

```html
<auro-lockup oneworld></auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="path"></a>`path`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Use the `path` property to add a custom URL reference to the clickable lockup. A `/` is set by default.

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

#### <a name="standard"></a>`standard`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Use the `standard` property to use the standard Alaska logo in place of the official logo. Restricted to use with the one**World** logo.

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

### Slot Examples

#### <a name="title"></a>`title`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
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

#### <a name="subtitle"></a>`subtitle`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
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

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ../src/tokens.scss -->

```scss
@import './../node_modules/@aurodesignsystem/design-tokens/dist/tokens/SCSSVariables';

:host {
  --ds-auro-lockup-alaska-logo-color: var(--ds-color-brand-lounge, #{$ds-color-brand-lounge});
  --ds-auro-lockup-divider-color: var(--ds-color-border-divider-default, #{$ds-color-border-divider-default});
  --ds-auro-lockup-subtitle-color: var(--ds-color-text-tertiary-default, #{$ds-color-text-tertiary-default});
  --ds-auro-lockup-title-color: var(--ds-color-text-info-default, #{$ds-color-text-info-default});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
