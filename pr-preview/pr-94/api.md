<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-lockup

Pairs the Alaska Airlines logo with a product title and subtitle for the header of an Alaska Airlines extended experience, such as a partner service.

**Key capabilities**
- **Product title and subtitle**: The `title` and `subtitle` slots show the product name and a short line under it.
- **Dark backgrounds**: `appearance="inverse"` switches to colors that read on dark backgrounds.
- **oneworld logo**: `variant="oneworld"` shows the oneworld logo in place of the title and subtitle.
- **Links to your site**: `path` sets where the lockup links, `/` by default.

### Properties and attributes

| Properties | Attributes | Modifiers | Type    | Default | Relevant when            | Description                                                                                                                                                     |
| ---------- | ---------- | --------- | ------- | ------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance | appearance |           | string  |         |                          | Sets the lockup's colors to match its background. Use `inverse` on dark backgrounds, and leave it unset or use `default` on light backgrounds.                  |
| path       | path       |           | string  | `/`     |                          | Sets the page the lockup links to, such as your product's home page (the link's `href`).                                                                        |
| standard   | standard   |           | boolean |         | `variant === 'oneworld'` | Shows the Alaska Airlines logo without its tagline in place of the logo with the tagline.<br>Applies only when `variant="oneworld"`.                            |
| variant    | variant    |           | string  |         |                          | Sets the lockup's layout. Use `oneworld` to show the oneworld logo in place of the divider, title, and subtitle. Leave it unset to show the title and subtitle. |
| onDark     | onDark     |           | boolean |         |                          | Deprecated: Use `appearance="inverse"` instead.<br>Switches the lockup to colors for dark backgrounds.                                                          |
| oneworld   | oneworld   |           | boolean |         |                          | Deprecated: Use `variant="oneworld"` instead.<br>Shows the oneworld logo in place of the title and subtitle.                                                    |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name     | Description                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| subtitle | A short line shown under the title, such as the name of a partner. The slot isn't shown when `variant="oneworld"`. |
| title    | The product or site name shown next to the logo. The slot isn't shown when `variant="oneworld"`.                   |
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

<pre class="language-html"><code class="language-html">&lt;auro-lockup&gt;
  &lt;span slot="title"&gt;Place title text here&lt;/span&gt;
  &lt;span slot="subtitle"&gt;Place subtitle text here&lt;/span&gt;
&lt;/auro-lockup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Appearance on dark backgrounds

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

<pre class="language-html"><code class="language-html">&lt;auro-lockup appearance="inverse"&gt;
  &lt;span slot="title"&gt;Product Name&lt;/span&gt;
  &lt;span slot="subtitle"&gt;Powered by Partner Name&lt;/span&gt;
&lt;/auro-lockup&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;auro-lockup appearance="inverse" variant="oneworld"&gt;&lt;/auro-lockup&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;auro-lockup appearance="inverse" standard variant="oneworld"&gt;&lt;/auro-lockup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Oneworld variant

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

<pre class="language-html"><code class="language-html">&lt;auro-lockup variant="oneworld"&gt;&lt;/auro-lockup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Path

Use the `path` attribute to set the page the lockup links to. The default is `/`.

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

<pre class="language-html"><code class="language-html">&lt;auro-lockup path="https://www.alaskaair.com"&gt;&lt;/auro-lockup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Standard

When `variant="oneworld"` is set, use the `standard` attribute to show the Alaska Airlines logo without its tagline. Without `variant="oneworld"`, it has no effect.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/standard.html) -->
<!-- The below content is automatically added from ../apiExamples/standard.html -->
<auro-lockup standard variant="oneworld"></auro-lockup>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/standard.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/standard.html -->

<pre class="language-html"><code class="language-html">&lt;auro-lockup standard variant="oneworld"&gt;&lt;/auro-lockup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot examples

### Title

Use the `title` slot for the product or site name, shown next to the logo.

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

<pre class="language-html"><code class="language-html">&lt;auro-lockup&gt;
  &lt;span slot="title"&gt;Product Name&lt;/span&gt;
&lt;/auro-lockup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Subtitle

Use the `subtitle` slot for a short line under the title, such as the name of a partner.

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

<pre class="language-html"><code class="language-html">&lt;auro-lockup&gt;
  &lt;span slot="subtitle"&gt;Powered by Partner Name&lt;/span&gt;
&lt;/auro-lockup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following CSS custom properties. Don't change `--ds-auro-lockup-alaska-logo-color`, because the Alaska Airlines logo must keep its brand color.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/legacy/auro-classic/SCSSVariables" as vac;
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
&#10;:host {
  --ds-auro-lockup-alaska-logo-color: #02426D; // Hard-coded to prevent customization of Alaska Airlines logo color
  --ds-auro-lockup-divider-color: var(--ds-basic-color-border-divider, #{v.$ds-basic-color-border-divider});
  --ds-auro-lockup-subtitle-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-lockup-title-color: var(--ds-basic-color-texticon-accent1, #{v.$ds-basic-color-texticon-accent1});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
