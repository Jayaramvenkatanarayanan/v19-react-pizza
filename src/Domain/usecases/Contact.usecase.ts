import type { Contact } from "../entities/Contact";
import type { ContactRepository } from "../repositories/ContactRepository";

export class ContactUseCase {
  constructor(private repository: ContactRepository) {}
  async contactRequest(contact: Contact) {
    return this.repository.requestContact(contact);
  }
}
