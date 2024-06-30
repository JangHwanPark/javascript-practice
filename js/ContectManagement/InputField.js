export class InputField {
  constructor(title) {
    this.title = title;

    this.div = document.createElement('div');
    this.input = document.createElement('input');
    this.button = document.createElement('button');

    this.button.textContent = title;
    this.div.appendChild(this.input);
    this.div.appendChild(this.button);
  }

  render(parentElement) {
    parentElement.appendChild(this.div);
  }
}