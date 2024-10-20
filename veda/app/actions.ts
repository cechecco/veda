'use server'

import { openDb } from '../lib/db'

export async function subscribeToNewsletter(email: string) {
  const db = await openDb();
  try {
    await db.run('INSERT INTO subscribers (email) VALUES (?)', email);
    return { success: true, message: 'Iscrizione avvenuta con successo!' };
  } catch (error: unknown) {
    if (typeof error === 'object' && error && 'errno' in error && error.errno === 19) {
      return { success: false, message: 'Questa email è già iscritta.' };
    }
    console.error('Errore durante l\'iscrizione:', error);
    return { success: false, message: 'Si è verificato un errore durante l\'iscrizione. Riprova più tardi.' };
  }
}
