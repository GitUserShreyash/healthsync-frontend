export async function fetchHydrationEntries() {
	return []
}

export async function createHydrationEntry(entry) {
	return { ...entry, id: Date.now() }
}
