import { LightningElement, track, api } from 'lwc';
import getPolicies from '@salesforce/apex/InsuranceService.getPolicies';
import {FlowAttributeChangeEvent, FlowNavigationNextEvent} from 'lightning/flowSupport';
import Id from '@salesforce/user/Id';

export default class Plans extends LightningElement {
  @track listOfPolicies;
 
  connectedCallback() {
    console.log("hello")
    getPolicies()
      .then((result) => {
        console.log(result);
        this.listOfPolicies = result;
        this.error = undefined;
      })
      .catch((error) => {
        this.error = error;
        this.listOfPolicies = undefined;
      });
  }

  handleSelection(event){
    console.log("product id",event.target.dataset.id)
    console.log("user id",Id)
    this.txtBoxVal = event.target.dataset.id
    // addToCart({ product: event.target.dataset.id, currentUser: Id})
    // .then((result) => {
    //   console.log(result);
    // })
    const nextNavigationEvent = new FlowNavigationNextEvent();
    this.dispatchEvent(nextNavigationEvent);
    // .catch((error) => {
    //   this.error = error;
    //   console.log(error)
    // });

  }
}