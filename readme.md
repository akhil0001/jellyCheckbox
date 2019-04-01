![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)  [![npm version](https://badge.fury.io/js/jelly-checkbox.svg)](https://badge.fury.io/js/jelly-checkbox)  [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

# jelly-checkbox

An elegant,customizable and jellified checkbox built as web component using [Stencil](https://stenciljs.com/)

![jelly-checkbox](https://raw.githubusercontent.com/akhil0001/jellyCheckbox/master/images/demo.gif)

## Try Now 

Play with the component [Codepen](https://codepen.io/akhil_001/full/qwEdeO)

# Install

### 1. via npm 

```node
npm install jelly-checkbox  --save
```
or

### 2. via script tag
```html
<script src="https://unpkg.com/jelly-checkbox@latest/dist/jellyCheckbox.js"></script>
```

# Usage
### 1.Import into module script(required only for npm installations):

```javascript
import { jelly-checkbox } 
```
### 2.Use it in your web page like any other HTML element
```html
<jelly-checkbox></jelly-checkbox>
```

# API
Here are the list of the properties,events, styling attributes and their behavior
## Properties
- `checked`
    - This property can be used to get/set the checked property of the checkbox.
    - This will automatically sets the attribute of `aria-checked` attribute thus handling the accessibility


- `disabled`
    - This property can be used to get/set the disabled property of the checkbox
    - This will automatically sets the attribute of `tabindex` attribute to -1  

- `label`
    - This property can be used to get/set the label text that is associated with the checkbox
    - This will automatically set the `aria-labelledby` to the value of label

- `indeterminate`
    - This property  can be used to change the state of the checkbox to indeterminate state.([MDN for more info](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes))
    - When the state of the checkbox is set to indeterminate, then the `indeterminate` attribute is set to the checkbox

| Property | Value | Example |
| --------- |------|---------|
| `checked` | Boolean| `js1.checked = true`|
| `disabled`| Boolean | `js1.disabled = true`|
| `label` | String | `js1.label = 'Whatever it takes'`|
| `indeterminate`| Boolean | `js1.indeterminate = false`|

## CSS Variables
CSS variables are provided to handle the background, border colors used in the component for customization

| CSS variable | Default value | Description |
| ------------ |---------------|-------------|
| `--checked-bgcolor`| `#673ab7` | Background of the checkbox when the state of the checkbox is checked or indeterminate|
|`--border-color`| `#b0b0b0` | Border color of the checkbox|
| `--tick-color` | `#ffffff` | Color of tick |

### Usage
The following snippet describes how we can customize the colors 
```css
#js1
{
    --checked-bgcolor: red;
    --border-color:grey;
    --tick-color:yellow;
}
```

## Events

- `change`
  - This event is triggered when the checked property  of the checkbox is changed between `true` and `false`
  - The following snippet describes the usage by using 
  
    - `addEventListener`
    ```javascript
        var jc1 = document.getElementById('jc1');
        jc1.addEventListener('change',handleTheChange);

        function handleChange(eventObject)
        {
            console.log(eventObject.detail.value);
            //logs the checked property either true or false
        }
    ```
    (or)
    - `onchange`
    ```javascript
    jc1.onchange = function(eventObj)
    {
        console.log(eventObject.detail.value);
            //logs the checked property either true or false
    }
    ```
    (or)
    - from HTML
    ```html
        <jelly-checkbox onchange = "handleChange(event)"></jelly-checkbox>
    ```


# Accessibility
Accessibilty rules have been followed by handling 
 - `aria-checked`
 - `aria-disabled`
 - `tabindex`
 - `aria-labelledby`

# License

[MIT License](https://github.com/akhil0001/jellySwitch/blob/master/LICENSE) (c) [Akhil Sai](https://codepen.io/akhil_001/)

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

# Credits
This is inspired from the design of [jelly-checkbox](https://dribbble.com/shots/3281393-Jelly-Checkbox) by [Andreas Storm](https://dribbble.com/andreasstorm)

# Contribution

Wanna contribute?
- Fork /Clone 
- And run
```node
npm install
npm start
```

# Todos

 - [x] Add Images to Readme
 - [ ] Publish to  npm
 - [ ] Publish to web component 
 - [ ] Write Unit test case 
 - [ ] Write contributing.md file
 - [ ] Form submit support
 
