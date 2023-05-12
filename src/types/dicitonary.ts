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
