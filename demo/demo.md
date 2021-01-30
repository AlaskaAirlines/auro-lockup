# auro-lockup

The `auro-lockup` HTML custom element is a standardized use case element for authorized Alaska Airlines extended experiences.

## auro-lockup use cases

The `auro-lockup` use cases include:

* Product lines
* Partner services
* Auxiliary sites

## auro-lockup default use

The following illustrates the default use of the `auro-lockup` element. Use the `title` and `subtitle` slots to add content to the lockup.

<div class="exampleWrapper">
  <auro-lockup>
    <span slot="title">Place title text here</span>
    <span slot="subtitle">Place subtitle text here</span>
  </auro-lockup>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-lockup>
    <span slot="title">Place title text here</span>
    <span slot="subtitle">Place subtitle text here</span>
  </auro-lockup>
  ```
</auro-accordion>

## Accessibility

The following table lists the accessibility color information.

| color | token | ratio | rating |
|---|---|---|---|
| #099dc5 | | 3.16:1 | Large text - WCAG AA Pass |
| #767676 | | 4.54:1 | Normal text - WCAG AA Pass |

## auro-lockup with Oneworld logo

The following examples illustrate the standard and official versions of the Alaska logo. By default the official versions of the Alaska logo is used. Use the `standard` attribute to display the Alaska logo sans the tagline.

The `standard` property is only supported with the `oneworld` option.

<div class="exampleWrapper">
  <auro-lockup oneworld></auro-lockup>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-lockup oneworld></auro-lockup>
  ```
</auro-accordion>

<div class="exampleWrapper">
  <auro-lockup standard oneworld></auro-lockup>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-lockup standard oneworld></auro-lockup>
  ```
</auro-accordion>

## auro-lockup onDark

For lockup use with dark backgrounds or a dark mode, use the `onDark` attribute.

<div class="exampleWrapper exampleWrapper--ondark">
  <auro-lockup onDark>
    <span slot="title">Product Name</span>
    <span slot="subtitle">Powered by Partner Name</span>
  </auro-lockup>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-lockup onDark>
    <span slot="title">Product Name</span>
    <span slot="subtitle">Powered by Partner Name</span>
  </auro-lockup>
  ```
</auro-accordion>

<div class="exampleWrapper exampleWrapper--ondark">
  <auro-lockup onDark oneworld></auro-lockup>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-lockup onDark oneworld></auro-lockup>
  ```
</auro-accordion>

<div class="exampleWrapper exampleWrapper--ondark">
  <auro-lockup onDark standard oneworld></auro-lockup>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-lockup onDark standard oneworld></auro-lockup>
  ```
</auro-accordion>
