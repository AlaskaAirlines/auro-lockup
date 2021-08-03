# auro-lockup

auro-lockup is a standardized custom element for the use in headers of Alaska Airlines extended experiences

## Attributes

| Attribute | Type      | Description      |
|-----------|-----------|------------------|
| `onDark`  | `Boolean` | Toggle onDark UI |

## Properties

| Property   | Attribute  | Type      | Default | Description              |
|------------|------------|-----------|---------|--------------------------|
| `oneworld` | `oneworld` | `boolean` | false   |                          |
| `path`     | `path`     | `String`  | "/"     | URL path for lockup link |
| `standard` | `standard` | `boolean` | false   |                          |

## Slots

| Name       | Description                                      |
|------------|--------------------------------------------------|
| `oneworld` | replaces product name and tag line with Oneworld logo |
| `standard` | uses the standard Alaska logo in place of the official logo |
| `subtitle` | Set sub-title for lockup                         |
| `title`    | Set title for lockup                             |
