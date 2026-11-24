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