import { create } from 'zustand'

export const useDataStore = create((set) => ({
  plan: null,
  setPlan: (newPlan) => set({ plan: newPlan}),
  modalStatus: false,
  updateModalStatus : (newStatus) => set({modalStatus: newStatus}),

}))