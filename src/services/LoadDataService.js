class LoadDataService {

    async loadData (){
        const response = await fetch("/brendoviData.json");
        const data = await response.json();
        return data;
    }
    
}

const loadDataServiceInstance = new LoadDataService();
export default loadDataServiceInstance;