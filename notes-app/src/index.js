import { getNotes, createNote, removeNote, upadteNote } from "./notes";
import { getFilters, setFilters } from "./filters";

// console.log(getNotes());
// createNote();
// removeNote('44799f2d-c194-4184-82a2-8e43827245e2');
// upadteNote('e4596337-f51c-403e-93b6-e4ffb39864cd', {title: 'This is my title', body: 'This is my body'})
// console.log(getNotes());
console.log(getFilters());
setFilters({
  searchText: 'Office',
  sortBy: 'byCreated'
});
console.log(getFilters());