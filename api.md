<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- The below content is automatically added from ../docs/api.md -->

# auro-lockup

The auro-lockup element is a standardized custom element for the use in headers of Alaska Airlines extended experiences.

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| [onDark](#onDark)  | `Boolean` | DEPRECATED - Use `appearance="inverse"` instead. |

## Properties

| Property     | Attribute    | Type      | Default     | Description                                      |
|--------------|--------------|-----------|-------------|--------------------------------------------------|
| [appearance](#appearance) | `appearance` | `string`  | "'default'" | Defines whether the component will be on lighter or darker backgrounds. |
| [oneworld](#oneworld)   | `oneworld`   | `boolean` | false       | (DEPRECATED) Replaces product name and tag line with Oneworld logo. |
| [path](#path)       | `path`       | `string`  | "/"         | URL path for lockup link.                        |
| [standard](#standard)   | `standard`   | `boolean` | false       | Uses the standard Alaska logo in place of the official logo, requires use of `oneWorld` attribute. |
| [variant](#variant)    | `variant`    | `string`  |             | Sets lockup variant option. Only possible value is `oneworld`. |

## Slots

| Name       | Description              |
|------------|--------------------------|
| [subtitle](#subtitle) | Set sub-title for lockup |
| [title](#title)    | Set title for lockup     |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

See the following examples for use-case illustrations of API options.

### Attribute Examples

#### Visual state on dark background

Use the `appearance="inverse"` attribute for the proper presentation on a darker background.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/inverseAppearanceExample.html) -->
  <!-- The below content is automatically added from ../apiExamples/inverseAppearanceExample.html -->
  <auro-lockup appearance="inverse"></auro-lockup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/inverseAppearanceExample.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/inverseAppearanceExample.html -->

```html
<auro-lockup appearance="inverse"></auro-lockup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Property Examples

#### <a name="oneWorld"></a>`oneWorld`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Use the `oneWorld` property to replace the product name and tag line with one**World** logo.

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

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ../src/styles/tokens.scss -->

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
