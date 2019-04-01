import {
  Component,
  Prop,
  Listen,
  Event,
  EventEmitter
} from '@stencil/core';

@Component({
  tag: 'jelly-checkbox',
  styleUrl: 'jelly-checkbox.css',
  shadow: true
})
export class JellyCheckbox {
  /**
   * checked property that can be used to get/set the value. Accepts only boolean valuess
   */
  @Prop({
    mutable: true
  }) checked: boolean = false;

  /**
   *disabled property that can be used to get/set the value. Accepts only boolean values
   */
  @Prop() disabled: boolean = false;

  /**
   * label attribute that can be used to set the label text 
   */
  @Prop({
    reflectToAttr: true
  }) label: string;
  /**
   * Indeterminate state & property of checkbox
   */
  @Prop({
    mutable: true,
    reflectToAttr: true
  }) indeterminate: boolean = false;
  /**
   * This is an event that is emitted when the state of the box is changed
   */
  @Event() change: EventEmitter;
  handleOnChange()
  {
    this.change.emit({value:this.checked});
  }
  @Listen('keydown')
  handleKeyDown(eventObj) {
    if (eventObj.code === "Space") {
      this.handleChange();
    }
  }

  hostData() {
    return {
      'aria-checked': this.checked ? 'true' : 'false',
      'aria-disabled': this.disabled ? 'true' : 'false',
      'aria-labelledby':this.label,
      'tabindex': this.disabled ? -1 : 0
    }
  }

  private handleChange() {
    if (!this.indeterminate&&!this.disabled)
     {
      this.checked = !this.checked;
      this.handleOnChange();
     }
  }


  render() {
    return ( <div class = "container" >
      <input type = "checkbox"
      id = "jelly__checkbox--hidden"
      name = "jelly__checkbox--hidden"
      checked = {
        this.checked
      }
      disabled = {
        this.disabled
      }
      onChange = {
        this.handleChange.bind(this)
      }
      /> <label htmlFor = "jelly__checkbox--hidden"
      id = "jelly__container" >
      <span id = "jelly__content" > </span> </label> <
      label htmlFor = "jelly__checkbox--hidden"
      id = "jelly__label" > {
        this.label
      } </label> </div>
    )
  }
}
