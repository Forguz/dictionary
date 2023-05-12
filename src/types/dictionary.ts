export interface Definition {
  antonyms: string[]
  synonyms: string[]
  definition: string
  example?: string
}

export interface Meaning {
  partOfSpeech: string
  synonyms: string[]
  antonyms: string[]
  definitions: Array<Definition>
}

export interface Phonetic {
  text: string
  audio: string
}

export interface DictionaryResponse {
  meanings: Array<Meaning>
  phonetic: string
  phonetics: Array<Phonetic>
  sourceUrls: string[]
  word: string
}

export function isDictionaryResponse(
  value: DictionaryResponse | unknown
): value is DictionaryResponse {
  return (value as DictionaryResponse).word !== undefined
}

export interface DictionaryResponseError {
  title: string
  message: string
  resolution: string
}
