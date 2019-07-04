import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

const componentCSS = require('./app.component.scss');

@customElement('marius-left-navbar')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  title = 'Example button';

  @property()
  selectedItem = 'Components';

  @property()
  navItems = ['Home', 'Components', 'Documentation', 'Get started', 'Account'];

  getClassMap(item: string) {
    const classInfo = { listItem: true, selected: this.selectedItem === item };
    return classInfo;
  }

  emit(selectedItem: string) {
    console.log('Button clicked');
    this.dispatchEvent(
      new CustomEvent('clicked', {
        detail: selectedItem,
        bubbles: true
      })
    );
  }

  render() {
    return html`
          <ul>
            ${this.navItems.map(item => html`
            <li @click=${() => {
              this.selectedItem = item;
              this.emit(item);
            }}

              class=${classMap(this.getClassMap(item))}>
              ${item}

            </li>
            `)}
          </ul>
`;
  }

}
