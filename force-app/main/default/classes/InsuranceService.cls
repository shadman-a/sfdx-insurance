public with sharing class InsuranceService {
    @AuraEnabled(cacheable=true)
	public static List<Policy__c> getPolicies(){
        try{
            String query = 'SELECT Name, Coverage__c, Monthly_Premium__c, Yearly_Premium__c, FROM Policy__c';
            List<Policy__c> listOfPolicies = Database.query(query);
            return listOfPolicies;           
        }
        catch(Exception e){
            throw e;
        }
    }
}
