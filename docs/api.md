# auro-lockup

The auro-lockup element is a standardized custom element for the use in headers of Alaska Airlines extended experiences.

## Attributes

| Attribute | Type      | Description      |
|-----------|-----------|------------------|
| `onDark`  | `Boolean` | Toggle onDark UI |

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| `oneworld` | `oneworld` | `boolean` | false   | replaces product name and tag line with Oneworld logo |
| `path`     | `path`     | `String`  | "/"     | URL path for lockup link                         |
| `standard` | `standard` | `boolean` | false   | uses the standard Alaska logo in place of the official logo, requires use of `oneWorld` attribute. |

## Slots

| Name       | Description              |
|------------|--------------------------|
| `subtitle` | Set sub-title for lockup |
| `title`    | Set title for lockup     |
