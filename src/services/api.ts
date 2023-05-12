const url = 'https://api.dictionaryapi.dev/api/v2/entries/en'

interface Definition {
  antonyms: string[]
  synonyms: string[]
  definition: string
}

interface Meaning {
  partOfSpeech: string
  synonyms: string[]
  antonyms: string[]
  definitions: Array<Definition>
}

interface Phonetic {
  text: string
  audio: string
}

interface DictionaryResponse {
  meanings: Array<Meaning>
  phonetic: string
  phonetics: Array<Phonetic>
  sourceUrls: string[]
  word: string
}

export async function get(word: string): Promise<DictionaryResponse> {
  try {
    const response = await fetch(`${url}/${word}`)
    return response.json()
  } catch {
    throw new Error(`Error fetching`)
  }
}
