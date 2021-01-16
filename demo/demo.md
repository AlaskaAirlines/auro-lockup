# auro-lockup

The `auro-lockup` HTML custom element is a standardized use case element for authorized Alaska Airlines extended experiences.

## auro-lockup use cases

The `auro-lockup` use cases include:

* Product lines
* Partner services
* Auxiliary sites

## auro-lockup standard use

<div class="exampleWrapper">
  <auro-lockup>
    <span slot="title">Product Name</span>
    <span slot="subtitle">Powered by Partner Name</span>
  </auro-lockup>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-lockup>
    <span slot="title">Product Name</span>
    <span slot="subtitle">Powered by Partner Name</span>
  </auro-lockup>
  ```
</auro-accordion>

## auro-lockup onDark use

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
