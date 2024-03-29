import _ from 'lodash'
import { create } from 'zustand'

const initialFormData = {
	methodology: '',
	findings: '',
	sketches: '',
	visual: '',
	prototype_url: '',
	git_url: '',
}

export const useProcessStore = create((set, get) => ({
	formData: _.clone(initialFormData),

	getIsFilledFormData: () => _.every(get().formData, (v) => !!v),
	setFormData: (key, data) => set({ formData: _.set(get().formData, key, data) }),
	setInitialFormData: (data) =>
		set({
			formData: _.assign(
				get().formData,
				_.pick(data, ['methodology', 'findings', 'sketches', 'visual', 'prototype_url', 'git_url'])
			),
		}),
	resetFormData: () => set({ formData: initialFormData }),
}))
