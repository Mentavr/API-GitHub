
const initialState = () => {
    let stateData = [];
    let stateRepo = [];
    
    function setStateData(data = []) {
        stateData = data
    }

    function getStateData() {
        return stateData;
    }

    function addNewRepo(idRepo) {
       const elem = stateData.filter(({ id }) => +idRepo === +id);
       stateRepo = [...stateRepo, ...elem]
    }

    function getElemById (idRepo) {
        const repo = stateRepo.filter(({ id }) => +idRepo === +id)
        return repo[0];
    }

    function deleteRepo(idRepo) {
        const repos = stateRepo.filter(({ id }) => +idRepo !== +id)
        stateRepo = [...repos]
     }

    function getStateRepo() {
        return stateRepo ;
    }

    return { getStateData, setStateData, addNewRepo, getStateRepo, deleteRepo,  getElemById } 
}

export const state = initialState();