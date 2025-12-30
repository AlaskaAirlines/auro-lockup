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