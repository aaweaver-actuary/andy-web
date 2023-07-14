import { create } from 'zustand';
import { persist, createJsonStorage } from 'zustand/middleware';

const addToArray = (array, item) => [...array, item];
const removeFromArray = (array, item) =>
  array.filter((arrayItem) => arrayItem !== item);

const useStore = create({
  // state that persists for the CURRENT SESSION ONLY

  // which projects are expanded on the projects page:
  // persist((set, get) => ({
  projectsExpanded: [],
  addProjectsExpanded: (proj) =>
    set({
      projectsExpanded: addToArray(get().projectsExpanded, proj),
    }),
  removeProjectsExpanded: (proj) =>
    set({
      projectsExpanded: removeFromArray(get().projectsExpanded, proj),
    }),
  // })
});
// {
//   name: 'session-storage',
//   getStorage: () => sessionStorage,
// },

export default useStore;
