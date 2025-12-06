
import type { Contact,  ContactResponse } from '../entities/Contact';
export interface ContactRepository{
requestContact(Contact:Contact):Promise<ContactResponse>
}