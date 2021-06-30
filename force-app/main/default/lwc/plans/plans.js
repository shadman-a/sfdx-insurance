import { LightningElement, track } from 'lwc';
import fetchPolicies from '@salesforce/apex/InsuranceService.getPolicies';
import Id from '@salesforce/user/Id';

export default class Plans extends LightningElement {
  @track listOfPolicies;
  cartId;
  connectedCallback() {
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
    addToCart({ product: event.target.dataset.id, currentUser: Id})
    .then((result) => {
      console.log(result);
    })

    .catch((error) => {
      this.error = error;
      console.log(error)
    });

  }
}