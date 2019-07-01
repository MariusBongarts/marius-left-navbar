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
  navigationItems = ['Home', 'Components', 'Documentation', 'Get started', 'Account'];

  getClassMap(item: string) {
    const classInfo = { listItem: true, selected: this.selectedItem === item };
    return classInfo;
  }

  emit() {
    console.log('Button clicked');
    this.dispatchEvent(
      new CustomEvent('buttonClick', {
        bubbles: true
      })
    );
  }

  render() {
    return html`
          <ul>
            ${this.navigationItems.map(item => html`
            <li @click=${() => this.selectedItem = item} class=${classMap(this.getClassMap(item))}>
              ${item}

            </li>
            `)}
          </ul>
`;
  }

}
