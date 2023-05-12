const url = 'https://api.dictionaryapi.dev/api/v2/entries/en'
import { DictionaryResponse, DictionaryResponseError } from '@/types/dictionary'

export async function get(
  word: string
): Promise<DictionaryResponse[] | DictionaryResponseError> {
  try {
    const response = await fetch(`${url}/${word}`)
    return response.json()
  } catch {
    throw new Error(`Error fetching`)
  }
}
