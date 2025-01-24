# auro-lockup

The auro-lockup element is a standardized custom element for the use in headers of Alaska Airlines extended experiences.

## Attributes

| Attribute | Type      | Description       |
|-----------|-----------|-------------------|
| `onDark`  | `Boolean` | Toggle onDark UI. |

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| `oneworld` | `oneworld` | `boolean` | false   | (DEPRECATED) Replaces product name and tag line with Oneworld logo. |
| `path`     | `path`     | `string`  | "/"     | URL path for lockup link.                        |
| `standard` | `standard` | `boolean` | false   | Uses the standard Alaska logo in place of the official logo, requires use of `oneWorld` attribute. |
| `variant`  | `variant`  | `string`  |         | Sets lockup variant option. Only possible value is `oneworld`. |

## Slots

| Name       | Description              |
|------------|--------------------------|
| `subtitle` | Set sub-title for lockup |
| `title`    | Set title for lockup     |
