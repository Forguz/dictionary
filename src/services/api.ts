const url = 'https://api.dictionaryapi.dev/api/v2/entries/en'
import { DictionaryResponse } from '@/types/dicitonary'

export async function get(word: string): Promise<DictionaryResponse> {
  try {
    const response = await fetch(`${url}/${word}`)
    return response.json()
  } catch {
    throw new Error(`Error fetching`)
  }
}
