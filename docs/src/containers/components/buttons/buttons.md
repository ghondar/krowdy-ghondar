---
title: Button React component
components: Button, ButtonGroup, Fab, IconButton, ButtonBase, Zoom
---

# Buttons

<p class="description">Buttons allow users to take actions, and make choices, with a single tap.</p>

[Buttons](https://material.io/design/components/buttons.html) communicate actions that users can take. They are typically placed throughout your UI, in places like:

- Dialogs
- Modal windows
- Forms
- Cards
- Toolbars

## Contained Buttons

[Contained buttons](https://material.io/design/components/buttons.html#contained-button)
are high-emphasis, distinguished by their use of elevation and fill.
They contain actions that are primary to your app.

The last example of this demo show how to use an upload button.

{{"demo": "containers/components/buttons/ContainedButtons.js"}}

## Text Buttons

[Text buttons](https://material.io/design/components/buttons.html#text-button)
are typically used for less-pronounced actions, including those located:

- In dialogs
- In cards

In cards, text buttons help maintain an emphasis on card content.

{{"demo": "containers/components/buttons/TextButtons.js"}}

## Outlined Buttons

[Outlined buttons](https://material.io/design/components/buttons.html#outlined-button)
are medium-emphasis buttons. They contain actions that are important,
but aren’t the primary action in an app.

### Alternatives

Outlined buttons are also a lower emphasis alternative to contained buttons,
or a higher emphasis alternative to text buttons.

{{"demo": "containers/components/buttons/OutlinedButtons.js"}}


## Dashed Buttons

{{"demo": "containers/components/buttons/DashedButtons.js"}}

## Grouped Buttons

The ButtonGroup component can be used to group outlined (the default) or contained buttons.

{{"demo": "containers/components/buttons/GroupedButtons.js"}}

## Split Button

ButtonGroup can also be used to create a split button. The dropdown can change the button action (as in this example), or be used to immediately trigger a related action.

{{"demo": "containers/components/buttons/SplitButton.js"}}

## Floating Action Buttons

A [floating action button](https://material.io/design/components/buttons-floating-action-button.html)
(FAB) performs the primary, or most common, action on a screen.
It appears in front of all screen content, typically as a circular shape with an icon in its center.
FABs come in two types: regular, and extended.

Only use a FAB if it is the most suitable way to present a screen’s primary action.

Only one floating action button is recommended per screen to represent the most common action.

{{"demo": "containers/components/buttons/FloatingButtons.js"}}

The floating action button animates onto the screen as an expanding piece of material, by default.

A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear,
then reappear if its action changes.

The Zoom transition can be used to achieve this. Note that since both the exiting and entering
animations are triggered at the same time, we use `enterDelay` to allow the outgoing Floating Action Button's
animation to finish before the new one enters.

{{"demo": "containers/components/buttons/FloatingActionButtonZoom.js", "bg": true}}

## Upload button

{{"demo": "containers/components/buttons/UploadButtons.js"}}

## Sizes

Fancy larger or smaller buttons? Use the `size` property.

{{"demo": "containers/components/buttons/ButtonSizes.js"}}

## Buttons with icons and label

Sometimes you might want to have icons for certain button to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.

{{"demo": "containers/components/buttons/IconLabelButtons.js"}}

## Icon Buttons

Icon buttons are commonly found in app bars and toolbars.

Icons are also appropriate for toggle buttons that allow a single choice to be selected or
deselected, such as adding or removing a star to an item.

{{"demo": "containers/components/buttons/IconButtons.js"}}

## Customized buttons

Here are some examples of customizing the component. You can learn more about this in the
[overrides documentation page](/customization/components/).

{{"demo": "containers/components/buttons/CustomizedButtons.js", "defaultCodeOpen": false}}

👑 If you are looking for inspiration, you can check [MUI Treasury's customization examples](https://mui-treasury.com/components/button).

## Complex Buttons

The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the `ButtonBase`.
You can take advantage of this lower level component to build custom interactions.

{{"demo": "containers/components/buttons/ButtonBases.js"}}

## Third-party routing library

One common use case is to use the button to trigger navigation to a new page.
The `ButtonBase` component provides a property to handle this use case: `component`.
However for certain focus polyfills `ButtonBase` requires the DOM node of the provided
component. This is achieved by attaching a ref to the component and expecting that the
component forwards this ref to the underlying DOM node.
Given that many of the interactive components rely on `ButtonBase`, you should be
able to take advantage of it everywhere.

Here is an [integration example with react-router](/guides/composition/#button).

## Limitations

### Cursor not-allowed

The ButtonBase component sets `pointer-events: none;` on disabled buttons, which prevents the appearance of a disabled cursor.

If you wish to use `not-allowed`, you have two options:

1. **CSS only**. You can remove the pointer events style on the disabled state of the `<button>` element:

  ```css
  .MuiButtonBase-root:disabled {
    cursor: not-allowed;
    pointer-events: auto;
  }
  ```

  However:

  - You should add `pointer-events: none;` back when you need to display [tooltips on disabled elements](/components/tooltips/#disabled-elements)
  - The cursor won't change if you render something other than a button element, for instance, a link `<a>` element.

2. **DOM change**. You can wrap the button:

  ```jsx
  <span style={{ cursor: 'not-allowed' }}>
    <Button component={Link} disabled>
      disabled
    </Button>
  </span>
  ```

  This has the advantage of supporting any element, for instance, a link `<a>` element.
