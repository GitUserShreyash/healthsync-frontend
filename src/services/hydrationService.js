import { createHydrationEntry, fetchHydrationEntries } from '../api/hydrationApi.js'

export const hydrationService = {
	listHydrationEntries: fetchHydrationEntries,
	addHydrationEntry: createHydrationEntry,
}
