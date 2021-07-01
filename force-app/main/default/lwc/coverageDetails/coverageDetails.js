import { LightningElement, api } from 'lwc';

export default class CoverageDetails extends LightningElement {
 
  @api datesend;

  connectedCallback() {
    console.log(this.datesend);
  }

 

}